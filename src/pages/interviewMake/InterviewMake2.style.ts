import styled from 'styled-components';
import { Calendar } from 'react-calendar';

//전체 컨테이너
export const MakeContainer = styled.div`
	width: 930px;
	display: flex;
	flex-direction: column;
	align-items: center;
	/* text-align: center; */
	margin: 50px auto;
`;

export const MainText = styled.div`
	height: 26px;
	font-size: 22px;
	font-weight: 600;
	line-height: 26px;
	letter-spacing: 0em;
	margin-top: 30px;
	margin-bottom: 10px;
	padding-left: 11px;
`;

export const MainTextCircle = styled.div`
	display: inline-block;
	width: 6px;
	height: 6px;
	border-radius: 50%;
	background-color: ${(props) => props.theme.colors.red1};
	margin: auto 5px 0px;
`;

export const MakeTextContainer = styled.div`
	display: flex;
	align-items: center;
	margin: 20px auto 0px 0px;
`;
export const MakeTextCircle = styled.span`
	display: inline-block;
	width: 9px;
	height: 9px;
	border-radius: 50%;
	background-color: ${(props) => props.theme.colors.red1};
	margin: auto 5px;
`;
export const MakeText = styled.span`
	//height: 25px;
	font-size: 18px;
	font-weight: 600;
	line-height: 19px;
	letter-spacing: 0em;
`;

export const MakeTextSub = styled.span`
	font-size: 12px;
	font-weight: 600;
	line-height: 14px;
	letter-spacing: 0em;
	color: ${(props) => props.theme.colors.gray4};
	margin-left: 7px;
`;

export const MakeTextSub2 = styled(MakeTextSub)`
	position: relative;
	top: 9px;
`;

export const CalendarWrapper = styled.div`
	align-self: flex-start;
	margin-top: 25px;
`;

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

export const MakeBtnContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 300px;
	height: 47px;
	margin-top: 60px;
`;
export const MakeBtn = styled.input<{ value?: string; isActive?: boolean }>`
	display: inline-block;
	width: 140px;
	height: 47px;
	font-size: 17px;
	line-height: 18px;
	letter-spacing: 0em;
	color: ${(props) => (props.value === '이전' ? props.theme.colors.red1 : props.theme.colors.white)};
	background-color: ${(props) => (props.value === '이전' ? props.theme.colors.white : props.isActive ? props.theme.colors.red1 : props.theme.colors.gray5)};
	border: ${(props) => (props.isActive ? `3px solid ${props.theme.colors.red1}` : props.value === '이전' ? `3px solid ${props.theme.colors.red1}` : 'none')};
	border-radius: 14px;
	cursor: pointer;
`;
