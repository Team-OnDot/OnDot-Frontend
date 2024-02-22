import * as F from '../FindAccount.style';
import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { findEmailAtom, hashValueAtom, accessTokenAtom } from '../../../recoil/findAccount';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

type IUserData = {
    password: string;
    confirmPassword: string;
  }

function ChangePw() {

    const {
        register,
        handleSubmit,
        watch,
        resetField,
        setError,
        getValues,
        clearErrors,
        formState: { isSubmitting, errors }
    } = useForm<IUserData>({ mode: 'onBlur' })

    
    //입력 취소 버튼
    const removeInput = (name:any) => {
        resetField(name);
        setError(name,  {message: ''});
    }

    //비밀번호 일치 확인
    useEffect(() => {

        if (watch('password') !== watch('confirmPassword') && watch('confirmPassword')) {
            setError('confirmPassword', {
                type: 'password-mismatch',
                message: '비밀번호가 일치하지 않습니다'
            })
        } else { // 비밀번호 일치시 오류 제거
            clearErrors('confirmPassword');
        }
    }, [watch('password'), watch('confirmPassword')])

    //완료 버튼 활성화    
    const [isActive, setIsActive] = useState(false);
    const watchAll = Object.values(watch());
    useEffect(() => {
        if (watchAll.every((el) => el)) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [watchAll]);

    //API연결
    const navigate = useNavigate();
    const accessToken = useRecoilValue(accessTokenAtom);
    const onValid = async(data: IUserData) => {
        await new Promise((r) => setTimeout(r, 1000)); //중복제출 방지

        axios({
            url: '/api/v1/auth/pw',
            method: 'get',
            params: {email: data.password,},
            headers: {Authorization: accessToken,},
          }).then((response) => {
                navigate("/login");
          }).catch((error) => {
            console.log("실패");  
            console.error('AxiosError:', error);
        });
    }

    return(
        <div>
            <F.Header>
                <F.HeaderTitle>비밀번호 변경</F.HeaderTitle>
            </F.Header>

            <F.Main>
                <F.FindForm onSubmit={handleSubmit(onValid)}>
                    {/*새로운 비밀번호*/}
                    <F.FormTitle><F.Ellipse/>새로운 비밀번호</F.FormTitle>
                    <F.InputBox
                        toggle={watch("password")?.length > 0 ? true: false || errors.password ? true: false} 
                        color={errors.password ? '#FF4A4A': '#606060'}  
                    >
                        <F.Input
                            id="password"
                            type="password"
                            placeholder="비밀번호를 입력해 주세요"
                            {...register("password",{
                                required: true,
                                pattern: {
                                    value:/^[a-z0-9#?!@$%^&*-](?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-])[a-z0-9#?!@$%^&*-]{8,20}$/,
                                    message: "8~20자 영문, 숫자, 특수기호(_ @ ? !)"
                                },
                            })}
                        />
                        {watch("password")?.length > 0 && 
                            <F.InputCancelBtn 
                                src={process.env.PUBLIC_URL + '/images/inputCancelIcon.svg'}
                                onClick={e => removeInput("password")}
                            />
                        }
                    </F.InputBox>

                    <F.ErrorMessage>
                        {watch("password")?.length === 0 && <F.HeplerText error={errors.password ? true : false}>8~20자 영문, 숫자, 특수기호(_ @ ? !)</F.HeplerText>}
                        <F.ErrorText error={errors.password ? true : false}>8~20자 영문, 숫자, 특수기호(_ @ ? !)</F.ErrorText>
                    </F.ErrorMessage>

                    {/*비밀번호 확인*/}        
                    <F.FormTitle><F.Ellipse/>비밀번호 확인</F.FormTitle>
                    <F.InputBox
                        toggle={watch("confirmPassword")?.length ? true: false || errors.confirmPassword ? true: false} 
                        color={errors.confirmPassword ? '#FF4A4A': '#606060'}    
                    >
                        <F.Input
                            id="confirmPassword"
                            type="password"
                            placeholder="비밀번호를 다시 한 번 입력해 주세요"
                            {...register("confirmPassword",{
                                required: true,
                                validate: {
                                    matchPassword: (value) => {
                                      const { password } = getValues();
                                      return password === value || '비밀번호가 일치하지 않습니다'
                                    }
                                }
                            })}
                        />
                        {watch("password")?.length > 0 && 
                            <F.InputCancelBtn 
                                src={process.env.PUBLIC_URL + '/images/inputCancelIcon.svg'}
                                onClick={e => removeInput("password")}
                            />
                        }
                    </F.InputBox>

                    <F.ErrorMessage>
                        {watch("password")?.length === 0 && <F.HeplerText error={errors.password ? true : false}>비밀번호가 일치하지 않습니다</F.HeplerText>}
                        <F.ErrorText error={errors.password ? true : false}>비밀번호가 일치하지 않습니다</F.ErrorText>
                    </F.ErrorMessage>

                    {/*버튼*/}
                    <F.ChangePwBtn type="submit" disabled={isSubmitting} toggle={isActive}>완료</F.ChangePwBtn>
                </F.FindForm>
            </F.Main>
        </div>
    );
}

export default ChangePw;