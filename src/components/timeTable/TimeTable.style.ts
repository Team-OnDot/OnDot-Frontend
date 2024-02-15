import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 831px;
`;

export const DateCell = styled.div<{ selected: boolean; blocked: boolean; clicked: boolean }>`
	height: 18px;
	border: ${(props) => (props.clicked ? `1px solid ${props.theme.colors.black}` : `1px dashed ${props.theme.colors.gray6}`)};
	background-color: ${(props) => (props.blocked ? props.theme.colors.gray8 : props.selected ? props.theme.colors.red3 : props.theme.colors.white)};
`;

export const TimeLabel = styled.p`
	position: relative;
	top: -5px;
	margin-right: 4px;
	font-size: 12px;
	font-family: 'Pretendard-SemiBold';
	color: ${(props) => props.theme.colors.gray5};
`;

export const DateLabel = styled.p`
	font-size: 15px;
	font-family: 'Pretendard-SemiBold';
	color: ${(props) => props.theme.colors.gray1};
	text-align: center;
	margin-bottom: 15px;
`;
