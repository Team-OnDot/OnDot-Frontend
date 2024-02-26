import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './ApplyCalendar.css';
import { format } from 'date-fns';
import moment from "moment";
import * as S from './ApplyCalendar.style';
import { useRecoilState } from 'recoil';
import { applyStartDateAtom, applyEndDateAtom } from '../../../recoil/interviewAtoms';
import { useState } from 'react';

const ApplyCalendar = () => {
	const [applyStartDate, setApplyStartDate] = useRecoilState(applyStartDateAtom);
    const [applyEndDate, setApplyEndDate] = useRecoilState(applyEndDateAtom);
    const [isCalendar, setIsCalendar] = useState(false);

    const onCalendar = () => { 
        setIsCalendar(!isCalendar);
    };

    const onChangeDate = (e: any) => { 
        const startDateFormat = moment(e[0]).format("YYYY-MM-DD");
        const endDateFormat = moment(e[1]).format("YYYY-MM-DD");

        setApplyStartDate(startDateFormat);
        setApplyEndDate(endDateFormat);
        setIsCalendar(!isCalendar);
    };

	return (
		<>
            <S.MakeInputContainer
                toggle={isCalendar ? true: false}  
                color={(applyStartDate==='' && applyEndDate==='') ? '#FF4A4A': '#606060'}
            >
                <S.InterviewIcon src={process.env.PUBLIC_URL + '/images/iconDate_gray.svg'}></S.InterviewIcon>
                <S.InputWrap toggle={isCalendar? true:false} onClick={onCalendar}>
                    <S.MakeInputDate 
                        type='text' 
                        id='startDate'
                        value={(applyStartDate===''? '____년 _월 _일': applyStartDate) + " ~ " + (applyEndDate===''? '____년 _월 _일':applyEndDate)} 
                    /> 
                </S.InputWrap>
                <S.CalendarWrap className='apply-calendar' onCalendar={isCalendar} >
                    <Calendar
                        onChange={onChangeDate} 
                        selectRange={true}
                        next2Label={null}
                        prev2Label={null} 
                        formatDay={(locale, date) => moment(date).format('DD')} 
                        showNeighboringMonth={false} 
                    />
                </S.CalendarWrap>
            </S.MakeInputContainer>  
		</>
	);
};

export default ApplyCalendar;
