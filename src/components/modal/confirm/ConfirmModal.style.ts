import styled from 'styled-components';

export const Background = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;

export const Box = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 568px;
	height: 263px;
	border-radius: 10px;
	box-shadow: 0 4px 13.5px 0 rgba(0, 0, 0, 0.25);
	background-color: #fff;
	padding: 55px 50px 45px;
	text-align: center;

	h2 {
		font-size: 22px;
		font-family: 'Pretendard-SemiBold';
	}

	p {
		font-size: 16px;
		font-family: 'Pretendard-SemiBold';
		color: ${(props) => props.theme.colors.gray2};
		margin: 30px 0px;
	}
`;

export const BtnWrapper = styled.div`
	display: flex;
	justify-content: center;
	gap: 37px;
`;

export const BtnCancel = styled.span`
	display: inline-block;
	width: 74px;
	height: 37px;
	padding: 11px 23px 9px;
	color: ${(props) => props.theme.colors.white};
	background: ${(props) => props.theme.colors.gray5};
	border-radius: 6.2px;
	box-shadow: 0 0 2.2px 0;
	cursor: pointer;
`;

export const BtnConfirm = styled.span`
	display: inline-block;
	width: 74px;
	height: 37px;
	padding: 11px 23px 9px;
	color: ${(props) => props.theme.colors.white};
	background: ${(props) => props.theme.colors.red1};
	border-radius: 6.2px;
	box-shadow: 0 0 2.2px 0;
	cursor: pointer;
`;
