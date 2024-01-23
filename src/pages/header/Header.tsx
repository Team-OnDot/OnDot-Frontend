import * as S from './Header.style';
import { useNavigate } from 'react-router-dom';
import { Outlet } from "react-router-dom";

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
			<S.headerDiv>
				<S.ondotLogoDiv onClick={onClickLogo}>
					<img src={process.env.PUBLIC_URL + '/images/ondotLogo.svg'}></img>
				</S.ondotLogoDiv>
				<S.headerWrapper>
					<S.headerText>서비스 소개</S.headerText>
					<S.headerText>만든 사람들</S.headerText>
					<S.headerText>문의하기</S.headerText>
				</S.headerWrapper>
				<S.loginBtnBox>
					<S.loginBtn onClick={onClickLoginBtn}>로그인</S.loginBtn>
				</S.loginBtnBox>
			</S.headerDiv>
			<Outlet></Outlet>
		</>
	);
}

export default Header;