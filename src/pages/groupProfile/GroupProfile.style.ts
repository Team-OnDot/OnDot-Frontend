import styled from 'styled-components';

//전체 컨테이너
export const InterviewsZone = styled.div`
    margin-left: 25%;
`;
export const NavWrap = styled.div`
    display: flex;
    margin-top: 40px;
`;
export const NavText = styled.div`
    width: 300px;
    text-align: left;
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 0em;
`;
export const NavCircle = styled.div`
    display: inline-block;
    width : 12px;
    height : 12px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.red1};
    margin-left: 60px;
    margin-right: 10px;
`;
export const CreateInterviewBtn = styled.button`
    width: 100px;
    border: none;
    background-color: transparent;
    background-image: url(${process.env.PUBLIC_URL + '/images/btnInterviewCreate.svg'});
    background-repeat: no-repeat;
    margin-left: auto;
    margin-right: 135px;
`;
export const InterviewComponentsZone = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 40px 120px auto 60px;
`;
export const InterviewNull = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 40px 120px auto 60px;
`;
