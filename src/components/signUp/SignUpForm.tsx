import * as L from '../login/LoginForm.style';
import * as S from './SignUpForm.style';
import GroupType from './GroupType';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { groupTypeAtom } from '../../recoil/signUpAtoms';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUpForm(){

    type FormValue = {
        email: string;
        recoveryEmail: string,
        password: string;
        confirmPassword: string;
        name: string;
        type: string;
        profileUrl: string;
    }

    const {
        register,
        handleSubmit,
        watch,
        setError,
        resetField,
        clearErrors,
        getValues,
        formState: { errors },
    } = useForm<FormValue>({ mode: 'onBlur' });

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

    
    //회원가입 버튼 활성화    
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
        clearErrors(name);
        resetField(name);
        setError(name, { message: ''});
    }

    //값이 다 정상적으로 입력되었을 때 실행되는 함수(백엔드 전달)
    const groupTypeValue = useRecoilValue(groupTypeAtom);
    const navigate = useNavigate();
    const onValid = (data: FormValue) => {

        if(groupTypeValue === "동아리"){
            data.type = "STUDENT_COUNCIL"
        }
        else if(groupTypeValue === "학생회"){
            data.type = "STUDENT_CLUB"
        }
        else if(groupTypeValue === "학생회"){
            data.type = "ACADEMIC_CLUB"
        }
        else{
            data.type = "OTHER"
        }
        
        axios({
            url: '/api/v1/auth/signup',
            method: 'post',
            data: {
                email: data.email,
                recoveryEmail: data.recoveryEmail,
                name: data.name,
                password: data.password,
                confirmPassword: data.confirmPassword,
                type: data.type,
                profileUrl: data.profileUrl
            },
          }).then((response) => {
            console.log("성공");  
            console.log(response.data);
            navigate("/login");

          }).catch((error) => {
            console.log("실패");  
            console.error('AxiosError:', error);
        });
    };

    //값이 다 비정상적으로 입력되었을 때 실행되는 함수
    const onError = (error:any) => {
        console.log(error);
    };

    return(
        <L.LoginForm onSubmit={handleSubmit(onValid, onError)}>

            {/*이메일*/}
            <L.IdForm>
                <L.FormHeader>
                    <L.Ellipse></L.Ellipse>
                    <L.FormHeaderText>이메일</L.FormHeaderText>
                </L.FormHeader>
                <L.LoginInputBox
                    toggle={watch("email")?.length > 0 ? true: false || errors.email ? true: false} 
                    color={errors.email ? '#FF4A4A': '#606060'}                
                >
                    <L.LoginInput
                        id="email"
                        type="text"
                        placeholder="이메일을 입력해 주세요"
                        {...register("email",{
                            required: true,
                            pattern: {
                                value: /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/,
                                message: "ex. ondot@email.com"
                            },
                        })}
                    />
                
                    {watch("email")?.length > 0 && 
                        <L.InputCancelBtn 
                            src={process.env.PUBLIC_URL + '/images/inputCancelIcon.svg'}
                            onClick={(e) => {removeInput("email");}}
                        />
                    }
                </L.LoginInputBox>
                <S.ErrorMessage>
                    {watch("email")?.length === 0 && <S.HeplerText error={errors.email ? true : false}>ex. ondot@email.com</S.HeplerText>}
                    <S.ErrorText error={errors.email ? true : false}>ex. ondot@email.com</S.ErrorText>
                </S.ErrorMessage>
            </L.IdForm>

            {/*복구이메일*/}
            <L.PwForm>
            <L.FormHeader>
                    <L.Ellipse></L.Ellipse>
                    <L.FormHeaderText>복구 이메일</L.FormHeaderText>
                </L.FormHeader>
                <L.LoginInputBox
                    toggle={watch("recoveryEmail")?.length > 0 ? true: false || errors.recoveryEmail ? true: false} 
                    color={errors.recoveryEmail ? '#FF4A4A': '#606060'}                
                >
                    <L.LoginInput
                        id="recoveryEmail"
                        type="text"
                        placeholder="복구 이메일을 입력해 주세요"
                        {...register("recoveryEmail",{
                            required: true,
                            pattern: {
                                value: /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/,
                                message: "ex. ondot@email.com"
                            },
                        })}
                    />
                
                    {watch("recoveryEmail")?.length > 0 && 
                        <L.InputCancelBtn 
                            src={process.env.PUBLIC_URL + '/images/inputCancelIcon.svg'}
                            onClick={(e) => {removeInput("recoveryEmail");}}
                        />
                    }
                </L.LoginInputBox>
                <S.ErrorMessage>
                    {watch("recoveryEmail")?.length === 0 && <S.HeplerText error={errors.recoveryEmail ? true : false}>ex. ondot@email.com</S.HeplerText>}
                    <S.ErrorText error={errors.recoveryEmail ? true : false}>ex. ondot@email.com</S.ErrorText>
                </S.ErrorMessage>
            </L.PwForm>

            {/*비밀번호*/}
            <L.PwForm>
                <L.FormHeader>
                    <L.Ellipse></L.Ellipse>
                    <L.FormHeaderText>비밀번호</L.FormHeaderText>
                </L.FormHeader>
                <L.LoginInputBox 
                    toggle={watch("password")?.length > 0 ? true: false || errors.password ? true: false} 
                    color={errors.password ? '#FF4A4A': '#606060'}    
                >
                    <L.LoginInput
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
                        <L.InputCancelBtn 
                            src={process.env.PUBLIC_URL + '/images/inputCancelIcon.svg'}
                            onClick={e => removeInput("password")}
                        />
                    }
                </L.LoginInputBox>
                <S.ErrorMessage>
                    {watch("password")?.length === 0 && <S.HeplerText error={errors.password ? true : false}>8~20자 영문, 숫자, 특수기호(_ @ ? !)</S.HeplerText>}
                    <S.ErrorText error={errors.password ? true : false}>8~20자 영문, 숫자, 특수기호(_ @ ? !)</S.ErrorText>
                </S.ErrorMessage>
            </L.PwForm>

            {/*비밀번호 확인*/}
            <L.PwForm>
                <L.FormHeader>
                    <L.Ellipse></L.Ellipse>
                    <L.FormHeaderText>비밀번호 확인</L.FormHeaderText>
                </L.FormHeader>
                <L.LoginInputBox 
                    toggle={watch("confirmPassword")?.length ? true: false || errors.confirmPassword ? true: false} 
                    color={errors.confirmPassword ? '#FF4A4A': '#606060'}    
                >
                    <L.LoginInput
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
                    {watch("confirmPassword")?.length > 0 && 
                        <L.InputCancelBtn 
                            src={process.env.PUBLIC_URL + '/images/inputCancelIcon.svg'}
                            onClick={e => removeInput("pwCheck")}
                        />
                    }
                </L.LoginInputBox>
                <S.ErrorMessage>
                    {watch("confirmPassword")?.length === 0 && <S.HeplerText error={errors.confirmPassword ? true : false}>비밀번호가 일치하지 않습니다</S.HeplerText>}
                    <S.ErrorText error={errors.confirmPassword ? true : false}>{errors?.confirmPassword?.message}</S.ErrorText>
                </S.ErrorMessage>
            </L.PwForm>
  
            {/*그룹 이름*/}
            <L.PwForm>
                <L.FormHeader>
                    <L.Ellipse></L.Ellipse>
                    <L.FormHeaderText>그룹 이름</L.FormHeaderText>
                </L.FormHeader>
                <L.LoginInputBox 
                    toggle={watch("name")?.length > 0 ? true: false || errors.name ? true: false} 
                    color={errors.name ? '#FF4A4A': '#606060'}    
                >
                    <L.LoginInput
                        id="name"
                        type="text"
                        placeholder="그룹이름을 입력해 주세요"
                        {...register("name",{
                            required: true,
                            pattern: {
                                value:/^[a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,12}$/,
                                message: "2~12자 한글, 영문, 숫자"
                            },
                        })}
                    />
                    {watch("name")?.length > 0 && 
                        <L.InputCancelBtn 
                            src={process.env.PUBLIC_URL + '/images/inputCancelIcon.svg'}
                            onClick={e => removeInput("name")}
                        />
                    }
                </L.LoginInputBox>
                <S.ErrorMessage>
                    {watch("name")?.length === 0 && <S.HeplerText error={errors.name ? true : false}>2~12자 한글, 영문, 숫자</S.HeplerText>}
                    <S.ErrorText error={errors.name ? true : false}>2~12자 한글, 영문, 숫자</S.ErrorText>
                </S.ErrorMessage>
            </L.PwForm>

            {/*그룹 분류*/}
            <L.PwForm>
                <L.FormHeader>
                    <L.Ellipse></L.Ellipse>
                    <L.FormHeaderText>그룹 분류</L.FormHeaderText>
                </L.FormHeader>
                    <GroupType/>
            </L.PwForm>

            {/*그룹 프로필 주소*/}
            <L.PwForm>
                <L.FormHeader>
                    <L.Ellipse></L.Ellipse>
                    <L.FormHeaderText>그룹 프로필 주소</L.FormHeaderText>
                </L.FormHeader>
                <L.LoginInputBox 
                    toggle={watch("profileUrl")?.length > 0 ? true: false || errors.profileUrl ? true: false} 
                    color={errors.profileUrl ? '#FF4A4A': '#606060'}     
                >
                    <L.LoginInput
                        id="profileUrl"
                        type="text"
                        placeholder="Ondot.co.kr"
                        {...register("profileUrl",{
                            required: true,
                            pattern: {
                                value: /^[a-z0-9.]{2,12}$/,
                                message: ""
                            },
                        })}
                    />
                    {/*clear버튼*/}
                    {watch("profileUrl")?.length > 0 && 
                        <L.InputCancelBtn 
                            src={process.env.PUBLIC_URL + '/images/inputCancelIcon.svg'}
                            onClick={e => removeInput("profileUrl")}
                        />
                    }
                </L.LoginInputBox>
            </L.PwForm>

            <S.SignUpBtn type="submit" toggle={isActive}>
                회원가입
            </S.SignUpBtn>
        </L.LoginForm>
    );
}

export default SignUpForm;
