import styled from 'styled-components';

//헤더 문구
export const HeaderTxt = styled.div`
	color: ${(props) => props.theme.colors.gray2};
	font-size: 15px;
	font-family: 'Pretendard-SemiBold';
	margin-top: 15px;
	margin-left: 90px;
`;

//메인화면(타임테이블)
export const InputTimeMain = styled.div`
	display: flex;
	margin-top: 44px;
	margin-left: 46px;
`;

//이전 타임테이블 버튼
export const PreTimeBtn = styled.div`
	margin: auto 8.77px auto 0px;
	transform: rotate(180deg);
`;

//다음 타임테이블 버튼
export const NextTimeBtn = styled.div`
	margin: auto 0px auto 20px;
`;

//footer
export const InputTimeFooter = styled.div`
	display: flex;
	margin-top: 56px;
`;

//이전 버튼
export const BackBtn = styled.button`
	display: flex;
	border-radius: 14px;
	width: 122px;
	height: 45px;
	padding: 10px;
	justify-content: center;
	align-items: center;
	border: 3px solid ${(props) => props.theme.colors.red1};
	background-color: white;
	font-size: 18px;
	font-family: 'Pretendard-Bold';
	color: ${(props) => props.theme.colors.red1};
	margin-left: 634px;
`;

//완료 버튼
export const CompleteBtn = styled(BackBtn)`
	background-color: ${(props) => props.theme.colors.gray5};
	color: white;
	border: none;
	margin-left: 12px;
`;
