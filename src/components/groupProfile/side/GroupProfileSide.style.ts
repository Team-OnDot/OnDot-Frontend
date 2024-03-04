import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 375px;
	min-height: calc(100vh - 87px); // 화면 최대 높이 - 헤더 높이
	flex-shrink: 0;
	padding: 63px 38px 150px;
	box-shadow: 0 4px 15.9px 0 rgba(0, 0, 0, 0.05);
	border-radius: 0px 0px 185px 0px;
	text-align: center;
`;

export const GroupImg = styled.img`
	display: inline-block;
	width: 125px;
	height: 125px;
	border-radius: 50%;
	-webkit-user-drag: none;
`;

export const GroupName = styled.p`
	font-size: 23px;
	font-family: 'Pretendard-SemiBold';
	margin: 20px 0px 8px;
`;

export const GroupType = styled.p`
	font-size: 15px;
	font-family: 'Pretendard-SemiBold';
	color: ${(props) => props.theme.colors.red1};
`;

export const GroupLink = styled.p`
	display: inline-block;
	padding: 7px 10px 7px 40px;
	border-radius: 9px;
	font-size: 14px;
	color: ${(props) => props.theme.colors.gray2};
	margin: 22px auto 36px;
	background: ${(props) => props.theme.colors.gray8} url(${process.env.PUBLIC_URL + '/images/iconLink.svg'}) no-repeat left 10px center;
	cursor: pointer;
`;

export const Line = styled.img`
	margin: 5px 0px;
	-webkit-user-drag: none;
`;

export const GroupTextArea = styled.div`
	min-height: 142px;
	padding: 20px;
	text-align: left;
	word-break: keep-all;
	border-radius: 15px;
	border: 2px solid ${(props) => props.theme.colors.gray6};
`;

export const IconBtnWrapper = styled.p`
	display: flex;
	align-items: center;
	gap: 10px;
	width: 100px;
	padding: 15px;
	font-size: 15px;
	font-family: 'Pretendard-SemiBold';
	white-space: nowrap;
	cursor: pointer;

	img {
		display: inline-block;
		width: 20px;
		height: 20px;
	}
`;
