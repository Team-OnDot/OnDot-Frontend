import * as S from './TimeTableProgress.style';
import { useRef, useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { chunkArray } from '../../../utils/chunkArray';
import { useRecoilValue } from 'recoil';
import TimeTable from '../../../components/timeTable/TimeTable';
import { selectedDatesAtom, scheduleAtom } from '../../../recoil/interviewMake2Atom';
import { addMinutes, format } from 'date-fns';

function TimeTableProgress() {
	const group = {
		name: '온닷',
		type: '동아리',
		link: 'Ondot.co.kr',
		text: '안녕하세요. 온닷입니다.',
		contact: 'ondot@gmail.com',
	};

	const splideRef = useRef<Splide>(null);

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

	const [selectedDates, setSelectedDates] = useState<string[]>(['2024-02-13', '2024-02-14', '2024-02-15', '2024-02-16', '2024-02-17', '2024-02-18']);
	const availableTimes = [new Date('2024-02-13T10:00:00'), new Date('2024-02-13T12:00:00')];
	const schedule = useRecoilValue(scheduleAtom);
	const [sortedDates, setSortedDates] = useState<string[]>([]);
	const [clickedTime, setClickedTime] = useState<Date>();
	const [matchedIndex, setMatchedIndex] = useState<number>(-1);
	const [matchedStartTime, setMatchedStartTime] = useState<string>();
	const [matchedEndTime, setMatchedEndTime] = useState<string>();

	const dummyData = {
		applicantsCount: 5,
		requiredTime: 30,
		timeCells: [
			{
				dateTime: '2024-02-13T10:00:00',
				applicants: [
					{
						name: '이선호',
						phone: '010-0000-0000',
					},
					{
						name: '이미지',
						phone: '010-0000-0000',
					},
					{
						name: '이다솔',
						phone: '010-0000-0000',
					},
					{
						name: '오설란',
						phone: '010-0000-0000',
					},
				],
			},

			{
				dateTime: '2024-02-13T12:00:00',
				applicants: [
					{
						name: '이선호',
						phone: '010-0000-0000',
					},
					{
						name: '이미지',
						phone: '010-0000-0000',
					},
				],
			},
		],
	};

	/* 날짜 정렬 */
	useEffect(() => {
		if (selectedDates.length > 1) {
			const sorted = [...selectedDates].sort((a, b) => {
				return new Date(a).getTime() - new Date(b).getTime();
			});
			setSortedDates(sorted);
			console.log(sorted);
			return;
		}
		setSortedDates(selectedDates);
	}, [selectedDates]);

	/* 선택한 셀 인덱스 구하기 */
	useEffect(() => {
		if (clickedTime) {
			const index = dummyData.timeCells.findIndex((cell) => format(new Date(cell.dateTime), 'yyyy-MM-dd HH:mm') === format(clickedTime, 'yyyy-MM-dd HH:mm'));
			setMatchedIndex(index);
		}
	}, [clickedTime]);

	/* 선택한 셀 시간 포맷팅 */
	useEffect(() => {
		if (matchedIndex !== -1) {
			const startTime = new Date(dummyData.timeCells[matchedIndex].dateTime);
			const formattedStartTime = format(startTime, 'a h시 mm분').replace('AM', '오전').replace('PM', '오후');
			const formattedEndTime = format(addMinutes(startTime, dummyData.requiredTime), 'a h시 mm분').replace('AM', '오전').replace('PM', '오후');

			setMatchedStartTime(formattedStartTime);
			setMatchedEndTime(formattedEndTime);
		}
	}, [matchedIndex]);

	return (
		<>
			<S.Container>
				<S.TextPeriod>2024년 1월 1일 ~ 2024년 1월 5일</S.TextPeriod>
				<S.Line src={process.env.PUBLIC_URL + '/images/lineCircleLong.svg'} />
				<S.TextDescription>가능한 면접 시간을 클릭하여 선택해 주세요. 한 번 더 클릭하면 선택된 시간이 삭제됩니다.</S.TextDescription>
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
									<TimeTable selectedDates={chunk} availableTimes={availableTimes} isConfirmed={true} clickedTime={clickedTime} setClickedTime={setClickedTime} />
								</SplideSlide>
							))}
						</Splide>
						<S.BtnTimeTablePrev isMultiplePage={selectedDates.length > 5} onClick={goPrev} />
						<S.BtnTimeTableNext isMultiplePage={selectedDates.length > 5} onClick={goNext} />
					</S.TimeTableWrapper>
				) : null}
				<S.TextApplicant>{matchedStartTime ? `${matchedStartTime} ~ ${matchedEndTime}에 면접 가능한 지원자` : null}</S.TextApplicant>
				<S.AvailableApplicantContainer>
					{matchedIndex !== -1
						? dummyData.timeCells[matchedIndex].applicants.map((item, index) => (
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
					<S.BtnConfirm>타임테이블 생성하기</S.BtnConfirm>
				</S.BtnWrapper>
			</S.Container>
		</>
	);
}

export default TimeTableProgress;
