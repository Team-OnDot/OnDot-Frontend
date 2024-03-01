import * as F from '../FindAccount.style';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { findEmailAtom, hashValueAtom, accessTokenAtom } from '../../../recoil/findAccountAtoms';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function FindPw2() {

    const sendEmail = useRecoilValue(findEmailAtom);
    const hashValue = useRecoilValue(hashValueAtom);
    const navigate = useNavigate();

    //API연결(이메일 전송)
    useEffect(() => {
        axios({
            url: `/api/v1/auth/find/pw/verify/${sendEmail}`,
            method: 'get',
            params: {
                email: sendEmail,
                code: hashValue
            },
          }).then((response) => {
            console.log(hashValue);
            
          }).catch((error) => {
            console.log("실패");  
            console.error('AxiosError:', error);
        });
    }, []);

    return(
        <div>
            <F.Header>
                <F.HeaderTitle>비밀번호 찾기</F.HeaderTitle>
                <F.HeaderText>
                    비밀번호 변경 링크가 포함된 이메일이 {sendEmail}으로 전송되었습니다.<br/>
                    메일을 확인하여 비밀번호를 변경해 주세요.
                </F.HeaderText>
            </F.Header>
        </div>
    );
}

export default FindPw2;