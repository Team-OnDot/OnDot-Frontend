import styled from "styled-components";

//면접 정보 박스
export const InterviewInfoBox = styled.div`
    border: 2px solid ${props => props.theme.colors.gray8};
    border-radius: 15px;
    width: 299px;
    height: 195px;
    margin: 0 auto 20px auto;
`;

//면접 제목
export const InterviewTitle = styled.div`
    text-align: left;
    margin-top: 19px;
    margin-left: 27px;
    font-size: 15px;
    color: ${props => props.theme.colors.gray1};
    font-weight: 600;
`;

//면접 정보 박스(날짜)
export const InterviewInfo1 = styled.div`
    display: flex;
    margin-top: 17.44px;
    margin-left: 25.84px;
`;

//면접 정보 박스(날짜 외 나머지)
export const InterviewInfo2 = styled(InterviewInfo1)`
    display: flex;
    margin-top: 14.36px;
`;

//면접 정보 텍스트
export const InterviewInfoText = styled.text`
    display: flex;
    margin: auto auto auto 16.4px;
    font-size: 13px;
    font-weight: 600;
    color: ${props => props.theme.colors.gray2};
`;

//면접 안내 박스
export const InterviewGuideBox = styled.div`
    margin-top: 21px;
`;

//면접 안내 제목
export const InterviewGuideTitle = styled.div`
    text-align: left;
    margin-left: 27px;
    font-size: 15px;
    color: ${props => props.theme.colors.gray1};
    font-weight: 600;
`;

//면접 안내 내용
export const InterviewGuideText = styled.div`
    width: 260px;
    text-align: left;
    margin: 6px auto 20px 27px;
    font-size: 13px;
    color: ${props => props.theme.colors.gray3};
    font-weight: 600;
    line-height: normal;
`;

//contact 정보 박스
export const ContactBox = styled.div`
    display: flex;
    margin-left: 14px;
    margin-bottom: 20px;
`;

//contact 텍스트 박스
export const ContactTextBox = styled.div`
    margin-top: 24px;
    margin-left: 10px;
`;

//contact 정보
export const ContactText = styled.text`
    display: flex;
    color: ${props => props.theme.colors.gray3};
    font-size: 13px;
    font-weight: 600;
    line-height: normal;
`;


