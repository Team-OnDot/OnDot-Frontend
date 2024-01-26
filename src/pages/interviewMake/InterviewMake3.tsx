import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import * as S from './InterviewMake3.style';

type InterviewInfo = {
    memo: string;
    memoCheck: boolean;     //최소 0자, 최대 180자
}

function InterviewMake1() {
    const regExpMemo = /^.{0,180}$/;

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
            <img src={process.env.PUBLIC_URL + '/images/iconPage3_3.svg'} />
            <S.MainText>면접 페이지 만들기<S.MainTextCircle /></S.MainText>
            <S.MakeTextContainer>
                <S.MakeTextCircle />
                <S.MakeText>면접 안내 문구</S.MakeText>
            </S.MakeTextContainer>
            <S.MakeInput
                placeholder="180자 이내로 입력해주세요"
                id="interviewName"
                required
                {...register("memo", { required: true, pattern: regExpMemo })}
            />
            <S.MakeBtnContainer>
                <S.MakeBtn type='button' value='이전' />
                <S.MakeBtn type='submit' value='다음' />
            </S.MakeBtnContainer>
		</S.MakeContainer>
	);
}

export default InterviewMake1;