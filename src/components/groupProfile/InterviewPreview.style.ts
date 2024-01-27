import styled from 'styled-components';
//display: none;
//border: 2px solid #000;

//전체 컨테이너
export const PreviewContainer = styled.div`
    flex-basis: 411px;
    height: 254px;
    border-radius: 26px;
    border: 2px solid ${props => props.theme.colors.gray8};
    padding: 20px;
    margin-right: 40px;
    margin-bottom: 40px;
`;
export const PreviewWrap = styled.div`
    display: flex;
    align-items: center; /* 수직 정렬 */
    margin-bottom: 20px;
`;
export const PreviewTitle = styled.div`
    font-size: 17px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0em;
    margin-left: 5px;
`;
export const PreviewDate = styled.div`
    background-color: ${props => props.theme.colors.gray7};
    border-radius: 9px;
    font-size: 12px;
    padding: 7px 10px;
    margin-left: auto;
    margin-right: 0px;
`;
export const PreviewText = styled.div`
    display: flex;
    align-items: center; /* 수직 정렬 */    
    font-size: 13px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0em;
    margin-bottom: 15px;
    gap: 10px;
`;
export const PreviewShare = styled.div`
    width: 60px;
    font-size: 16px;
    font-weight: 600;
    line-height: 19px;
    letter-spacing: 0em;
    color: ${props => props.theme.colors.red1};
    border: 2px solid ${props => props.theme.colors.red1};
    border-radius: 9px;
    text-align: center;
    padding: 5px 14px;
    margin-left: auto;
    margin-right: 0px;
`;