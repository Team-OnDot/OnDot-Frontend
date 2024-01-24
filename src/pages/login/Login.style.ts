import styled from "styled-components";

//헤더
export const loginHeader = styled.div`
    margin-top: 49px;
    text-align: center;
`;

export const loginWrapper = styled.div`
    display: inline-flex;
`;

//로그인 텍스트
export const loginHeaderText = styled.div`
    font-size: 22px;
    font-weight: 900;
`;

//로그인 온점
export const loginHeaderDot = styled.div`
    margin-left: 8px;
    margin-top: auto;
    margin-bottom: 2px;
    width: 6.173px;
    height: 6.173px;
    background-color: ${props => props.theme.colors.red1};
    border: none;
    border-radius: 12px;
`;

//Footer
export const LoginFooter = styled.div`
    width: 352px;
    margin: 23px auto 30px auto;
    display: flex;
`;

export const LoginFooterWrap = styled.div`
    display: inline-flex;
    margin: 0px auto 0px 48px;
`;
//Footer 텍스트(아이디, 비밀번호 찾기)
export const findText = styled.div`
    font-weight: 600;
    font-size: 15px;
    margin-right: 27px;
    text-align: center;
    color: ${props => props.theme.colors.gray2};
`;

//Footer 텍스트(회원가입)
export const signInText = styled(findText)`
    color: ${props => props.theme.colors.red1};
    cursor: pointer;
`;

