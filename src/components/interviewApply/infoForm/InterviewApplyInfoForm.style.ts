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

//비밀번호 안내 문구
export const PwTxt = styled.text`
	display: flex;
	margin-top: 4px;
	margin-left: 7px;
	font-size: 12px;
	font-family: 'Pretendard-SemiBold';
	color: ${(props) => props.theme.colors.gray4};
`;

//다음 버튼
export const NextBtn = styled.button<{ toggle: boolean }>`
	background: ${(props) => (props.toggle ? `${props.theme.colors.red1}` : `${props.theme.colors.gray5}`)};
	width: 122px;
	height: 45px;
	border: none;
	padding: 10px;
	justify-content: center;
	align-items: center;
	border-radius: 14px;
	font-family: 'Pretendard-Bold';
	font-size: 18px;
	color: white;
	margin-left: 768px;
	margin-top: 171px;
`;
