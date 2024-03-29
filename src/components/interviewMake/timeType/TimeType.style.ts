import styled, { css } from 'styled-components';

//그룹 분류 select 박스
export const timeTypeBox = styled.div<{ toggle: boolean }>`
    position: relative;
    width: 352px;
    height: 47px;
    font-size: 15px;
    background-image: url(${process.env.PUBLIC_URL + '/images/iconTime_red.svg'}); //화살표 이미지
    background-repeat: no-repeat;
    background-position: 14px center;
    color: ${(props) => props.theme.colors.gray1};
    border-radius: 11px;
    border: 2px solid ${(props) => (props.toggle ? props.theme.colors.gray2 : '#303030')};
    
    &:hover{
        border: 2px solid ${(props) => props.theme.colors.red1};
    }

    // toggle이 true일 때 180도 회전
    &:after {
        content: '';
        position: absolute;
        top: 33%;
        right: 19px;
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

//그룹 분류 select 박스 안 화살표
export const timeTypePolygon = styled.img<{ toggle: boolean }>`
	//화살표 커스텀
	background: url('/images/groupTypePolygon.svg') no-repeat right 20px center; //화살표 사진 가져오기
	background-size: 14px; //화살표 크기
`;

//그룹 분류 라벨
export const timeTypeLabel = styled.div`
	display: flex;
	border: none;
	background: transparent;
	cursor: pointer;
	font-size: 15px;
	padding: 14px 50px; //text위치
	font-family: 'Pretendard-SemiBold';
`;

//그룹 분류 선택리스트 박스(option박스)
export const timeTypeUl = styled.ul<{ toggle: boolean }>`
	width: 352px;
	border-radius: 11px;
	border: 2px solid ${(props) => props.theme.colors.red1};
	position: absolute;
	background: white;
	cursor: pointer;
	display: ${(props) => (props.toggle ? '' : 'none')};
	font-family: Pretendard-SemiBold;
	margin: 5px 0 0 -1px; //label기준으로 위치 조정

	@media screen and (max-width: 1000px) {
		margin: 5px 0 0 -2px; //label기준으로 위치 조정
	}
`;

//그룹 분류 option
export const timeTypeLi = styled.li`
	height: 46px;
	font-size: 15px;
	font-family: 'Pretendard-SemiBold';
	padding: 12px 15px;
	text-align: left;
	color: ${(props) => props.theme.colors.gray2};

	//마우스 닿으면 색변경
	&:hover {
		background: ${(props) => props.theme.colors.red4};
		color: ${(props) => props.theme.colors.black};
	}
`;

//그룹 분류 option(동아리)
export const timeTypeLiTop = styled(timeTypeLi)`
	border-radius: 9px 9px 0px 0px;
`;

//그룹 분류 option(기타)
export const timeTypeLiBottom = styled(timeTypeLi)`
	border-radius: 0px 0px 9px 9px;
`;
