import { useForm } from "react-hook-form";
import * as S from './loginForm.style';

function loginForm() {

	return (
        <S.loginForm>
            <S.idForm>
                <S.formHeader>
                    <S.ellipse></S.ellipse>
                    <S.formHeaderText>아이디</S.formHeaderText>
                </S.formHeader>
                <S.loginInputBox>
                    <S.loginInput
                        id="userId"
                        type="userId"
                        placeholder="아이디를 입력해주세요"
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
                        id="userId"
                        type="userId"
                        placeholder="비밀번호를 입력해주세요"
                    />
                </S.loginInputBox>
            </S.pwForm>

            <S.loginBtn type="submit">
                로그인
            </S.loginBtn>
            <S.googleLoginBtn type="submit">
                <S.googleLogo>
                    <S.googleLogoImg src={`${process.env.PUBLIC_URL}/images/googleLogo.svg`}></S.googleLogoImg>
                </S.googleLogo>
                <S.googleLoginText>구글 계정으로 로그인</S.googleLoginText>
            </S.googleLoginBtn>
        </S.loginForm>
	);
}

export default loginForm;