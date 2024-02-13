import * as S from './Header.style';
import { useNavigate } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import React, { forwardRef } from "react";

function Header() {
	const navigate = useNavigate();

	//로고 클릭 시
	const onClickLogo = () => {
		navigate(`/`);
	};

	//로그인 버튼 클릭 시
	const onClickLoginBtn = () => {
		navigate(`/login`);
	};

	return (
		<>
			<S.HeaderDiv>
				<S.OndotLogoDiv onClick={onClickLogo}>
					<img src={process.env.PUBLIC_URL + '/images/ondotLogo.svg'}></img>
				</S.OndotLogoDiv>
				<S.HeaderWrapper>
					<S.HeaderText>서비스 소개</S.HeaderText>
					<S.HeaderText>만든 사람들</S.HeaderText>
					<S.HeaderText>문의하기</S.HeaderText>
				</S.HeaderWrapper>
				<S.LoginBtnBox>
					<S.LoginBtn onClick={onClickLoginBtn}>로그인</S.LoginBtn>
				</S.LoginBtnBox>
			</S.HeaderDiv>
			<Outlet></Outlet>
		</>
	);
}

export default Header;