import styled from 'styled-components';

export const InterviewMain = styled.div`
	width: 100%;
	text-align: center;
	margin: 0px auto;
`;
// 온닷 그래픽
export const InterviewMainImg = styled.img`
	margin: 200px auto 0px;
`;

//동아리 문구
export const InterviewMainText = styled.div`
	text-align: center;
	line-height: 30px; //줄간격
	font-family: 'Pretendard-SemiBold';
	font-size: 23px;
	color: ${(props) => props.theme.colors.gray1};
	margin-top: 49px;
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
