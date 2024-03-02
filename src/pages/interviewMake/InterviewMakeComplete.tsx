import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import * as S from './InterviewMakeComplete.style';

function InterviewMake1() {
	const navigate = useNavigate();
    
    const onClickInterview = () => {
        navigate('/');
    };

    //프로필 페이지로 이동 클릭시
    const onClickProfile= () => {
        navigate('/group-profile');
    };

	return (
		<S.MakeContainer>
            <img src={process.env.PUBLIC_URL + '/images/interviewPageMakeComplete.svg'} />
            <S.MainText>면접 페이지 생성이 완료되었습니다!</S.MainText>
            <S.MakeBtn value='interview' onClick={onClickInterview} >면접 페이지 바로가기</S.MakeBtn>
            <S.MakeBtn value='profile' onClick={onClickProfile} >프로필 페이지 이동</S.MakeBtn>		
		</S.MakeContainer>
	);
}

export default InterviewMake1;