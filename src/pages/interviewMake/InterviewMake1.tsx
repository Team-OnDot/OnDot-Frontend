import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useSetRecoilState } from 'recoil';
import{ InterviewInfo, interviewAtom } from './../../recoil/interviewAtoms';
import * as S from './InterviewMake1.style';
import TimeType from './../../components/interviewMake/TimeType';

function InterviewMake1() {
    const setInterviewAtom = useSetRecoilState(interviewAtom);

    const regExpName = /^.{2,20}$/;
    const regExpFormat = /^\d{1,2}$/;

	const navigate = useNavigate();

    const { 
        register, watch, handleSubmit, setValue,
        formState: { errors, isValid } 
    } = useForm<InterviewInfo>({
        mode: "onChange",
        defaultValues: {}
    });
    
    const onSubmitFun = (() => {
        const data = {
            name: watch('name'),
            startDate: watch('startDate'),
            endDate: watch('endDate'),
            timeType: watch('timeType'),
            format1: watch('format1'),
            format2: watch('format2'),
            place: watch('place')
        }
        console.log(data);
        // 아톰에 값 저장
        setInterviewAtom(data);
        navigate('/interview-make-2');
    });

	return (
        <S.MakeContainer>
            <img src={process.env.PUBLIC_URL + '/images/iconPage3_1.svg'} />
            <S.MainText>면접 페이지 만들기<S.MainTextCircle /></S.MainText>
            <S.MakeTextContainer>
                <S.MakeTextCircle />
                <S.MakeText>면접 이름*</S.MakeText>
            </S.MakeTextContainer>
            <S.MakeInput
                placeholder="20자 이내로 입력해주세요"
                type="text"
                id="interviewName"
                required
                {...register("name", { required: true, pattern: regExpName })}
            />
            <S.MakeTextContainer>
                <S.MakeTextCircle />
                <S.MakeText>지원 기간*</S.MakeText>
                <S.MakeTextSub>지원 가능한 날짜 범위를 설정해 주세요</S.MakeTextSub>
            </S.MakeTextContainer>
            <S.MakeInputContainer src={process.env.PUBLIC_URL + '/images/iconDate_gray.svg'}>
                <S.MakeInputDate 
                    type='date' 
                    id="startDate"
                    required
                    {...register("startDate", { required: true })}
                /> 
                ~ 
                <S.MakeInputDate 
                    type='date' 
                    id="endDate"
                    required
                    {...register("endDate", { required: true })} 
                />
            </S.MakeInputContainer>
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
            <S.MakeInputContainer src={process.env.PUBLIC_URL + '/images/iconFormat_gray.svg'}>
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
            </S.MakeInputContainer>
            <S.MakeTextContainer>
                <S.MakeTextCircle />
                <S.MakeText>면접 장소*</S.MakeText>
            </S.MakeTextContainer>
            <S.MakeInput
                placeholder="자유롭게 입력해 주세요"
                type="text"
                id="interviewPlace"
                required
                {...register("place", { required: true })}
                src={process.env.PUBLIC_URL + '/images/iconPlace_gray.svg'}
            />
            <S.MakeNextBtn type='submit' value='다음' onClick={onSubmitFun}/>
        </S.MakeContainer>
	);
}

export default InterviewMake1;