import styled from 'styled-components';
//display: none;
//border: 2px solid #000;

export const GroupContainer = styled.div`
	float: left;
	display: flex;
	flex-direction: column;
	height: 800px;
	width: 25%;
	text-align: center;
	border-radius: 0px 0px 185px 0px;
	box-shadow: 0 4px 15.9px 0 rgba(0, 0, 0, 0.05);
	padding: 60px 50px;
`;
export const GroupImg = styled.img`
	width: 100px;
	margin: 0px auto 15px;
`;
export const GroupName = styled.div`
	font-size: 23px;
	font-family: 'Pretendard-SemiBold';
	margin-bottom: 5px;
`;
export const GroupType = styled.div`
	font-size: 15px;
	font-family: 'Pretendard-SemiBold';
	color: ${(props) => props.theme.colors.red1};
	margin-bottom: 15px;
`;
export const GroupLink = styled.span`
	display: flex;
	align-items: center; /* 수직 정렬 */
	align-self: center;
	background-color: ${(props) => props.theme.colors.gray8};
	border-radius: 9px;
	font-size: 12px;
	color: ${(props) => props.theme.colors.gray2};
	font-family: 'Pretendard-SemiBold';
	gap: 10px;
	padding: 5px 20px;
	margin-bottom: 30px;
`;
export const GroupText = styled.div`
	flex-basis: 100px;
	text-align: left;
	border-radius: 15px;
	border: 2px solid ${(props) => props.theme.colors.gray8};
	color: ${(props) => props.theme.colors.gray3};
	font-size: 13px;
	padding: 15px 15px;
	margin-bottom: 10px;
`;
export const GroupContact = styled.div`
	display: flex;
	align-items: center; /* 수직 정렬 */
	flex-basis: 30px;
	text-align: left;
	vertical-align: center;
	border-radius: 15px;
	border: 2px solid ${(props) => props.theme.colors.gray8};
	color: ${(props) => props.theme.colors.gray3};
	font-size: 13px;
	gap: 10px;
	padding: 10px 15px;
`;
export const IconWrap = styled.div`
	margin-top: auto;
	margin-bottom: 50px;
`;
export const Icon = styled.button`
	border: none;
	background: none;
	display: flex;
	align-items: center; /* 수직 정렬 */
	gap: 10px;
	padding: 10px 5px;
`;
