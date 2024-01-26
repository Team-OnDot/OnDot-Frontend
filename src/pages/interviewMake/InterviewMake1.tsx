import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import * as S from './InterviewMake1.style';

type InterviewInfo = {
    name: string;
    startDate: string;
    endDate: string;
    time: string;
    format1: string;
    format2: string;
    place: string;
    nameCheck: boolean;     //최소 2자, 최대 20자
    dateCheck: boolean;     //필수 입력
    formatCheck: boolean;   //최소 1자, 최대 2자, 숫자만
}

function InterviewMake1() {
    const regExpName = /^.{2,20}$/;
    const regExpFormat = /^\d{1,2}:\d{1,2}$/;

	const navigate = useNavigate();
    const { 
        register, watch, setValue,
        formState: { errors, isValid } 
    } = useForm<InterviewInfo>({
        mode: "onChange",
        defaultValues: {}
    });
    
    const onSubmit = (data: any) => {
        console.log(data);
        navigate('/');
    };

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
            <S.MakeInput
                placeholder="20자 이내로 입력해주세요"
                type="text"
                id="interviewName"
                required
                {...register("name", { required: true, pattern: regExpName })}
                src={process.env.PUBLIC_URL + '/images/iconTime_red.svg'}
            />
            <S.MakeTextContainer>
                <S.MakeTextCircle />
                <S.MakeText>면접 방식*</S.MakeText>
            </S.MakeTextContainer>
            <S.MakeInputContainer src={process.env.PUBLIC_URL + '/images/iconFormat_gray.svg'}>
                면접관 <S.MakeInputNum type='text' id="format1" required {...register("format1", { required: true })} />명
                :지원자 <S.MakeInputNum type='text' id="format2" required {...register("format2", { required: true })} />명
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
            <S.MakeNextBtn type='submit' value='다음' />
			
		</S.MakeContainer>
	);
}

export default InterviewMake1;