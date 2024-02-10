import styled from 'styled-components';

//로그인 form
export const LoginForm = styled.form`
	margin: 23px auto 0px auto;
	width: 352px;
`;

//아이디 form
export const IdForm = styled.div``;

//비밀번호 form
export const PwForm = styled.div`
	margin-top: 21px;
`;

//form header
export const FormHeader = styled.div`
	display: inline-flex;
`;

//header ellipse
export const Ellipse = styled.div`
	border: 1px solid ${(props) => props.theme.colors.red1};
	width: 9px;
	height: 9px;
	border-radius: 10px;
	margin: auto 0;
	background-color: ${(props) => props.theme.colors.red1};
`;

//form 헤더 텍스트
export const FormHeaderText = styled.div`
	font-size: 16px;
	margin-left: 6px;
`;

//입력 박스
export const LoginInputBox = styled.div<{ toggle: boolean; color: string }>`
	display: flex;
	margin-top: 9px;
	width: 352px;
	height: 47px;
	border-radius: 11px;
	border: 2px solid ${(props) => (props.toggle ? props.color : `${props.theme.colors.gray4}`)};
	color: ${(props) => (props.toggle ? `${props.theme.colors.gray1}` : `${props.theme.colors.gray2}`)};
`;

//아이디, 비밀번호 입력창
export const LoginInput = styled.input`
	font-size: 15px;
	margin-left: 15px;
	border: none;
	border-radius: 11px;
	font-family: 'Pretendard-SemiBold';
	width: 352px;
`;

//입력 취소 버튼
export const InputCancelBtn = styled.img`
	margin-right: 5px;
	margin-left: auto;
`;

//로그인 버튼
export const LoginBtn = styled.button<{ toggle: boolean }>`
	display: flex;
	margin-top: 34px;
	border: none;
	color: white;
	font-size: 17px;
	font-family: 'Pretendard-SemiBold';
	width: 352px;
	height: 49px;
	justify-content: center;
	align-items: center;
	border-radius: 30px;
	background: ${(props) => (props.toggle ? `${props.theme.colors.red1}` : `${props.theme.colors.gray5}`)};
`;

//메시지 박스
export const ErrorMessage = styled.div`
	font-size: 12px;
	font-family: 'Pretendard-SemiBold';
	margin-top: 7px;
`;

//에러메시지
export const ErrorText = styled.text<{ error: boolean }>`
	color: ${(props) => props.theme.colors.red1};
	display: ${(props) => (props.error ? null : 'none')};
`;
