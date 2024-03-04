import styled from "styled-components";

//헤더
export const Header = styled.div`
    width: 100%;
    text-align: center;
    margin-top: 80px;
`;

//헤더 제목(이메일 찾기)
export const HeaderTitle = styled.div`
    font-family: 'Pretendard-SemiBold';
    font-size: 22px;
`;

//헤더 텍스트
export const HeaderText = styled.div`
    font-family: 'Pretendard-SemiBold';
    font-size: 15px;
    margin-top: 22px;
`;

//헤더 텍스트
export const iconImg = styled.img`
	margin: 80px auto 0px;
`;

//메인
export const Main = styled.div`
    margin-top: 35px;
`;

//form title
export const FormTitle = styled.div`
    display: flex;
    font-family: 'Pretendard-SemiBold';
    width: 352px;
    margin: 30px auto 0px auto;
`;

//header ellipse
export const Ellipse = styled.div`
	border: 1px solid ${(props) => props.theme.colors.red1};
	width: 9px;
	height: 9px;
	border-radius: 10px;
	margin: auto 7px auto 0;
	background-color: ${(props) => props.theme.colors.red1};
`;

export const FindForm = styled.form`
    width: 352px;
    margin: 0px auto;
`;

//입력 박스
export const InputBox = styled.div<{ toggle: boolean; color: string }>`
	display: flex;
	margin: 9px auto;
	width: 352px;
	height: 47px;
	border-radius: 11px;
	border: 2px solid ${(props) => (props.toggle ? props.color : `${props.theme.colors.gray4}`)};
	color: ${(props) => (props.toggle ? `${props.theme.colors.gray1}` : `${props.theme.colors.gray2}`)};
`;

//아이디, 비밀번호 입력창
export const Input = styled.input`
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

//헬퍼메시지
export const HeplerText = styled.text<{ error: boolean }>`
	color: ${(props) => props.theme.colors.gray4};
	display: ${(props) => (props.error ? 'none' : null)};
`;

//전송 버튼
export const SubmitBtn = styled.button`
	display: flex;
	margin: 34px auto;
	border: none;
	color: white;
	font-size: 17px;
	font-family: 'Pretendard-SemiBold';
	width: 352px;
	height: 49px;
	justify-content: center;
	align-items: center;
	border-radius: 30px;
	background: ${props => props.theme.colors.red1};
`;

//완료 버튼(비밀번호 변경 page)
export const ChangePwBtn = styled(SubmitBtn)<{ toggle: boolean }>`
	background: ${(props) => (props.toggle ? `${props.theme.colors.red1}` : `${props.theme.colors.gray5}`)};
`;