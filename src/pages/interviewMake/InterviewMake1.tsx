import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useSetRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import{ InterviewInfo, applyEndDateAtom, applyStartDateAtom, interviewAtom, interviewTimeAtom } from './../../recoil/interviewAtoms';
import * as S from './InterviewMake1.style';
import TimeType from '../../components/interviewMake/timeType/TimeType';
import ApplyCalendar from "../../components/interviewMake/applyCalendar/ApplyCalendar";

function InterviewMake1() {
    const setInterviewAtom = useSetRecoilState(interviewAtom);
    const applyStartDate = useRecoilValue(applyStartDateAtom);  //지원기간 시작
    const applyEndDate = useRecoilValue(applyEndDateAtom);      //지원기간 끝
    const interviewTime = useRecoilValue(interviewTimeAtom);    //인터뷰 시간 값 가져오기

    const resetApplyStartDate = useResetRecoilState(applyStartDateAtom);
    const resetApplyEndDate = useResetRecoilState(applyEndDateAtom);
    const resetInterviewTimetDate = useResetRecoilState(interviewTimeAtom);

    const regExpName = /^.{2,20}$/;
    const regExpFormat = /^\d{1,2}$/;

	const navigate = useNavigate();

    const { 
        register,
        handleSubmit,
        watch,
        resetField,
        setError,
        formState: { errors } 
    } = useForm<InterviewInfo>({
        mode: "onBlur",
        defaultValues: {}
    });
    

    //다음 버튼 활성화    
    const [isActive, setIsActive] = useState(false);
    const watchAll = Object.values(watch());
    useEffect(() => {
        if (watchAll.every((el) => el) && applyEndDate!=='' && applyEndDate!=='') {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [watchAll, applyEndDate, applyEndDate]);

    //입력 취소 버튼
    const removeInput = (name:any) => {

        if(name === 'format1'){
            resetField('format2');
            setError('format2',  {message: ''});
        }

        resetField(name);
        setError(name,  {message: ''});
    }
   
     //다음 버튼 클릭 시
    const onValid = () => {
        const data = {
            interviewName: watch('interviewName'),
            startDate: applyStartDate,
            endDate: applyEndDate,
            timeType: interviewTime,
            format1: watch('format1'),
            format2: watch('format2'),
            interviewPlace: watch('interviewPlace')
        }
        if (isActive) {
            // 아톰에 값 저장
            setInterviewAtom(data);

            // 아톰에 들어있는 값 리셋
            resetApplyStartDate();
            resetApplyEndDate();
            resetInterviewTimetDate();

            // 다음 페이지 이동
            navigate('/interview-make-2');
        }
        else if (data.startDate==='' || data.endDate==='') {
            setError('startDate', { message: '지원 시작일과 종료일을 설정해주세요.' });
            setError('endDate', { message: '지원 시작일과 종료일을 설정해주세요.' });
        }   
    }

	return (
        <S.MakeContainer onSubmit={handleSubmit(onValid)}>
            <img src={process.env.PUBLIC_URL + '/images/iconPage3_1.svg'} />
            <S.MainText>면접 페이지 만들기<S.MainTextCircle /></S.MainText>

            {/*면접 이름 */}
            <S.MakeTextContainer>
                <S.MakeTextCircle />
                <S.MakeText>면접 이름*</S.MakeText>
            </S.MakeTextContainer>
            <S.MakeInputContainer
                toggle={watch("interviewName")?.length > 0 ? true: false || errors.interviewName ? true: false}  
                color={errors.interviewName ? '#FF4A4A': '#606060'}
            >
                <S.MakeInput
                    placeholder = "20자 이내로 입력해주세요"
                    type = "text"
                    id = "interviewName"
                    required
                    {...register("interviewName", { required: true, pattern: regExpName })}
                />
                {watch("interviewName")?.length > 0 && 
                    <S.ClearBtn
                        src={process.env.PUBLIC_URL + '/images/inputCancelIcon.svg'}
                        onClick={e => removeInput("interviewName")}
                    />
                }
            </S.MakeInputContainer>
            <S.MakeTextContainer>
                <S.MakeTextCircle />
                <S.MakeText>지원 기간*</S.MakeText>
                <S.MakeTextSub>지원 가능한 날짜 범위를 설정해 주세요</S.MakeTextSub>
            </S.MakeTextContainer>
               <ApplyCalendar /> 

            <S.MakeTextContainer>
                <S.MakeTextCircle />
                <S.MakeText>면접 시간*</S.MakeText>
                <S.MakeTextSub>면접 예상 소요 시간을 설정해 주세요</S.MakeTextSub>
            </S.MakeTextContainer>
            <TimeType />

            <S.MakeTextContainer>
                <S.MakeTextCircle />
                <S.MakeText>면접 방식*</S.MakeText>
            </S.MakeTextContainer>
            <S.MakeInputContainer
                toggle={watch("format1")?.length > 0 &&  watch("format2")?.length > 0? true: false || 
                errors.format1 && errors.format2 ? true: false}  
                color={errors.format1 && errors.format2 ? '#FF4A4A': '#606060'}
            >
                <S.InterviewIcon src={process.env.PUBLIC_URL + '/images/iconFormat_gray.svg'}></S.InterviewIcon>
                <S.InputWrap toggle={watch("format2")?.length > 0 ? true: false}>
                    면접관
                    <S.MakeInputNum 
                        type='text' 
                        id="format1" 
                        required 
                        {...register("format1", { required: true ,pattern: regExpFormat })} 
                    />명
                    :지원자
                    <S.MakeInputNum 
                        type='text' 
                        id="format2" 
                        required 
                        {...register("format2", { required: true ,pattern: regExpFormat })} 
                    />명
                </S.InputWrap>
                {watch("format1")?.length > 0 && 
                    <S.ClearBtn
                        src={process.env.PUBLIC_URL + '/images/inputCancelIcon.svg'}
                        onClick={e => removeInput("format1")}
                    />
                }
            </S.MakeInputContainer>

            <S.MakeTextContainer>
                <S.MakeTextCircle />
                <S.MakeText>면접 장소*</S.MakeText>
            </S.MakeTextContainer>
            <S.MakeInputContainer
                toggle={watch("interviewPlace")?.length > 0 ? true: false || errors.interviewPlace ? true: false}  
                color={errors.interviewPlace ? '#FF4A4A': '#606060'}
            >
                <S.InterviewIcon src={process.env.PUBLIC_URL + '/images/iconPlace_gray.svg'}></S.InterviewIcon>
                <S.MakeInput
                    placeholder="자유롭게 입력해 주세요"
                    type="text"
                    id="interviewPlace"
                    required
                    {...register("interviewPlace", { required: true })}
                />
                {watch("interviewPlace")?.length > 0 && 
                    <S.ClearBtn
                        src={process.env.PUBLIC_URL + '/images/inputCancelIcon.svg'}
                        onClick={e => removeInput("interviewPlace")}
                    />
                }
            </S.MakeInputContainer>
            <S.MakeNextBtn type='submit' value='다음' toggle={isActive}/>
        </S.MakeContainer>
	);
}

export default InterviewMake1;