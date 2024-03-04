import styled from 'styled-components';

//전체 컨테이너
export const InterviewsZone = styled.div`
	width: calc(100% - 375px);
`;
export const NavWrap = styled.div`
	display: flex;
	margin-top: 40px;
`;
export const NavTextBox = styled.div`
	width: 300px;
`;
export const NavText = styled.div`
	text-align: left;
	font-size: 22px;
	font-family: 'Pretendard-SemiBold';
	letter-spacing: 0em;
	padding-left: 80px;
`;
export const CreateInterviewBtn = styled.button`
	width: 100px;
	border: none;
	background-color: transparent;
	background-image: url(${process.env.PUBLIC_URL + '/images/btnInterviewCreate.svg'});
	background-repeat: no-repeat;
	margin-left: auto;
	margin-right: 135px;
`;
export const InterviewComponentsZone = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: 40px 120px auto 60px;
`;

//진행중인 면접이 없는 경우
export const InterviewNull = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: 304px auto auto auto;
	font-family: 'Pretendard-SemiBold';
	color: ${props => props.theme.colors.gray3};
	font-size: 23px;
`;

//진행중인 면접이 없는 경우 텍스트 양쪽 옆 아이콘 박스
export const NullIconBox = styled.div`
	display: flex;
	margin: auto 7px;
`;

export const NullIcon1 = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 30px;
	background-color: ${props => props.theme.colors.gray5};
	margin: auto 7px;
`;

export const NullIcon2 = styled(NullIcon1)`
	width: 15px;
	height: 15px;
`;

export const NullIcon3 = styled(NullIcon1)`
	width: 10px;
	height: 10px;
`;
