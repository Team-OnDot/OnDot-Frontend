import styled from "styled-components";

//헤더
export const InputInfoHeader = styled.div`
    display: flex;
    margin: 38px auto 12px 65px;
    font-size: 22px;
    font-weight: 600;
`;

//원 아이콘
export const Ellipse1 = styled.div`
    display: flex;
    width: 12px;
    height: 12px;
    border-radius: 20px;
    background-color: ${props => props.theme.colors.red1};
    margin: auto 13px auto auto;
`;

//지원 정보 입력폼
export const ApplyForm = styled.form`
    border: 1px solid black;
    margin-top: 56px;
    margin-left: 65px;
`;