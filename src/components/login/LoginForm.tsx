import * as S from './LoginForm.style';
import { FieldErrors, useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

type IUserData = {
    email: string;
    userPw: string;
  }

function LoginForm() {

    const {
        register,
        handleSubmit,
        watch,
        resetField,
        setError,
        formState: { errors }
    } = useForm<IUserData>({ mode: 'onBlur' })

    //submit이 정상적으로 되었을 때 data를 다루는 함수(백엔드 전달)
    const navigate = useNavigate();
    const onValid = (data: IUserData) => {

        axios({
            url: '/api/v1/auth/signin',
            method: 'post',
            data: {
                email: data.email,
                password: data.userPw,
            },
          }).then((response) => {
            if(response.data.statusCode === "OK"){
                sessionStorage.setItem('isLogin', response.data.content.accessToken); //로그인 성공 여부
                navigate("/group-profile"); //로그인 성공 시 페이지 이동
                //console.log(sessionStorage.getItem('isLogin'));
            }
            else{ //로그인 실패
                setError("email", { message: "아이디 또는 비밀번호가 올바르지 않습니다" },{ shouldFocus: true });
                setError("userPw", { message: "아이디 또는 비밀번호가 올바르지 않습니다" },{ shouldFocus: true });
                console.log(response.data);
            }
          }).catch((error) => {
            console.log("실패");  
            console.error('AxiosError:', error);
        });
        
    };

    //유효성 검사에 실패했을 때 errors를 다루는 함수
    const onInValid = (errors: FieldErrors) => {
        console.log("# onInValid", errors);
    };

    //로그인 버튼 활성화    
    const [isActive, setIsActive] = useState(false);
    const watchAll = Object.values(watch());
    useEffect(() => {
        if (watchAll.every((el) => el)) {
        setIsActive(true);
        } else {
        setIsActive(false);
        }
    }, [watchAll]);

    //입력 취소 버튼
    const removeInput = (name:any) => {
        resetField(name);
        setError(name,  {message: ''});
    }

	return (
        <S.LoginForm onSubmit={handleSubmit(onValid, onInValid)}>

            {/*이메일*/}
            <S.IdForm>
                <S.FormHeader>
                    <S.Ellipse></S.Ellipse>
                    <S.FormHeaderText>이메일</S.FormHeaderText>
                </S.FormHeader>
                <S.LoginInputBox
                    toggle={watch("email")?.length > 0 ? true: false || errors.email ? true: false}  
                    color={errors.email ? '#FF4A4A': '#606060'}
                >
                    <S.LoginInput
                        id="email"
                        type="text"
                        placeholder="이메일을 입력해 주세요"
                        {...register("email",{
                            required: true,
                            pattern: {
                                value: /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/,
                                message: "아이디 또는 비밀번호가 올바르지 않습니다"
                            },                            
                        })}
                        
                    />
                    {watch("email")?.length > 0 && 
                        <S.InputCancelBtn 
                            src={process.env.PUBLIC_URL + '/images/inputCancelIcon.svg'}
                            onClick={e => removeInput("email")}
                        />
                    }
                </S.LoginInputBox>
            </S.IdForm>

            {/*비밀번호*/}
            <S.PwForm>
                <S.FormHeader>
                    <S.Ellipse></S.Ellipse>
                    <S.FormHeaderText>비밀번호</S.FormHeaderText>
                </S.FormHeader>
                <S.LoginInputBox 
                    toggle={watch("userPw")?.length > 0 ? true: false || errors.userPw ? true: false}  
                    color={errors.userPw ? '#FF4A4A': '#606060'}>
                    <S.LoginInput
                        id="userPw"
                        type="password"
                        placeholder="비밀번호를 입력해 주세요"
                        {...register("userPw",{
                            required: true,
                            pattern: {
                                value:/^[a-z0-9#?!@$%^&*-](?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-])[a-z0-9#?!@$%^&*-]{8,20}$/,
                                message: "아이디 또는 비밀번호가 올바르지 않습니다"
                            },
                        })}
                    />
                    {watch("userPw")?.length > 0 && 
                        <S.InputCancelBtn 
                            src={process.env.PUBLIC_URL + '/images/inputCancelIcon.svg'}
                            onClick={e => removeInput("userPw")}
                        />
                    }
                </S.LoginInputBox>

                <S.ErrorMessage>
                    <S.ErrorText error={errors.email ? true : false || errors.userPw ? true : false}>
                        아이디 또는 비밀번호가 올바르지 않습니다
                    </S.ErrorText>
                </S.ErrorMessage>
            </S.PwForm>

            {/*버튼*/}
            <S.LoginBtn type="submit" toggle={isActive}>
                로그인
            </S.LoginBtn>
        </S.LoginForm>
	);
}

export default LoginForm;
