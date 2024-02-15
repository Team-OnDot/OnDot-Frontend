import { useNavigate } from 'react-router-dom';
import * as In from './InterviewApply.style';
import TimeTable from '../../components/timeTable/TimeTable';
import { BtnTimeTablePrev, BtnTimeTableNext } from '../interviewMake/InterviewMake2.style';
import { TimeTableWrapper } from './InterviewApply.style';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { chunkArray } from '../../utils/chunkArray';
import { useRef, useState } from 'react';

function InterviewApplyInputSchedule() {
	const splideRef = useRef<Splide>(null);
	const [sortedDates, setSortedDates] = useState(['2024-02-02', '2024-02-06', '2024-02-07', '2024-02-08', '2024-02-09', '2024-02-10']);
	const availableTimes = [new Date('2024-02-06T10:00:00'), new Date('2024-02-06T13:00:00')];
	const navigate = useNavigate();

	//이전 버튼 클릭 시
	const onClickBackBtn = () => {
		navigate('/interview-apply-input-info');
	};

	//완료 버튼 클릭 시
	const onClickCompleteBtn = () => {
		navigate('/interview-apply-complete');
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
		<div>
			{/*Header*/}
			<In.InputInfoHeader>
				<In.Ellipse1 />
				2024년 1월 1일 ~ 2024년 1월 5일
			</In.InputInfoHeader>
			<img src={process.env.PUBLIC_URL + '/images/lineCircleLong.svg'} />
			<In.HeaderTxt>가능한 면접 시간을 클릭하여 선택해 주세요. 한 번 더 클릭하면 선택된 시간이 삭제됩니다.</In.HeaderTxt>

			{/*Main*/}
			{sortedDates.length > 0 ? (
				<TimeTableWrapper>
					<Splide
						ref={splideRef}
						options={{
							pagination: false,
							arrows: false,
							width: 831,
							drag: false,
						}}
					>
						{/* sortedDates를 5개씩 끊어서 SplideSlide에 전달 */}
						{chunkArray(sortedDates, 5).map((chunk, index) => (
							<SplideSlide key={index}>
								<TimeTable selectedDates={chunk} availableTimes={availableTimes} />
							</SplideSlide>
						))}
					</Splide>
					<BtnTimeTablePrev isMultiplePage={sortedDates.length > 5} onClick={goPrev} />
					<BtnTimeTableNext isMultiplePage={sortedDates.length > 5} onClick={goNext} />
				</TimeTableWrapper>
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
