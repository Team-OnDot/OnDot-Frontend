import * as F from '../FindAccount.style';
import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { findEmailAtom, hashValueAtom, accessTokenAtom } from '../../../recoil/findAccountAtoms';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

type IUserData = {
    email: string;
  }

function FindPw1() {

    const {
        register,
        handleSubmit,
        watch,
        resetField,
        setError,
        formState: { isSubmitting, errors }
    } = useForm<IUserData>({ mode: 'onBlur' })

    
    //입력 취소 버튼
    const removeInput = (name:any) => {
        resetField(name);
        setError(name,  {message: ''});
    }

    //API연결
    const setSendEmail = useSetRecoilState(findEmailAtom);
    const setHashValue = useSetRecoilState(hashValueAtom); //해시값
    const setAccessTokenValue = useSetRecoilState(accessTokenAtom); //토큰값
    const navigate = useNavigate();
    const onValid = async(data: IUserData) => {
        await new Promise((r) => setTimeout(r, 1000)); //중복제출 방지

        axios({
            url: '/api/v1/auth/find/pw',
            method: 'get',
            params: {
                email: data.email,
            },
          }).then((response) => {
            if(response.data.statusCode === "OK"){
                setSendEmail(data.email);
                setHashValue(response.data.content.hashValue); //해시값 저장
                setAccessTokenValue(response.data.content.accessToken); //토큰값 저장
                navigate("/find-password-2"); //성공 시 페이지 이동
            }
            else{ //존재하지 않는 이메일인 경우
                setError("email", { message: "존재하지 않는 이메일입니다." },{ shouldFocus: true });
            }
          }).catch((error) => {
            console.log("실패");  
            console.error('AxiosError:', error);
        });
    }

    return(
        <div>
            <F.Header>
                <F.HeaderTitle>비밀번호 찾기</F.HeaderTitle>
                <F.HeaderText>가입한 이메일로 비밀번호 변경 링크가 포함된 메일을 전송해 드립니다.</F.HeaderText>
            </F.Header>

            <F.Main>
                <F.FormTitle>
                    <F.Ellipse></F.Ellipse>
                    비밀번호 찾기
                </F.FormTitle>

                <F.FindForm onSubmit={handleSubmit(onValid)}>
                    <F.InputBox
                        toggle={watch("email")?.length > 0 ? true: false || errors.email ? true: false}  
                        color={errors.email ? '#FF4A4A': '#606060'}
                    >
                        <F.Input
                            id="email"
                            type="text"
                            placeholder="이메일을 입력해 주세요"
                            {...register("email",{
                                required: true,
                                pattern: {
                                    value: /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/,
                                    message: "존재하지 않는 이메일입니다."
                                },                            
                            })}
                            
                        />
                        {watch("email")?.length > 0 && 
                            <F.InputCancelBtn 
                                src={process.env.PUBLIC_URL + '/images/inputCancelIcon.svg'}
                                onClick={e => removeInput("email")}
                            />
                        }
                    </F.InputBox>

                    <F.ErrorMessage>
                        <F.ErrorText error={errors.email ? true : false}>
                            존재하지 않는 이메일입니다.
                        </F.ErrorText>
                    </F.ErrorMessage>

                    {/*버튼*/}
                    <F.SubmitBtn type="submit" disabled={isSubmitting}>메일보내기</F.SubmitBtn>
                </F.FindForm>
            </F.Main>
        </div>
    );
}

export default FindPw1;