import styled from 'styled-components';

//전체 컨테이너
export const InterviewsZone = styled.div`
	width: calc(100% - 375px);
`;
export const NavWrap = styled.div`
	display: flex;
	margin-top: 40px;
`;
export const NavText = styled.div`
	width: 300px;
	text-align: left;
	font-size: 22px;
	font-family: 'Pretendard-SemiBold';
	letter-spacing: 0em;
`;
export const NavCircle = styled.div`
	display: inline-block;
	width: 12px;
	height: 12px;
	border-radius: 50%;
	background-color: ${(props) => props.theme.colors.red1};
	margin-left: 60px;
	margin-right: 10px;
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

//면접 리스트 출력 박스
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

//면접 삭제 모달창 박스
export const DeleteMain = styled.div`
	z-index: 1;
	position: absolute;
	margin-top: 100px;
`;
