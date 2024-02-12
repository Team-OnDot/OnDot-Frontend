import styled from "styled-components";

//전체
export const TimeTableView3 = styled.div`
    display: flex;
    position: relative;
    z-index: 0;
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

//공유하기 alert창
export const AlertBox = styled.div`
    width: 568px;
    height: 173px;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 1;
    position: absolute;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0 4px 13.5px 0 rgba(0, 0, 0, 0.25);
`;

//공유하기 alert 텍스트
export const AlertText = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${props => props.theme.colors.gray2};
    margin-top: 47px;
    margin-left: 48px;
`;

//공유하기 alert 닫기 버튼
export const AlertCloseBtn = styled.button`
    font-size: 16px;
    font-weight: 600;
    color: white;
    background-color: ${props => props.theme.colors.gray2};
    width: 74px;
    height: 37px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 6.2px;
    box-shadow: 0 0 2.2px 0 rgba(255, 74, 74, 0.25);
    border: none;
    margin-top: 42px;
    margin-left: 460px;
`;