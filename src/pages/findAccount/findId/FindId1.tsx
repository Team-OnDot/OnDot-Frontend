import * as F from '../FindAccount.style';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import { findEmailAtom, emailCodeAtom } from '../../../recoil/findAccount';
import { useNavigate } from 'react-router-dom';

type IUserData = {
    email: string;
  }

function FindId1() {

    const {
        register,
        handleSubmit,
        watch,
        resetField,
        setError,
        formState: { errors }
    } = useForm<IUserData>({ mode: 'onBlur' })

    
    //입력 취소 버튼
    const removeInput = (name:any) => {
        resetField(name);
        setError(name,  {message: ''});
    }

    const setSnedEmail = useSetRecoilState(findEmailAtom);
    const setEmailCode = useSetRecoilState(emailCodeAtom);
    const navigate = useNavigate();
    //API연결(이메일 전송)
    const onValid =  async(data: IUserData) => {
        await new Promise((r) => setTimeout(r, 1000)); //중복제출 방지

        axios({
            url: '/api/v1/auth/email',
            method: 'get',
            params: {
                email: data.email,
            },
          }).then((response) => {
            if(response.data.statusCode === "OK"){
                navigate("/find-id-2"); //성공 시 페이지 이동
                setSnedEmail(data.email);
                setEmailCode(response.data.content);
                console.log(response.data.content);
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
                <F.HeaderTitle>이메일 찾기</F.HeaderTitle>
                <F.HeaderText>계정 복구 이메일을 입력하세요. 인증번호를 발송해 드립니다.</F.HeaderText>
            </F.Header>

            <F.Main>
                <F.FormTitle>
                    <F.Ellipse></F.Ellipse>
                    아이디 찾기
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
                                    message: "입력한 계정과 일치하는 계정이 없습니다."
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
                            입력한 계정과 일치하는 계정이 없습니다.
                        </F.ErrorText>
                    </F.ErrorMessage>

                    {/*버튼*/}
                    <F.SubmitBtn type="submit">인증번호 보내기</F.SubmitBtn>
                </F.FindForm>
            </F.Main>
        </div>
    );
}

export default FindId1;