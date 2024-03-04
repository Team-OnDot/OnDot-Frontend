import * as S from './TimeTableProgress.style';
import { useRef, useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { chunkArray } from '../../../utils/chunkArray';
import TimeTable from '../../../components/timeTable/TimeTable';
import { addMinutes, format } from 'date-fns';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import ConfirmModal from '../../../components/modal/confirm/ConfirmModal';

function TimeTableProgress() {
	const splideRef = useRef<Splide>(null);
	const { interviewId } = useParams();
	const [isOpen, setIsOpen] = useState(false);

	const onClick = () => {
		if (!isOpen) {
			setIsOpen(true);
		}
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

	type TimeCells = {
		dateTime: string;
		applicants: [
			{
				name: string;
				phone: string;
			},
		];
	};

	type InterviewData = {
		name: string;
		description: string;
		applyStartDate: string;
		applyEndDate: string;
		requiredTime: number;
		interviewerCount: number;
		applicantCount: number;
		location: string;
		interviewStartDate: string;
		interviewEndDate: string;
		interviewDates: string[];
		timeCells: TimeCells[];
	};

	const defaultInterviewData: InterviewData = {
		name: '',
		description: '',
		applyStartDate: '',
		applyEndDate: '',
		requiredTime: 0,
		interviewerCount: 0,
		applicantCount: 0,
		location: '',
		interviewStartDate: '',
		interviewEndDate: '',
		interviewDates: [],
		timeCells: [],
	};

	const [sortedDates, setSortedDates] = useState<string[]>([]);
	const [clickedTime, setClickedTime] = useState<Date>();
	const [matchedIndex, setMatchedIndex] = useState<number>(-1);
	const [matchedStartTime, setMatchedStartTime] = useState<string>();
	const [matchedEndTime, setMatchedEndTime] = useState<string>();

	const [startDateString, setStartDateString] = useState<string>();
	const [endDateString, setEndDateString] = useState<string>();

	const [interviewData, setInterviewData] = useState<InterviewData>(defaultInterviewData);
	const [availableTimes, setAvailableTimes] = useState<string[]>();
	const accessToken = localStorage.getItem('isLogin');

	useEffect(() => {
		const getData = async () => {
			try {
				const response = await axios({
					url: `/api/v1/interviews/${interviewId}`,
					method: 'get',
					params: {
						interviewId: interviewId,
					},
					headers: {
						Authorization: 'Bearer ' + accessToken,
					},
				});
				setInterviewData(response.data.content);
			} catch (error) {
				console.log(error);
			}
		};
		getData();
	}, []);

	/* availableTimes 설정 */
	useEffect(() => {
		if (interviewData.timeCells.length > 0) {
			const temp = interviewData.timeCells.map((cell) => cell.dateTime);
			setAvailableTimes(temp);
		}
	}, [interviewData]);

	/* 날짜 정렬 */
	useEffect(() => {
		if (interviewData) {
			if (interviewData.interviewDates.length > 1) {
				const sorted = [...interviewData.interviewDates].sort((a, b) => {
					return new Date(a).getTime() - new Date(b).getTime();
				});
				setSortedDates(sorted);
				console.log(sorted);
				return;
			}
			setSortedDates(interviewData.interviewDates);
		}
	}, [interviewData.interviewDates]);

	/* 선택한 셀 인덱스 구하기 */
	useEffect(() => {
		if (clickedTime && interviewData.timeCells.length > 0) {
			const index = interviewData.timeCells.findIndex((cell) => format(new Date(cell.dateTime), 'yyyy-MM-dd HH:mm') === format(clickedTime, 'yyyy-MM-dd HH:mm'));
			setMatchedIndex(index);
		}
	}, [clickedTime]);

	/* 선택한 셀 시간 포맷팅 */
	useEffect(() => {
		if (matchedIndex !== -1) {
			const startTime = new Date(interviewData.timeCells[matchedIndex].dateTime);
			const formattedStartTime = format(startTime, 'a h시 mm분').replace('AM', '오전').replace('PM', '오후');
			const formattedEndTime = format(addMinutes(startTime, interviewData!.requiredTime), 'a h시 mm분').replace('AM', '오전').replace('PM', '오후');

			setMatchedStartTime(formattedStartTime);
			setMatchedEndTime(formattedEndTime);
		}
	}, [matchedIndex]);

	useEffect(() => {
		if (interviewData && interviewData.interviewStartDate && interviewData.interviewEndDate) {
			setStartDateString(format(new Date(interviewData.interviewStartDate), 'yyyy년 M월 d일'));
			setEndDateString(format(new Date(interviewData.interviewEndDate), 'yyyy년 M월 d일'));
		}
	});

	const navigate = useNavigate();

	const confirmInterview = async (interviewId: string) => {
		if (interviewId) {
			try {
				await axios({
					url: `/api/v1/interviews/${interviewId}`,
					method: 'post',
					params: {
						interviewId: parseInt(interviewId),
					},
					headers: {
						Authorization: 'Bearer ' + accessToken,
					},
				});
				navigate('/timetable-view3');
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<>
			<S.Container>
				<S.TextPeriod>{interviewData.interviewDates.length === 1 ? startDateString : `${startDateString} ~ ${endDateString}`}</S.TextPeriod>
				<S.Line src={process.env.PUBLIC_URL + '/images/lineCircleLong.svg'} />
				<S.TextDescription>시간대를 클릭하여 해당 시간에 면접 가능한 지원자를 확인할 수 있습니다.</S.TextDescription>
				{sortedDates.length > 0 ? (
					<S.TimeTableWrapper>
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
									<TimeTable interviewTime={30} selectedDates={chunk} availableTimes={availableTimes} isConfirmed={true} clickedTime={clickedTime} setClickedTime={setClickedTime} />
								</SplideSlide>
							))}
						</Splide>
						<S.BtnTimeTablePrev isMultiplePage={interviewData.interviewDates.length > 5} onClick={goPrev} />
						<S.BtnTimeTableNext isMultiplePage={interviewData.interviewDates.length > 5} onClick={goNext} />
					</S.TimeTableWrapper>
				) : null}
				<S.TextApplicant>{matchedStartTime ? `${matchedStartTime} ~ ${matchedEndTime}에 면접 가능한 지원자` : null}</S.TextApplicant>
				<S.AvailableApplicantContainer>
					{matchedIndex !== -1
						? interviewData!.timeCells[matchedIndex].applicants.map((item, index) => (
								<S.AvailableApplicantWrapper key={index}>
									<S.IconApplicant />
									<div>
										<span>{item.name}</span>
										<span>{item.phone}</span>
									</div>
								</S.AvailableApplicantWrapper>
						  ))
						: null}
				</S.AvailableApplicantContainer>
				<S.BtnWrapper>
					<S.BtnConfirm onClick={onClick}>타임테이블 생성하기</S.BtnConfirm>
				</S.BtnWrapper>
			</S.Container>
			{isOpen ? <ConfirmModal setIsOpen={setIsOpen} interviewId={interviewId!} confirmInterview={confirmInterview} /> : null}
		</>
	);
}

export default TimeTableProgress;
