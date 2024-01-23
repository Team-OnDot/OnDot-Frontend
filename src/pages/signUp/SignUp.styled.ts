import styled from 'styled-components';

//헤더
export const loginHeader = styled.div`
    margin-top: 82px;
    text-align: center;
`;

export const loginWrapper = styled.div`
    display: inline-flex;
`;

//로그인 텍스트
export const loginHeaderText = styled.div`
    font-size: 25px;
    font-weight: 900;
`;

//로그인 온점
export const loginHeaderDot = styled.div`
    margin-left: 2px;
    margin-top: auto;
    margin-bottom: 2px;
    width: 6.173px;
    height: 6.173px;
    background-color: ${props => props.theme.colors.red1};
    border: none;
    border-radius: 12px;
`;