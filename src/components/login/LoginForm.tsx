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
        resetField,
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
    const [checkId, setCheckId] = useState(false);
    const [checkPw, setCheckPw] = useState(false);
    const onChangeId = watch("userId")?.length ?? 0;
    const onChangePw = watch("userPw")?.length ?? 0;

    //로그인 버튼 활성화
    useEffect(() => {
        if(onChangeId > 0 && onChangePw > 0)
            setIsActive(true);
        else
            setIsActive(false);

        if(onChangeId > 0)
            setCheckId(true);
        else
            setCheckId(false);

        if(onChangePw > 0)
            setCheckPw(true);
        else
            setCheckPw(false);
    });

    //입력 취소 버튼
    const removeInput = (name:any) => {
        resetField(name);
    }

	return (
        <S.loginForm onSubmit={handleSubmit(onValid, onInValid)}>
            <S.idForm>
                <S.formHeader>
                    <S.ellipse></S.ellipse>
                    <S.formHeaderText>아이디</S.formHeaderText>
                </S.formHeader>
                <S.loginInputBox toggle={checkId}>
                    <S.loginInput
                        id="userId"
                        type="id"
                        placeholder="아이디를 입력해 주세요"
                        {...register("userId",{
                            required: true
                        })}
                        
                    />
                    {onChangeId > 0 && 
                        <S.inputCancelBtn 
                            src={process.env.PUBLIC_URL + '/images/inputCancelIcon.svg'}
                            onClick={e => removeInput("userId")}
                        />
                    }
                </S.loginInputBox>
            </S.idForm>

            <S.pwForm>
                <S.formHeader>
                    <S.ellipse></S.ellipse>
                    <S.formHeaderText>비밀번호</S.formHeaderText>
                </S.formHeader>
                <S.loginInputBox toggle={checkPw}>
                    <S.loginInput
                        id="userPw"
                        type="password"
                        placeholder="비밀번호를 입력해 주세요"
                        {...register("userPw",{
                            required: true
                        })}
                    />
                    {onChangePw > 0 && 
                        <S.inputCancelBtn 
                            src={process.env.PUBLIC_URL + '/images/inputCancelIcon.svg'}
                            onClick={e => removeInput("userPw")}
                        />
                    }
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