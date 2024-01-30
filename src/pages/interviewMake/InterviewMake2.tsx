import { useRecoilValue } from 'recoil';
import OndatCalendar from '../../components/calendar/OndatCalendar';
import TimeTable from '../../components/timeTable/TimeTable';
import * as S from './InterviewMake2.style';
import { selectedDatesAtom } from '../../recoil/selectedDatesAtom';

function InterviewMake2() {
	const selectedDates = useRecoilValue(selectedDatesAtom);
	return (
		<S.MakeContainer>
			<img src={process.env.PUBLIC_URL + '/images/iconPage3_2.svg'} />
			<S.MainText>
				면접 페이지 만들기
				<S.MainTextCircle />
			</S.MainText>
			<S.MakeTextContainer>
				<S.MakeTextCircle />
				<S.MakeText>면접 기간*</S.MakeText>
				<S.MakeTextSub>면접 예상 소요 시간을 설정해 주세요</S.MakeTextSub>
			</S.MakeTextContainer>
			<S.CalendarWrapper>
				<OndatCalendar />
			</S.CalendarWrapper>
			<S.MakeTextContainer>
				<S.MakeTextCircle />
				<S.MakeText>면접 시간대*</S.MakeText>
				<S.MakeTextSub>
					면접 예상 소요 시간을 설정해면접페이지에 공개할 시간을 드래그하여 설정해 주세요
					<br /> 지원자는 아래 선택된 시간대 외의 시간을 선택할 수 없습니다 주세요
				</S.MakeTextSub>
			</S.MakeTextContainer>
			<S.TimeTableWrapper>{selectedDates.length > 0 ? <TimeTable selectedDates={selectedDates} /> : null}</S.TimeTableWrapper>
		</S.MakeContainer>
	);
}

export default InterviewMake2;
