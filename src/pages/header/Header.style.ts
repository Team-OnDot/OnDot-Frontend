import styled from "styled-components";

export const headerDiv = styled.div`
    width: 100%;
    height: 99px;
    display: flex;
    box-shadow: 0px 4px 30.3px 0px rgba(0, 0, 0, 0.05);
`;

export const ondotLogoDiv = styled.div`
    display: inline-flex;
    margin: 36px auto auto 138px;
`;

export const headerWrapper = styled.div`
    display: inline-flex;
    margin-left: 576px;
    font-size: 20px;
    color: var(--gray-02, #606060);
    font-weight: 700;
`;

export const headerText = styled.div`
    margin: auto 32px auto auto;
`;

//로그인 버튼 박스
export const loginBtnBox = styled.div`
    margin: auto 141px auto 10px;
`;

//로그인 버튼
export const loginBtn = styled.button`
    border-radius: 31px;
    border: 4px solid var(--red-01, #FF4A4A);
    background: var(--white, #FFF);
    padding: 10px 26px;
    justify-content: center;
    align-items: center;
    color: #FF4A4A;
    font-size: 20px;
    font-weight: 700;
`;