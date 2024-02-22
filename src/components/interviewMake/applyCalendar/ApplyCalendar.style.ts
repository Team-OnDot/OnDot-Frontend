import styled from 'styled-components';

//입력 박스
export const MakeInputContainer = styled.div<{ toggle: boolean; color: string }>`
	width: 352px;
	height: 47px;
	text-align: left;
	font-size: 15px;
	background-repeat: no-repeat;
	background-position: 10px center;
	border-radius: 11px;
	display: flex;
	border: 2px solid ${(props) => (props.toggle ? props.color : `${props.theme.colors.gray4}`)};
	color: ${(props) => (props.toggle ? `${props.theme.colors.gray1}` : `${props.theme.colors.gray2}`)};
`;

//입력 input
export const MakeInput = styled.input`
	padding-left: 15px;
	border-radius: 11px;
	border: none;
	font-family: Pretendard-SemiBold;
	font-size: 15px;
`;

//interview place icon
export const InterviewIcon = styled.img`
	margin-left: 15px;
`;

//면접 방식 input박스
export const InputWrap = styled.div<{toggle: boolean}>`
	display: flex;
	padding-top: 14px;
	margin-left: 15px;
	font-family: Pretendard-SemiBold;
	color: ${(props) => (props.toggle ? `${props.theme.colors.gray1}` : `${props.theme.colors.gray4}`)};
`;

//지원 기간 입력
export const MakeInputDate = styled.input`
	width: 115px;
	font-size: 15px;
	color: ${(props) => props.theme.colors.gray4};
	border: none;
	padding-bottom: 12px;
	font-family: Pretendard-SemiBold;
`;
