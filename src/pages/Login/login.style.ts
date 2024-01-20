import styled from "styled-components";

//헤더
export const loginHeader = styled.div`
    margin-top: 71px;
    text-align: center;
`;

export const loginWrapper = styled.div`
    display: inline-flex;
`;

//로그인 텍스트
export const loginHeaderText = styled.div`
    font-size: 25px;
    font-weight: 900;
    color: var(--red-01, #FF4A4A);
`;

//로그인 온점
export const loginHeaderDot = styled.div`
    margin-left: 2px;
    margin-top: auto;
    margin-bottom: 2px;
    width: 6.173px;
    height: 6.173px;
    background-color: #FF4A4A;
    border: none;
    border-radius: 12px;
`;

//Footer
export const LoginFooter = styled.div`
    width: 399px;
    margin: 33px auto 0px auto;
    display: flex;
`;

//Footer
export const findText = styled.div`
    font-weight: 600;
    font-size: 15px;
    color: #606060;
    margin-right: 31px;
`;

export const signInText = styled(findText)`
    color: #FF4A4A;
    margin-right: 0px;
    margin-left: auto;
`;

