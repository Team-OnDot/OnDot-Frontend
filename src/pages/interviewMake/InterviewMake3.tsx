import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import{ InterviewInfo, interviewAtom } from './../../recoil/interviewAtoms';
import * as S from './InterviewMake3.style';
import { useRecoilState } from 'recoil';


function InterviewMake1() {
    const interviewInfo = useRecoilState(interviewAtom);

    const regExpMemo = /^.{0,180}$/;

	const navigate = useNavigate();
    const { 
        register, watch, setValue,
        formState: { errors, isValid } 
    } = useForm<{memo: string;}>({
        mode: "onChange",
        defaultValues: {}
    });
    
    const onSubmit = () => {
        console.log(interviewInfo);
        console.log(watch('memo'));

        // API 연결

        navigate('/interview-make-complete');
    };

    //이전 버튼 클릭 시
    const onClickPreBtn = () => {
        navigate('/interview-make-2');
    }

	return (
		<S.MakeContainer>
            <img src={process.env.PUBLIC_URL + '/images/iconPage3_3.svg'} />
            <S.MainText>면접 페이지 만들기<S.MainTextCircle /></S.MainText>
            <S.MakeTextContainer>
                <S.MakeTextCircle />
                <S.MakeText>면접 안내 문구</S.MakeText>
            </S.MakeTextContainer>
                <S.MakeInputBox toggle={watch("memo")?.length > 0 ? true: false}>
                <S.MakeInput
                    placeholder="180자 이내로 입력해주세요"
                    id="interviewMemo"
                    required
                    {...register("memo", { required: true, pattern: regExpMemo })}
                />
                </S.MakeInputBox>
            <S.MakeBtnContainer>
                <S.MakeBtn type='button' value='이전' onClick={onClickPreBtn}/>
                <S.MakeBtn type='submit' value='다음' onClick={onSubmit} />
            </S.MakeBtnContainer>
		</S.MakeContainer>
	);
}

export default InterviewMake1;