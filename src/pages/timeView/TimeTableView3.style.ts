import styled from "styled-components";

//전체
export const TimeTableView3 = styled.div`
    display: flex;
`;

//헤더
export const Header = styled.div`
    display: flex;
    margin-top: 50px;
    margin-bottom: 9px;
`;

export const Ellipse39 = styled.div`
    width: 12px;
    height: 12px;
    background-color: ${props => props.theme.colors.red1};
    border-radius: 30px;
    margin: auto 13px auto 65px;
`;

//면접 테이블 확정 제목
export const Title = styled.div`
    font-size: 22px;
    font-weight: 600;
`;

export const TitleText = styled.div`
    font-size: 15px;
    font-weight: 600;
    margin-top: 12px;
    padding-left: 90px;
    margin-bottom: 55px;
    color: ${props => props.theme.colors.gray2};
`;

//메인 화면
export const Main = styled.div`

`;

//타임테이블 자리(임시)
export const TimeTable = styled.div`
    width: 1100px;
    height: 500px;
    border: 1px solid black;
`;

//공유하기 버튼
export const ShareBtn = styled.button`
    width: 199px;
    height: 45px;
    background-color: ${props => props.theme.colors.red1};
    color: white;
    padding: 12px 45px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 14px;
    font-size: 18px;
    font-weight: bold;
    border: none;
    margin-top: 48px;
    margin-left: 900px;
`;

//pdf, png버튼 박스
export const PdfPngBtnBox = styled.div`
    margin-top: 20px;
    margin-bottom: 119px;
    display: flex;
`;

export const BtnIcon = styled.img`
    margin-right: 6px;
`;

//pdf버튼
export const PdfBtn = styled.button<{color:boolean}>`
    width: 91px;
    height: 43px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 14px;
    border: 2px solid  ${props=>(props.color ? `${props.theme.colors.red1}` : `${props.theme.colors.gray4}`)};
    background-color: white;
    color: ${props=>(props.color ? `${props.theme.colors.red1}` : `${props.theme.colors.gray4}`)};
    font-size: 18px;
    font-weight: bold;
    margin-left: 900px;
`;

//png 버튼
export const PngBtn = styled(PdfBtn)`
    margin-left: 17px;
`;