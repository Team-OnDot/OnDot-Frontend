import styled from 'styled-components'

//그룹 분류 select 박스
export const groupTypeBox = styled.div`
    position: relative;
    width: 399px;
    height: 60px;
    border-radius: 11px;
    border: 2px solid var(--gray-01, #303030);
    padding: 17px 22px;

    //화살표 커스텀 
    background:url('/images/groupTypePolygon.svg') no-repeat right 23px center; //화살표 사진 가져오기
    background-size: 14px; //화살표 크기
`;

//그룹 분류 라벨
export const groupTypeLabel = styled.button`
    display: flex;
    border: 0 none;
    background: transparent;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
`;

//그룹 분류 선택리스트 박스(option박스)
export const groupTypeUl = styled.ul`
    width: 399px;
    height: 236px;
    border-radius: 11px;
    border: 2px solid #FF4A4A;
    position: absolute;
    background: #fff;
    margin: 28px 0 0 -24px; //label기준으로 위치 조정
    cursor: pointer;
`;

//그룹 분류 option
export const groupTypeLi = styled.li`
    font-size: 15px;
    font-weight: 600;
    height: 58px;
    padding: 19px 25px;

    //마우스 닿으면 색 변경
    &:hover{
        background: #FFF2F2;
    }
`;

//그룹 분류 option(동아리)
export const groupTypeLiTop = styled(groupTypeLi)`
    border-radius: 9px 9px 0px 0px;
`;

//그룹 분류 option(기타)
export const groupTypeLiBottom = styled(groupTypeLi)`
    border-radius: 0px 0px 9px 9px;
`;

//회원가입 버튼
export const signUpBtn = styled.button`
    display: flex;
    margin-top: 60px;
    margin-bottom: 100px;
    border: none;
    color: white;
    font-size: 19px;
    font-weight: 700;
    width: 399px;
    height: 60px;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background: #C8C8C8;
`;