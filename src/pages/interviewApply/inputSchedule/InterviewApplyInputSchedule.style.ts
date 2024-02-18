import styled from 'styled-components';

//헤더
export const InputInfoHeader = styled.div`
	display: flex;
	margin: 38px auto 12px 65px;
	font-size: 22px;
	font-family: 'Pretendard-SemiBold';
`;

//큰 원 아이콘
export const Ellipse1 = styled.div`
	display: flex;
	width: 12px;
	height: 12px;
	border-radius: 20px;
	background-color: ${(props) => props.theme.colors.red1};
	margin: auto 13px auto 0px;
`;

//헤더 문구
export const HeaderTxt = styled.div`
	color: ${(props) => props.theme.colors.gray2};
	font-size: 15px;
	font-family: 'Pretendard-SemiBold';
	margin-top: 15px;
	margin-left: 90px;
`;

export const TimeTableWrapper = styled.div`
	/* max-width: 920px; */
	position: relative;
	padding: 42px 47px;
	border-radius: 15px;
	border: 1px solid ${(props) => props.theme.colors.gray8};
	margin: 25px 0px 0px 90px;
`;

//footer
export const InputTimeFooter = styled.div`
	display: flex;
	margin-top: 56px;
`;

//이전 버튼
export const BackBtn = styled.button`
	display: flex;
	border-radius: 14px;
	width: 122px;
	height: 45px;
	padding: 10px;
	justify-content: center;
	align-items: center;
	border: 3px solid ${(props) => props.theme.colors.red1};
	background-color: white;
	font-size: 18px;
	font-family: 'Pretendard-Bold';
	color: ${(props) => props.theme.colors.red1};
	margin-left: 634px;
`;

//완료 버튼
export const CompleteBtn = styled(BackBtn)`
	background-color: ${(props) => props.theme.colors.gray5};
	color: white;
	border: none;
	margin-left: 12px;
`;
