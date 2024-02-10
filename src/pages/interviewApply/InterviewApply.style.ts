import styled from 'styled-components';

export const InterviewComponent = styled.div`
	display: flex;
`;

//메인 화면
export const InterviewMain = styled.div`
	margin-left: 420px;
`;

//동아리 문구
export const InterviewMainText = styled.div`
	margin-top: 230px;
	text-align: center;
	line-height: normal; //줄간격
	font-family: 'Pretendard-SemiBold';
	font-size: 23px;
	color: ${(props) => props.theme.colors.gray1};
`;

//지원 버튼 박스
export const ApplyBtnWrap = styled.div`
	margin-top: 49px;
`;

//면접 지원 버튼
export const ApplyBtn = styled.button`
	display: flex;
	margin: 0 auto;
	border: none;
	width: 352px;
	height: 49px;
	padding: 10px;
	justify-content: center;
	align-items: center;
	border-radius: 30px;
	background-color: ${(props) => props.theme.colors.red1};
	color: white;
	font-size: 17px;
	font-family: 'Pretendard-Bold';
`;

//지원자 정보 수정 버튼
export const EditBtn = styled(ApplyBtn)`
	border: 3px solid ${(props) => props.theme.colors.red1};
	background-color: white;
	color: ${(props) => props.theme.colors.red1};
	margin-top: 15px;
`;

//헤더
export const InputInfoHeader = styled.div`
	display: flex;
	margin: 38px auto 12px 65px;
	font-size: 22px;
	font-family: 'Pretendard-SemiBold';
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

//프로필 이동 버튼
export const ProfileBtn = styled(ApplyBtn)`
	margin-top: 19px;
`;

export const TimeTableWrapper = styled.div`
	position: relative;
	padding: 42px 47px;
	border-radius: 15px;
	border: 1px solid ${(props) => props.theme.colors.gray8};
	margin: 25px 0px 0px 90px;
`;

//헤더 문구
export const HeaderTxt = styled.div`
	color: ${(props) => props.theme.colors.gray2};
	font-size: 15px;
	font-family: 'Pretendard-SemiBold';
	margin-top: 15px;
	margin-left: 90px;
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
