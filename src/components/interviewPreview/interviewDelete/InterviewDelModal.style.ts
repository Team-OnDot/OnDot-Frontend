import styled from "styled-components";

export const DeleteBox = styled.div`
    border: none;
    width: 568px;
    height: 246px;
    background-color: white;
    box-shadow: 0 4px 13.5px 0 rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin: 0px 110px;
    padding: 50px 50px 45px;

    h2 {
		font-size: 22px;
		font-family: 'Pretendard-SemiBold';
        margin: 0px 0px 25px 0px;
	}

	p {
		font-size: 16px;
		font-family: 'Pretendard-SemiBold';
		color: ${(props) => props.theme.colors.gray2};
		margin: 5px 0px;
	}
`;

export const BtnWrapper = styled.div`
	display: flex;
	gap: 7px;
    margin-top: 35px;
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
    margin: 0 0 0 auto;
`;

export const BtnDelete = styled.span`
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