import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	padding: 38px 90px 90px;
	border: 1px solid black;
`;

export const TextPeriod = styled.h2`
	position: relative;
	font-size: 22px;
	font-family: 'Pretendard-SemiBold';

	&::before {
		position: absolute;
		content: '';
		width: 12px;
		height: 12px;
		background-color: ${(props) => props.theme.colors.red1};
		border-radius: 50%;
		top: 5px;
		left: -25px;
	}
`;

export const Line = styled.img`
	position: relative;
	left: -90px;
	margin: 9px 0px 15px;
	-webkit-user-drag: none;
`;

export const TextDescription = styled.p`
	font-family: 'Pretendard-SemiBold';
	font-size: 15px;
	color: ${(props) => props.theme.colors.gray2};
`;

// 타임테이블
export const TimeTableWrapper = styled.div`
	position: relative;
	padding: 42px 47px;
	border-radius: 15px;
	border: 1px solid ${(props) => props.theme.colors.gray8};
	margin-top: 25px;
`;

export const BtnTimeTablePrev = styled.span<{ isMultiplePage: boolean }>`
	display: ${(props) => (props.isMultiplePage ? 'inline-block' : 'none')};
	position: absolute;
	width: 25px;
	height: 33px;
	background: url('/images/iconArrowPrev.svg') no-repeat center center;
	top: 50%;
	left: -45px;
	transform: translateY(-50%);
	cursor: pointer;
`;

export const BtnTimeTableNext = styled.span<{ isMultiplePage: boolean }>`
	display: ${(props) => (props.isMultiplePage ? 'inline-block' : 'none')};
	position: absolute;
	width: 25px;
	height: 33px;
	background: url('/images/iconArrowNext.svg') no-repeat center center;
	top: 50%;
	right: -45px;
	transform: translateY(-50%);
	cursor: pointer;
`;
