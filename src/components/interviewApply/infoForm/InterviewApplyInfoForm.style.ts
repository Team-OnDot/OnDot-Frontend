import styled from 'styled-components';

//지원 정보 입력폼
export const ApplyForm = styled.form`
	margin-top: 35px;
	margin-left: 65px;
`;

//입력폼 제목 박스
export const ApplyTitle = styled.div`
	display: flex;
	margin-top: 21px;
`;

//지원자 폼 제목
export const ApplyTitleText = styled.text`
	display: flex;
	font-size: 16px;
	font-family: 'Pretendard-SemiBold';
`;

export const InputContainer = styled.div`
	display: flex;
`;
//비밀번호 안내 문구
export const PwTxt = styled.text`
	display: flex;
	margin-top: 4px;
	margin-left: 7px;
	font-size: 12px;
	font-family: 'Pretendard-SemiBold';
	color: ${(props) => props.theme.colors.gray4};
`;

//인증번호 전송 버튼
export const AuthBtn = styled.button<{ toggle: boolean }>`
	background: ${(props) => (props.toggle ? `${props.theme.colors.red1}` : `${props.theme.colors.gray5}`)};
	width: 112px;
	height: 46px;
	border-radius: 11px;
	border: none;
	padding: 10px;
	font-family: 'Pretendard-Bold';
	font-size: 15px;
	color: white;
	margin: auto auto 0px 10px;
`;

//다음 버튼
export const NextBtn = styled.button<{ toggle: boolean }>`
	display: inline-block;
	background: ${(props) => (props.toggle ? `${props.theme.colors.red1}` : `${props.theme.colors.gray5}`)};
	width: 122px;
	height: 45px;
	border: none;
	padding: 10px;
	justify-content: center;
	align-items: center;
	border-radius: 14px;
	font-family: 'Pretendard-Bold';
	font-size: 15px;
	color: white;
	margin-left: 768px;
	margin-top: 171px;
`;

//큰 원 아이콘
export const Ellipse1 = styled.div`
	display: flex;
	width: 12px;
	height: 12px;
	border-radius: 20px;
	background-color: ${(props) => props.theme.colors.red1};
	margin: auto 13px auto 0px;
`;

//작은 원 아이콘
export const Ellipse2 = styled(Ellipse1)`
	display: flex;
	width: 9px;
	height: 9px;
	border-radius: 20px;
	background-color: ${(props) => props.theme.colors.red1};
	margin: auto 6px auto 0px;
`;
