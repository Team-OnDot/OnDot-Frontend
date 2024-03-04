import { useNavigate } from 'react-router-dom';
import * as In from './InterviewApplyInputSchedule.style';
import TimeTable from '../../../components/timeTable/TimeTable';
import { BtnTimeTablePrev, BtnTimeTableNext } from '../../interviewMake/InterviewMake2.style';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { chunkArray } from '../../../utils/chunkArray';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { interviewApplyAtom } from '../../../recoil/interviewApplyAtom';
import { scheduleAtom } from '../../../recoil/interviewMakeAtom';

function InterviewApplyInputSchedule() {
	const splideRef = useRef<Splide>(null);
	const [interviewApply, setInterviewApply] = useRecoilState(interviewApplyAtom);
	const selectedTimes = useRecoilValue(scheduleAtom);
	const scheduleAtomReset = useResetRecoilState(scheduleAtom);
	const [sortedDates, setSortedDates] = useState([]);
	const [availableTimes, setAvailableTimes] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const getData = async () => {
			try {
				const response = await axios({
					url: `/api/v1/organizations/applicants/${interviewApply.organizationId}/${interviewApply.interviewId}`,
					method: 'get',
				});
				setSortedDates(response.data.content.interviewDates);
				setAvailableTimes(response.data.content.interviewTimes);
			} catch (error) {
				console.log(error);
			}
		};
		getData();
	}, []);
	
	//이전 버튼 클릭 시
	const onClickBackBtn = () => {
		navigate('/interview-apply-input-info');
	};

	//완료 버튼 클릭 시
	const onClickCompleteBtn = () => {
		//시간 string으로 변환
		const time = [];
		for (let i = 0; i < selectedTimes.length; i++) {
			time[i] = format(selectedTimes[i], "yyyy-MM-dd'T'HH:mm:ss");
		}
		axios({
			url: `/api/v1/interviews/${interviewApply.interviewId}/applicants`,
			method: 'post',
			data: {
				name: interviewApply.applyName,
				email: interviewApply.applyEmail,
				phone: interviewApply.applyPhone,
				dates: time,
			},
		})
		.then((response) => {
			console.log(response.data.content);
			scheduleAtomReset();
			navigate('/interview-apply-complete');
		})
		.catch((error) => {
			console.log('실패');
			console.error('AxiosError:', error);
		});
	};

	const goPrev = () => {
		if (splideRef.current) {
			splideRef.current.go('<');
			return;
		}
	};

	const goNext = () => {
		if (splideRef.current) {
			splideRef.current.go('>');
			return;
		}
	};

	return (
		<div style={{ width: 'calc(100% - 375px)', paddingRight: '60px' }}>
			{/*Header*/}
			<In.InputInfoHeader>
				<In.Ellipse1 />
				{sortedDates[0]} ~ {sortedDates[sortedDates.length-1]}
			</In.InputInfoHeader>
			<img src={process.env.PUBLIC_URL + '/images/lineCircleLong.svg'} />
			<In.HeaderTxt>가능한 면접 시간을 클릭하여 선택해 주세요. 한 번 더 클릭하면 선택된 시간이 삭제됩니다.</In.HeaderTxt>

			{/*Main*/}
			{sortedDates.length > 0 ? (
				<In.TimeTableWrapper>
					<Splide
						ref={splideRef}
						options={{
							pagination: false,
							arrows: false,
							// width: 831,
							drag: false,
						}}
					>
						{/* sortedDates를 5개씩 끊어서 SplideSlide에 전달 */}
						{chunkArray(sortedDates, 5).map((chunk, index) => (
							<SplideSlide key={index}>
								<TimeTable interviewTime={30} selectedDates={chunk} availableTimes={availableTimes} />
							</SplideSlide>
						))}
					</Splide>
					<BtnTimeTablePrev isMultiplePage={sortedDates.length > 5} onClick={goPrev} />
					<BtnTimeTableNext isMultiplePage={sortedDates.length > 5} onClick={goNext} />
				</In.TimeTableWrapper>
			) : null}

			{/*Footer*/}
			<In.InputTimeFooter>
				<In.BackBtn onClick={onClickBackBtn}>이전</In.BackBtn>
				<In.CompleteBtn onClick={onClickCompleteBtn}>완료</In.CompleteBtn>
			</In.InputTimeFooter>
		</div>
	);
}

export default InterviewApplyInputSchedule;
