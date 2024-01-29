import styled from "styled-components";

//헤더
export const LoginHeader = styled.div`
    margin-top: 49px;
    text-align: center;
`;

export const LoginWrapper = styled.div`
    display: inline-flex;
`;

//로그인 텍스트
export const LoginHeaderText = styled.div`
    font-size: 22px;
    font-weight: 900;
`;

//로그인 온점
export const LoginHeaderDot = styled.div`
    margin-left: 8px;
    margin-top: auto;
    margin-bottom: 2px;
    width: 6.173px;
    height: 6.173px;
    background-color: ${props => props.theme.colors.red1};
    border: none;
    border-radius: 12px;
`;

//구글 로그인버튼
export const GoogleLoginBtn = styled.button`
    background-color: ${props => props.theme.colors.gray2};
    display: flex;
    border: none;
    color: white;
    font-size: 17px;
    font-weight: 600;
    width: 352px;
    height: 49px;
    margin: 19px auto 0 auto;
    border-radius: 30px;
    justify-content: left;
    align-items: center;
`;

//구글 로고 박스
export const GoogleLogo = styled.div`
    width: 21.209px;
    height: 21.343px;
    margin-left: 21px;
`;


//구글 로고 이미지
export const GoogleLogoImg = styled.img`
    width: 100%;
    height: 100%;
`;

//구글 로그인 텍스트
export const GoogleLoginText = styled.div`
    margin-left: 52px;
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
export const FindText = styled.div`
    font-weight: 600;
    font-size: 15px;
    margin-right: 27px;
    text-align: center;
    color: ${props => props.theme.colors.gray2};
`;

//Footer 텍스트(회원가입)
export const SignInText = styled(FindText)`
    color: ${props => props.theme.colors.red1};
    cursor: pointer;
`;
