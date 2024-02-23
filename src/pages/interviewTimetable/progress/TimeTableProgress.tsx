import * as S from './TimeTableProgress.style';
import { useRef, useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { chunkArray } from '../../../utils/chunkArray';
import { useRecoilValue } from 'recoil';
import TimeTable from '../../../components/timeTable/TimeTable';
import { selectedDatesAtom, scheduleAtom } from '../../../recoil/interviewMake2Atom';

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
	const availableTimes = [new Date('2024-02-13T10:00:00'), new Date('2024-02-13T12:00:00'), new Date('2024-02-13T12:30:00'), new Date('2024-02-13T15:00:00')];
	const schedule = useRecoilValue(scheduleAtom);
	const [sortedDates, setSortedDates] = useState<string[]>([]);
	const [clickedTime, setClickedTime] = useState<Date>();

	const dummyList = [
		{ name: '이선호', phone: '010-0000-0000' },
		{ name: '오설란', phone: '010-0000-0000' },
		{ name: '이미지', phone: '010-0000-0000' },
		{ name: '이다솔', phone: '010-0000-0000' },
	];

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
									<TimeTable interviewTime={30} selectedDates={chunk} availableTimes={availableTimes} isConfirmed={true} clickedTime={clickedTime} setClickedTime={setClickedTime} />
								</SplideSlide>
							))}
						</Splide>
						<S.BtnTimeTablePrev isMultiplePage={selectedDates.length > 5} onClick={goPrev} />
						<S.BtnTimeTableNext isMultiplePage={selectedDates.length > 5} onClick={goNext} />
					</S.TimeTableWrapper>
				) : null}
				<S.TextApplicant>오전 10:00 - 오전 10:30에 면접 가능한 지원자</S.TextApplicant>
				<S.AvailableApplicantContainer>
					{dummyList.map((item) => {
						return (
							<S.AvailableApplicantWrapper>
								<S.IconApplicant />
								<div>
									<span>{item.name}</span>
									<span>{item.phone}</span>
								</div>
							</S.AvailableApplicantWrapper>
						);
					})}
				</S.AvailableApplicantContainer>
				<S.BtnWrapper>
					<S.BtnConfirm>타임테이블 생성하기</S.BtnConfirm>
				</S.BtnWrapper>
			</S.Container>
		</>
	);
}

export default TimeTableProgress;
