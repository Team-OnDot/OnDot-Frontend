import styled from 'styled-components';

export const Container = styled.table`
	width: 100%;

	tr {
		border-bottom: 1px solid ${(props) => props.theme.colors.gray8};
	}
`;

export const Header = styled.th`
	width: 100%;
	padding: 10px;
	text-align: center;
	color: ${(props) => props.theme.colors.white};
	background-color: ${(props) => props.theme.colors.red2};
`;

export const TdLeft = styled.td`
	padding: 10px 0px;
	text-align: center;
	background-color: ${(props) => props.theme.colors.gray8};
	font-family: 'Pretendard-SemiBold';
`;

export const TdRight = styled.td`
	padding: 10px 0px;
	text-align: center;
	background-color: ${(props) => props.theme.colors.white};
	font-family: 'Pretendard-SemiBold';
`;
