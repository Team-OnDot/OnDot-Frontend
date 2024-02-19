import styled from 'styled-components';

//전체 컨테이너
export const MakeContainer = styled.form`
	width: 352px;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	margin: 50px auto 300px auto;
`;
export const MainText = styled.div`
	height: 26px;
	font-size: 22px;
	font-family: 'Pretendard-SemiBold';
	line-height: 26px;
	letter-spacing: 0em;
	margin-top: 30px;
	margin-bottom: 10px;
	padding-left: 11px;
`;
export const MainTextCircle = styled.div`
	display: inline-block;
	width: 6px;
	height: 6px;
	border-radius: 50%;
	background-color: ${(props) => props.theme.colors.red1};
	margin: auto 5px 0px;
`;
export const MakeTextContainer = styled.div`
	display: flex;
	margin: 20px auto 5px 0px;
`;

export const MakeTextCircle = styled.div`
	display: inline-block;
	width: 9px;
	height: 9px;
	border-radius: 50%;
	background-color: ${(props) => props.theme.colors.red1};
	margin: 5px;
`;
export const MakeText = styled.div`
	width: 80px;
	height: 25px;
	font-size: 18px;
	font-family: 'Pretendard-SemiBold';
	line-height: 19px;
	letter-spacing: 0em;
`;
export const MakeTextSub = styled.div`
	font-size: 12px;
	font-family: 'Pretendard-SemiBold';
	line-height: 14px;
	letter-spacing: 0em;
	color: ${(props) => props.theme.colors.gray4};
	margin-bottom: 5px;
	margin-top: auto;
	margin-left: 5px;
`;

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

//면접 방식 숫자 입력
export const MakeInputNum = styled.input`
	width: 20px;
	height: 18px;
	text-align: right;
	font-size: 15px;
	border: none;
	border-bottom: 2px solid ${(props) => props.theme.colors.gray4};
	font-family: Pretendard-SemiBold;
	margin-left: 5px;
	padding-bottom: 2px;
`;

//다음 버튼
export const MakeNextBtn = styled.input<{toggle: boolean}>`
	width: 352px;
	height: 47px;
	font-size: 17px;
	color: ${(props) => props.theme.colors.white};
	background: ${(props) => (props.toggle ? `${props.theme.colors.red1}` : `${props.theme.colors.gray5}`)};
	border-radius: 30px;
	border: none;
	margin-top: 40px;
`;

export const ClearBtn = styled.img`
	margin-left: auto;
	margin-right: 8px;
`;
