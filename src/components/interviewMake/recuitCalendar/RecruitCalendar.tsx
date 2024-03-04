import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './RecruitCalendar.css';
import { format } from 'date-fns';
import * as S from './RecruitCalendar.style';
import { useRecoilState } from 'recoil';
import { recruitStartDateAtom, recruitEndDateAtom } from '../../../recoil/interviewMakeAtom';
import { useState } from 'react';

const RecruitCalendar = () => {
	const [startDate, setStartDate] = useRecoilState(recruitStartDateAtom);
	const [endDate, setEndDate] = useRecoilState(recruitEndDateAtom);
	const [isCalendar, setIsCalendar] = useState(false);

	const onCalendar = () => {
		setIsCalendar(!isCalendar);
	};

	const onChangeDate = (e: any) => {
		const startDateFormat = format(e[0], 'yyyy-MM-dd');
		const endDateFormat = format(e[1], 'yyyy-MM-dd');

		setStartDate(startDateFormat);
		setEndDate(endDateFormat);
		setIsCalendar(!isCalendar);
	};

	return (
		<>
            <S.MakeInputContainer
                toggle={isCalendar ? true: false}  
                color={(startDate==='' && endDate==='') ? '#959595': '#606060'}
            >
                <S.InterviewIcon src={process.env.PUBLIC_URL + '/images/iconDate_gray.svg'}></S.InterviewIcon>
                <S.InputWrap toggle={isCalendar? true:false} onClick={onCalendar}>
                    <S.MakeInputDate 
                        type='text' 
                        id='startDate'
                        value={(startDate===''? '____년 _월 _일': startDate) + " ~ " + (endDate===''? '____년 _월 _일':endDate)} 
                    /> 
                </S.InputWrap>
                <S.CalendarWrap className='apply-calendar' onCalendar={isCalendar} >
                    <Calendar
                        onChange={onChangeDate} 
                        selectRange={true}
                        next2Label={null}
                        prev2Label={null} 
                        formatDay={(locale, date) => format(date,'dd')} 
                        showNeighboringMonth={false} 
                    />
                </S.CalendarWrap>
            </S.MakeInputContainer>  
		</>
	);
};

export default RecruitCalendar;
