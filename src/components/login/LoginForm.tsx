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
    //길이 변화 감시 변수
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
        <S.LoginForm onSubmit={handleSubmit(onValid, onInValid)}>
            {/*아이디*/}
            <S.IdForm>
                <S.FormHeader>
                    <S.Ellipse></S.Ellipse>
                    <S.FormHeaderText>아이디</S.FormHeaderText>
                </S.FormHeader>
                <S.LoginInputBox toggle={checkId} color={""}>
                    <S.LoginInput
                        id="userId"
                        type="id"
                        placeholder="아이디를 입력해 주세요"
                        {...register("userId",{
                            required: true
                        })}
                        
                    />
                    {onChangeId > 0 && 
                        <S.InputCancelBtn 
                            src={process.env.PUBLIC_URL + '/images/inputCancelIcon.svg'}
                            onClick={e => removeInput("userId")}
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
                <S.LoginInputBox toggle={checkPw} color={""}>
                    <S.LoginInput
                        id="userPw"
                        type="password"
                        placeholder="비밀번호를 입력해 주세요"
                        {...register("userPw",{
                            required: true
                        })}
                    />
                    {onChangePw > 0 && 
                        <S.InputCancelBtn 
                            src={process.env.PUBLIC_URL + '/images/inputCancelIcon.svg'}
                            onClick={e => removeInput("userPw")}
                        />
                    }
                </S.LoginInputBox>
            </S.PwForm>

            {/*버튼*/}
            <S.LoginBtn type="submit" toggle={isActive}>
                로그인
            </S.LoginBtn>
            <S.GoogleLoginBtn type="submit" toggle={isActive}>
                <S.GoogleLogo>
                    <S.GoogleLogoImg src={`${process.env.PUBLIC_URL}/images/googleLogo.svg`}></S.GoogleLogoImg>
                </S.GoogleLogo>
                <S.GoogleLoginText>구글 계정으로 로그인</S.GoogleLoginText>
            </S.GoogleLoginBtn>
        </S.LoginForm>
	);
}

export default LoginForm;
