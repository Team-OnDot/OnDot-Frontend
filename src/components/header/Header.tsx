import * as S from './Header.style';
import { useNavigate } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { loginAtom } from '../../recoil/loginAtoms';

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

	//사이드 메뉴 버튼 클릭시
	const [menuOpen, setMenuOpen] = useState(false);
	const onClickMenuBtn = () => {
		setMenuOpen(!menuOpen);
	};

	const isLoginAtom = useRecoilValue(loginAtom);

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
					{isLoginAtom ? <S.HeaderProfile src={process.env.PUBLIC_URL + '/images/headerProfile.svg'}></S.HeaderProfile>:
					<S.LoginBtn onClick={onClickLoginBtn}>로그인</S.LoginBtn>}
					<S.MenuBtn onClick={onClickMenuBtn} src={process.env.PUBLIC_URL + '/images/menuBtn.svg'}></S.MenuBtn>
					<S.SideMenuBox state={menuOpen}>
						<S.SideMenu state={menuOpen}>
							<S.SideMenuCloseBtn onClick={onClickMenuBtn} src={process.env.PUBLIC_URL + '/images/iconBack.svg'}></S.SideMenuCloseBtn>
							<S.SideMenuItem>서비스 소개</S.SideMenuItem>
							<S.SideMenuItem>만든 사람들</S.SideMenuItem>
							<S.SideMenuItem>문의하기</S.SideMenuItem>
						</S.SideMenu>
					</S.SideMenuBox>
				</S.LoginBtnBox>
			</S.HeaderDiv>
			<Outlet></Outlet>
		</>
	);
}

export default Header;