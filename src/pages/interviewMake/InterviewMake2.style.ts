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
	margin: 20px auto 5px 0px;
`;
export const MakeTextCircle = styled.div`
	display: inline-block;
	width: 9px;
	height: 9px;
	border-radius: 50%;
	background-color: ${(props) => props.theme.colors.red1};
	margin: auto 5px;
`;
export const MakeText = styled.div`
	height: 25px;
	font-size: 18px;
	font-weight: 600;
	line-height: 19px;
	letter-spacing: 0em;
`;

export const MakeTextSub = styled.div`
	font-size: 12px;
	font-weight: 600;
	line-height: 14px;
	letter-spacing: 0em;
	color: ${(props) => props.theme.colors.gray4};
	margin-bottom: 5px;
	margin-top: auto;
	margin-left: 5px;
`;

export const CalendarWrapper = styled.div`
	align-self: flex-start;
`;

export const TimeTableWrapper = styled.div`
	padding: 42px 47px;
	border-radius: 15px;
	border: 1px solid ${(props) => props.theme.colors.gray8};
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
