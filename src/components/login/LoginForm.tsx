import * as S from './LoginForm.style';
import { FieldErrors, useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';

type IUserData = {
    userId: string;
    userPw: string;
  }

function LoginForm() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm<IUserData>({
        mode: "onSubmit"
      });

    //submit이 정상적으로 되었을 때 data를 다루는 함수
    const onValid = (data: IUserData) => {
        console.log("# onValid", data);
      };

    //유효성 검사에 실패했을 때 errors를 다루는 함수
    const onInValid = (errors: FieldErrors) => {
        console.log("# onInValid", errors);
      };

    const [isActive, setIsActive] = useState(false);
    const subscirbe = watch((data, { name }) => {
        
        if(data.userPw === '' || data.userId === ''){
            setIsActive(false);
        }
        else{
            setIsActive(true);
        }
        //console.log(data.userId, name)    
    });

	return (
        <S.loginForm onSubmit={handleSubmit(onValid, onInValid)}>
            <S.idForm>
                <S.formHeader>
                    <S.ellipse></S.ellipse>
                    <S.formHeaderText>아이디</S.formHeaderText>
                </S.formHeader>
                <S.loginInputBox>
                    <S.loginInput
                        id="userId"
                        type="id"
                        placeholder="아이디를 입력해 주세요"
                        {...register("userId",{
                            required: true
                        })}
                    />
                </S.loginInputBox>
            </S.idForm>

            <S.pwForm>
                <S.formHeader>
                    <S.ellipse></S.ellipse>
                    <S.formHeaderText>비밀번호</S.formHeaderText>
                </S.formHeader>
                <S.loginInputBox>
                    <S.loginInput
                        id="userPw"
                        type="password"
                        placeholder="비밀번호를 입력해 주세요"
                        {...register("userPw",{
                            required: true
                        })}
                    />
                </S.loginInputBox>
            </S.pwForm>

            <S.loginBtn type="submit" toggle={isActive}>
                로그인
            </S.loginBtn>
            <S.googleLoginBtn type="submit" toggle={isActive}>
                <S.googleLogo>
                    <S.googleLogoImg src={`${process.env.PUBLIC_URL}/images/googleLogo.svg`}></S.googleLogoImg>
                </S.googleLogo>
                <S.googleLoginText>구글 계정으로 로그인</S.googleLoginText>
            </S.googleLoginBtn>
        </S.loginForm>
	);
}

export default LoginForm;
