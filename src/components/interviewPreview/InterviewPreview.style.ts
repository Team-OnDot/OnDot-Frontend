import styled from 'styled-components';
//display: none;
//border: 2px solid #000;

//전체 컨테이너
export const PreviewContainer = styled.div`
	flex-basis: 411px;
	height: 254px;
	border-radius: 26px;
	border: 2px solid ${(props) => props.theme.colors.gray8};
	padding: 20px;
	margin-right: 40px;
	margin-bottom: 40px;
	cursor: pointer;
`;
export const PreviewWrap = styled.div`
	display: flex;
	align-items: center; /* 수직 정렬 */
	margin-bottom: 20px;
`;
export const PreviewTitle = styled.div`
	font-size: 17px;
	font-family: 'Pretendard-SemiBold';
	line-height: 20px;
	letter-spacing: 0em;
	margin-left: 5px;
`;
export const PreviewDate = styled.div`
	background-color: ${(props) => props.theme.colors.gray7};
	border-radius: 9px;
	font-size: 12px;
	padding: 7px 10px;
	margin-left: auto;
	margin-right: 0px;
	font-family: 'Pretendard-SemiBold';
`;
export const PreviewText = styled.div`
	display: flex;
	align-items: center; /* 수직 정렬 */
	font-size: 13px;
	font-family: 'Pretendard-SemiBold';
	line-height: 16px;
	letter-spacing: 0em;
	margin-bottom: 15px;
	gap: 10px;
`;
export const InterviewPreIconBox = styled.div`
	display: flex;
	padding: 0px 0px 0px 260px;
`;

export const InterviewPreIcon = styled.img`
	margin-left: 6px;
`;
