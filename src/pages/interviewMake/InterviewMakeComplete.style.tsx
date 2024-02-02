import styled from 'styled-components';

//전체 컨테이너
export const MakeContainer = styled.div`
    width: 352px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 150px auto;
`;
export const MainText = styled.div`
    height: 26px;
    font-size: 23px;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: 0em;
    margin-top: 40px;
    margin-bottom: 40px;
`;

export const MakeBtn = styled.button<{ value?: string }>`
    width: 352px;
    height: 47px;
    font-size: 17px;
    line-height: 18px;
    letter-spacing: 0em;
    color: ${props => props.value ==='profile'? 
        props.theme.colors.red1: props.theme.colors.white };
    background-color: ${props => props.value ==='profile'? 
        props.theme.colors.white: props.theme.colors.red1 };
    border: 3px solid ${props => props.theme.colors.red1 };
    border-radius: 30px;
    margin-top: 20px;
`;