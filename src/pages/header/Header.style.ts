import styled from "styled-components";

//헤더
export const headerDiv = styled.div`
    width: 100%;
    height: 87px;
    display: flex;
    box-shadow: 0px 4px 30.3px 0px rgba(0, 0, 0, 0.05);
`;

//온닷 로고
export const ondotLogoDiv = styled.div`
    display: inline-flex;
    margin: 32px auto auto 138px;
`;

export const headerWrapper = styled.div`
    display: inline-flex;
    margin-left: 621px;
    font-size: 17px;
    color: ${props => props.theme.colors.gray2};
    font-weight: 600;
`;

export const headerText = styled.div`
    margin: auto 40px auto auto;
`;

//로그인 버튼 박스
export const loginBtnBox = styled.div`
    margin: auto 158px auto 10px;
`;

//로그인 버튼
export const loginBtn = styled.button`
    border-radius: 31px;
    border: 3px solid ${props => props.theme.colors.red1};
    background: white;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.colors.red1};
    font-size: 17px;
    font-weight: 600;
    width: 88px;
    height: 34px;
`;