import styled from 'styled-components';

//전체 컨테이너
export const MakeContainer = styled.div`
	width: 352px;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	margin: 50px auto;
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

export const MakeInput = styled.input<{ src?: string }>`
	width: 352px;
	height: 47px;
	font-size: 15px;
	line-height: 18px;
	letter-spacing: 0em;
	background-image: url(${(props) => props.src});
	background-repeat: no-repeat;
	background-position: 10px center;
	color: ${(props) => props.theme.colors.gray4};
	border-radius: 11px;
	border: 2px solid ${(props) => props.theme.colors.gray4};
	padding-left: ${(props) => (props.src ? '45px' : '15px')};
`;
export const MakeInputContainer = styled.div<{ src?: string }>`
	width: 352px;
	height: 47px;
	text-align: left;
	font-size: 15px;
	line-height: 18px;
	letter-spacing: 0em;
	background-image: url(${(props) => props.src});
	background-repeat: no-repeat;
	background-position: 10px center;
	color: ${(props) => props.theme.colors.gray4};
	border-radius: 11px;
	border: 2px solid ${(props) => props.theme.colors.gray4};
	padding-top: 12px;
	padding-left: 45px;
`;
export const MakeInputDate = styled.input`
	width: 110px;
	font-size: 15px;
	line-height: 18px;
	letter-spacing: 0em;
	color: ${(props) => props.theme.colors.gray4};
	border: none;
	margin-left: 0px;
	margin-right: 10px;
`;

export const MakeInputNum = styled.input`
	width: 20px;
	height: 20px;
	text-align: right;
	font-size: 15px;
	line-height: 18px;
	letter-spacing: 0em;
	color: ${(props) => props.theme.colors.gray4};
	border: none;
	border-bottom: 2px solid ${(props) => props.theme.colors.gray4};
`;

//다음 버튼
export const MakeNextBtn = styled.input`
	width: 352px;
	height: 47px;
	font-size: 17px;
	line-height: 18px;
	letter-spacing: 0em;
	color: ${(props) => props.theme.colors.white};
	background-color: ${(props) => props.theme.colors.gray5};
	border-radius: 30px;
	border: none;
	margin-top: 40px;
`;
