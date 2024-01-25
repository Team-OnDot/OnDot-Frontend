import styled from "styled-components";

//로그인 form
export const loginForm = styled.form`
    margin: 23px auto 0px auto;
    width: 352px;
`;

//아이디 form
export const idForm = styled.div`

`;

//비밀번호 form
export const pwForm = styled.div`
    margin-top: 21px;
`;

//form header
export const formHeader = styled.div`
    display: inline-flex;
`;

//header ellipse
export const ellipse = styled.div`
    border: 1px solid ${props => props.theme.colors.red1};
    width: 9px;
    height: 9px;
    border-radius: 10px;
    margin: auto 0;
    background-color: ${props => props.theme.colors.red1};
`;

//form 헤더 텍스트
export const formHeaderText = styled.div`
    font-size: 16px;
    margin-left: 6px;
    
`;

//입력 박스
export const loginInputBox = styled.div<{toggle:boolean, color: string}>`
    display: flex;
    margin-top: 9px;
    width: 352px;
    height: 47px;
    border-radius: 11px;
    border: 2px solid ${props=>(props.toggle ? props.color: `${props.theme.colors.gray4}`)};
    color: ${props=>(props.toggle ? `${props.theme.colors.gray1}`: `${props.theme.colors.gray2}`)};
`;

//아이디, 비밀번호 입력창
export const loginInput = styled.input`
    font-size: 15px;
    margin-left: 15px;
    border: none;
    border-radius: 11px;
    font-weight: 600;
    width: 352px;
`;

//입력 취소 버튼
export const inputCancelBtn = styled.img`
    margin-right: 5px;
    margin-left: auto;
`;

//로그인 버튼
export const loginBtn = styled.button<{toggle:boolean}>`
    display: flex;
    margin-top: 34px;
    border: none;
    color: white;
    font-size: 17px;
    font-weight: 600;
    width: 352px;
    height: 49px;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    background: ${props=>(props.toggle ? `${props.theme.colors.red1}`: `${props.theme.colors.gray5}`)};
`;

//구글 로그인버튼
export const googleLoginBtn = styled(loginBtn)`
    margin-top: 19px;
    background-color: ${props => props.theme.colors.gray2};
    justify-content: left;
    align-items: left;
`;

//구글 로고 박스
export const googleLogo = styled.div`
    width: 21.209px;
    height: 21.343px;
    margin-left: 21px;
`;


//구글 로고 이미지
export const googleLogoImg = styled.img`
    width: 100%;
    height: 100%;
`;

//구글 로그인 텍스트
export const googleLoginText = styled.div`
    margin-left: 52px;
`;
