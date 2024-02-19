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
	width: 120px;
	height: 25px;
	font-size: 18px;
	font-family: 'Pretendard-SemiBold';
	line-height: 19px;
	letter-spacing: 0em;
	margin-top: 3px;
`;
export const MakeInputBox = styled.div<{toggle: boolean}>`
	color: ${(props) => (props.toggle ? `${props.theme.colors.gray1}` : `${props.theme.colors.gray2}`)};
`;
export const MakeInput = styled.textarea`
	width: 352px;
	height: 126px;
	font-size: 15px;
	border-radius: 11px;
	border: 2px solid ${(props) => props.theme.colors.gray4};
	padding: 15px;
	font-family: 'Pretendard-SemiBold';
`;
export const MakeBtnContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 300px;
	height: 47px;
	margin-top: 60px;
`;
export const MakeBtn = styled.input<{ value?: string }>`
	display: inline-block;
	width: 140px;
	height: 47px;
	font-size: 17px;
	line-height: 18px;
	letter-spacing: 0em;
	color: ${(props) => (props.value === '이전' ? props.theme.colors.red1 : props.theme.colors.white)};
	background-color: ${(props) => (props.value === '이전' ? props.theme.colors.white : props.theme.colors.red1)};
	border: 3px solid ${(props) => props.theme.colors.red1};
	border-radius: 14px;
	cursor: pointer;
`;
