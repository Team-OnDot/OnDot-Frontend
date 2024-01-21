import styled from "styled-components";

//로그인 form
export const loginForm = styled.form`
    margin: 31px auto 0px auto;
    width: 399px;
`;

//아이디 form
export const idForm = styled.div`

`;

//비밀번호 form
export const pwForm = styled.div`
    margin-top: 27px;
`;

//form header
export const formHeader = styled.div`
    display: inline-flex;
`;

//header ellipse
export const ellipse = styled.div`
    border: 1px solid var(--red-01, #FF4A4A);
    width: 12px;
    height: 12px;
    color: var(--red-01, #FF4A4A);
    border-radius: 10px;
    margin: auto 0;
    background-color: var(--red-01, #FF4A4A);
`;

//form 헤더 텍스트
export const formHeaderText = styled.div`
    font-size: 17px;
    margin-left: 9px;
`;

//입력 박스
export const loginInputBox = styled.div`
    margin-top: 12px;
`;

//아이디, 비밀번호 입력창
export const loginInput = styled.input`
    width: 399px;
    height: 60px;
    border: 1px solid black;
    font-size: 15px;
    color: var(--gray-02, #606060);
    padding: 21px 22px;
    border-radius: 11px;
    border: 2px solid var(--gray-04, #959595);
    font-weight: 600;
`;

//로그인 버튼
export const loginBtn = styled.button`
    display: flex;
    margin-top: 49px;
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

//구글 로그인버튼
export const googleLoginBtn = styled(loginBtn)`
    margin-top: 26px;
    background-color: #303030;
    justify-content: left;
    align-items: left;
`;

//구글 로고 박스
export const googleLogo = styled.div`
    width: 25.843px;
    height: 27.759px;
    margin-left: 24.7px;
`;


//구글 로고 이미지
export const googleLogoImg = styled.img`
    width: 100%;
    height: 100%;
`;

//구글 로그인 텍스트
export const googleLoginText = styled.div`
    margin-left: 60.46px;
`;
