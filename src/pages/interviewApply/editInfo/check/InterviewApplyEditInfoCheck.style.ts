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

//작은 원 아이콘
export const Ellipse2 = styled(Ellipse1)`
	display: flex;
	width: 9px;
	height: 9px;
	border-radius: 20px;
	background-color: ${(props) => props.theme.colors.red1};
	margin: auto 6px auto 0px;
`;
