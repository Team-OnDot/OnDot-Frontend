import * as F from '../FindAccount.style';
import { useRecoilValue } from 'recoil';
import { emailCodeAtom, findEmailAtom } from '../../../recoil/findAccountAtoms';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type IUserData = {
    code: string;
  }

function FindId2() {

    const {
        register,
        handleSubmit,
        watch,
        resetField,
        setError,
        clearErrors,
        getValues,
        formState: { errors }
    } = useForm<IUserData>({ mode: 'onBlur' })

    
    //입력 취소 버튼
    const removeInput = (name:any) => {
        resetField(name);
        setError(name,  {message: ''});
    }

    const sendEmail = useRecoilValue(findEmailAtom);
    const emailCode = useRecoilValue(emailCodeAtom);
    const navigate = useNavigate();

    const onValid =  async(data: IUserData) => {
        await new Promise((r) => setTimeout(r, 1000)); //중복제출 방지
        console.log(emailCode);

        //인증번호 다른 경우
        if (watch('code') !== emailCode) {
            setError('code', {
                type: 'password-mismatch',
                message: '인증번호가 일치하지 않습니다.'
            })
        } else { // 인증번호 일치하는 경우
            clearErrors('code');
            navigate('');
        }        
    }

    return(
        <div>
            <F.Header>
                <F.HeaderTitle>이메일 찾기</F.HeaderTitle>
                <F.HeaderText>
                    인증번호가 포함된 이메일이 {sendEmail}으로 전송되었습니다.<br/>
                    인증번호를 입력하여 다음 단계를 진행해 주세요.
                </F.HeaderText>
            </F.Header>

            <F.Main>
                <F.FormTitle>
                    <F.Ellipse></F.Ellipse>
                    인증번호
                </F.FormTitle>

                <F.FindForm onSubmit={handleSubmit(onValid)}>
                    <F.InputBox
                        toggle={watch("code")?.length > 0 ? true: false || errors.code ? true: false}  
                        color={errors.code ? '#FF4A4A': '#606060'}
                    >
                        <F.Input
                            id="code"
                            type="text"
                            placeholder="인증번호를 입력해 주세요"
                            {...register("code",{
                                required: true,
                                validate: {
                                    matchPassword: (value) => {
                                      const { code } = getValues();
                                      return code === value || '인증번호가 일치하지 않습니다.'
                                    }
                                }                           
                            })}
                            
                        />
                        {watch("code")?.length > 0 && 
                            <F.InputCancelBtn 
                                src={process.env.PUBLIC_URL + '/images/inputCancelIcon.svg'}
                                onClick={e => removeInput("code")}
                            />
                        }
                    </F.InputBox>

                    <F.ErrorMessage>
                        <F.ErrorText error={errors.code ? true : false}>
                        인증번호가 일치하지 않습니다.
                        </F.ErrorText>
                    </F.ErrorMessage>

                    {/*버튼*/}
                    <F.SubmitBtn type="submit">인증하기</F.SubmitBtn>
                </F.FindForm>
            </F.Main>
        </div>
    );
}

export default FindId2;