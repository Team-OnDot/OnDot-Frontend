import styled from 'styled-components';

export const BtnBack = styled.button`
    display: inline;
    border-radius: 50%;
    border: 2px solid black;
    margin-right: -100px;
`;
//전체 컨테이너
export const SettingContainer = styled.div`
    width: 352px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 50px auto;
`;
export const MainText = styled.div`
    height: 26px;
    font-size: 22px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0em;
    padding-left: 11px;
`;
export const MainTextCircle = styled.div`
    display: inline-block;
    width : 6px;
    height : 6px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.red1};
    margin: auto 10px 0px;
`;
export const TextContainer = styled.div`
    display: flex;
    margin: 20px auto 5px 0px;
`;
export const TextCircle = styled.div`
    display: inline-block;
    width : 9px;
    height : 9px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.red1};
    margin: 5px 5px 5px 0px;
`;
export const Text = styled.div`
    font-size: 16px;
    font-weight: 600;
    line-height: 19px;
    letter-spacing: 0em;
`;
export const TextSub = styled.div`
    font-size: 12px;
    font-weight: 600;
    line-height: 14px;
    letter-spacing: 0em;
    color: ${props => props.theme.colors.gray4};
    margin: 2px auto 0px 2px;
`;
export const Profile = styled.button<{ src?: string }>`
    width: 69px;
    height: 69px;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size : cover;
    border-radius: 50%;
    border: 2px solid ${props => props.theme.colors.gray4};
    margin-left: 0px;
    margin-right: auto;
`;
export const ProfilePlus = styled.button<{ src?: string }>`
    width: 26.87px;
    height: 26.87px;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size : cover;
    background-color: transparent;
    border: none;
    margin-top: 40px;
    margin-left: 40px;
`;

export const SettingInput = styled.input<{ src?: string }>`
    width: 352px;
    height: 47px;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0em;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-position: 10px center;
    color: ${props => props.theme.colors.gray4};
    border-radius: 11px;
    border: 2px solid ${props => props.theme.colors.gray4};
    padding-left: 15px; 
`;
export const NextBtn = styled.input`
    width: 352px;
    height: 47px;
    font-size: 17px;
    line-height: 18px;
    letter-spacing: 0em;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.gray5};
    border-radius: 30px;
    border: none;
    margin-top: 40px;
`;