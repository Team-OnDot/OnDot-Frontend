import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	padding: 38px 90px 90px;
	width: calc(100% - 375px);
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
	margin: 25px 0px 70px;
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

export const TextApplicant = styled.p`
	position: relative;
	font-size: 18px;
	font-family: 'Pretendard-SemiBold';
	margin-left: 18px;
	margin-bottom: 20px;

	&::before {
		position: absolute;
		content: '';
		width: 9px;
		height: 9px;
		background-color: ${(props) => props.theme.colors.red1};
		border-radius: 50%;
		top: 3px;
		left: -18px;
	}
`;

export const AvailableApplicantContainer = styled.ul`
	max-width: 700px;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 15px;
`;

export const AvailableApplicantWrapper = styled.li`
	display: flex;
	align-items: center;
	gap: 9px;

	span {
		font-size: 15px;
		font-family: 'Pretendard-SemiBold';
		margin-right: 5px;
	}
`;

export const IconApplicant = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	border: 1px solid ${(props) => props.theme.colors.gray5};
	background: ${(props) => props.theme.colors.gray8} url(${process.env.PUBLIC_URL + '/images/iconApplicant.svg'}) no-repeat center center;
	flex-shrink: 0;
`;

export const BtnWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`;

export const BtnConfirm = styled.span`
	display: inline-block;
	width: 199px;
	height: 45px;
	padding-top: 13px;
	color: ${(props) => props.theme.colors.white};
	border-radius: 14px;
	background: ${(props) => props.theme.colors.red1};
	text-align: center;
	font-size: 18px;
	font-family: 'Pretendard-SemiBold';
	cursor: pointer;
	margin-top: 15px;
`;
