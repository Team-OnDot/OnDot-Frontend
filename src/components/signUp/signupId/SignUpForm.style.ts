import styled, { css } from 'styled-components';

//그룹 분류 select 박스
export const GroupTypeBox = styled.div<{ toggle: boolean }>`
    position: relative;
    margin-top: 8px;
    width: 352px;
    height: 47px;
    border-radius: 11px;
    border: 2px solid ${(props) => (props.toggle ? `${props.theme.colors.red1}` : `${props.theme.colors.gray2}`)};
    padding: 15px;
    
    &:hover{
        border: 2px solid ${(props) => props.theme.colors.red1};
    }

    // toggle이 true일 때 180도 회전
    &:after {
        content: '';
        position: absolute;
        top: 35%;
        right: 16px;
        width: 14px;
        height: 14px;
        background: url('/images/groupTypePolygon.svg') no-repeat center center;

        // toggle이 true일 때 180도 회전
        ${(props) =>
					props.toggle &&
					css`
						transform: rotate(180deg);
					`}
`;

//그룹 분류 라벨
export const GroupTypeLabel = styled.div`
	display: flex;
	border: 0 none;
	background: transparent;
	cursor: pointer;
	font-size: 15px;
	font-family: 'Pretendard-SemiBold';
`;

//그룹 분류 선택리스트 박스(option박스)
export const GroupTypeUl = styled.ul<{ toggle: boolean }>`
	width: 352px;
	height: 185px;
	border-radius: 11px;
	border: 2px solid ${(props) => props.theme.colors.red1};
	position: absolute;
	background: white;
	margin: 22px 0 0 -16px; //label기준으로 위치 조정
	cursor: pointer;
	display: ${(props) => (props.toggle ? 'null' : 'none')};

	@media screen and (max-width: 1000px) {
		margin: 22px 0 0 -17px; //label기준으로 위치 조정
	}
`;

//그룹 분류 option
export const GroupTypeLi = styled.li`
	font-size: 15px;
	font-family: 'Pretendard-SemiBold';
	height: 45px;
	padding: 15px 15px;
	color: ${(props) => props.theme.colors.gray2};

	//마우스 닿으면 색변경
	&:hover {
		background: ${(props) => props.theme.colors.red4};
		color: ${(props) => props.theme.colors.gray1};
	}
`;

//그룹 분류 option(동아리)
export const GroupTypeLiTop = styled(GroupTypeLi)`
	border-radius: 9px 9px 0px 0px;
`;

//그룹 분류 option(기타)
export const GroupTypeLiBottom = styled(GroupTypeLi)`
	border-radius: 0px 0px 9px 9px;
`;

//회원가입 버튼
export const SignUpBtn = styled.button<{ toggle: boolean }>`
	display: flex;
	margin-top: 48.5px;
	margin-bottom: 100px;
	border: none;
	color: white;
	font-size: 17px;
	font-family: 'Pretendard-Bold';
	width: 352px;
	height: 49px;
	justify-content: center;
	align-items: center;
	border-radius: 30px;
	background: ${(props) => (props.toggle ? `${props.theme.colors.red1}` : `${props.theme.colors.gray5}`)};
`;

//메시지 박스
export const ErrorMessage = styled.div`
	font-size: 12px;
	font-family: 'Pretendard-SemiBold';
	margin-top: 7px;
`;

//헬퍼메시지
export const HeplerText = styled.text<{ error: boolean }>`
	color: ${(props) => props.theme.colors.gray4};
	display: ${(props) => (props.error ? 'none' : null)};
`;

//에러메시지
export const ErrorText = styled.text<{ error: boolean }>`
	color: ${(props) => props.theme.colors.red1};
	display: ${(props) => (props.error ? null : 'none')};
`;
