import styled from 'styled-components';

//헤더
export const HeaderDiv = styled.div`
	width: 100%;
	height: 87px;
	display: flex;
	box-shadow: 0px 4px 30.3px 0px rgba(0, 0, 0, 0.05);
`;

//온닷 로고
export const OndotLogoDiv = styled.div`
	display: inline-flex;
	margin: 29px auto auto 100px;
`;

export const HeaderWrapper = styled.div`
	display: inline-flex;
	font-size: 17px;
	color: ${(props) => props.theme.colors.gray2};
	font-family: 'Pretendard-SemiBold';

	@media screen and (max-width: 1000px) {
		display: none;
	}
`;

export const HeaderText = styled.div`
	padding: 35px 30px;
	flex-shrink: 0;
`;

//로그인 버튼 박스
export const LoginBtnBox = styled.div`
	margin: auto 159px auto 39px;	

	@media screen and (max-width: 1000px) {
		margin: auto 50px auto auto;	
	}
`;

//로그인 버튼
export const LoginBtn = styled.button`
	border-radius: 31px;
	border: 3px solid ${(props) => props.theme.colors.red1};
	background: white;
	justify-content: center;
	align-items: center;
	color: ${(props) => props.theme.colors.red1};
	font-size: 17px;
	font-family: 'Pretendard-SemiBold';
	width: 88px;
	height: 34px;

	@media screen and (max-width: 1000px) {
		display: none;
	}
`;

//사이드 메뉴열기 버튼
export const MenuBtn = styled.img`
	display: none;

	@media screen and (max-width: 1000px) {
		display: inline;
		width: 30px;
		height: 30px;
		margin-top: 28px;
	}
`;

export const SideMenuBox = styled.div<{state: boolean}>`
	@media screen and (max-width: 1000px) {
		margin-top: -60px;
		margin-right: -900px;
	}
`;

//사이드 바
export const SideMenu = styled.div<{state: boolean}>`
	@media screen and (max-width: 1000px) {
		width: 320px;
		margin-top: 10px;
		margin-left: auto;
		border-radius: 20px;
		height: 600px;
		background-color: white;
		border: 3px solid ${(props) => props.theme.colors.red1};
		transition: 0.5s ease;
		transform: ${(props) => (props.state ? "translateX(-800px)" : "translateX(800px)")};	
	}
`;

//사이드바 닫기 버튼
export const SideMenuCloseBtn= styled.img`
	display: none;
	@media screen and (max-width: 1000px) {
		display: flex;
		transform: rotate(180deg);
		width: 40px;
		height: 40px;
		margin: 20px 200px;
	}
`;
export const SideMenuItem = styled.li`

	display: none;
	@media screen and (max-width: 1000px) {
		list-style-type: none;
		text-align: left;
		flex-direction: column;
		display: flex;
		padding: 32px 40px;
		font-weight: 600;
		font-size: 17px;

		//마우스 닿으면 색변경
		&:hover {
			background: ${(props) => props.theme.colors.gray7};
			color: ${(props) => props.theme.colors.gray1};
		}
	}
`