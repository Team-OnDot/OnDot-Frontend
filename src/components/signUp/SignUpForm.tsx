import * as L from '../login/LoginForm.style';
import * as S from './SignUpForm.style';
import GroupType from './GroupType';
import {useForm} from 'react-hook-form';
import { useState } from 'react';

function SignUpForm(){

    type FormValue = {
        userId: string;
        userPw: string;
        userPwCheck: string;
        groupName: string;
        groupType: string;
        groupProfile: string;
    }

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormValue>();

    const [checkId, setCheckId] = useState(false);
    const [checkPw, setCheckPw] = useState(false);

    return(
        <L.loginForm>

            <L.idForm>
                <L.formHeader>
                    <L.ellipse></L.ellipse>
                    <L.formHeaderText>
                        <label htmlFor="userId">아이디</label>
                    </L.formHeaderText>
                </L.formHeader>
                <L.loginInputBox toggle={checkId}>
                    <L.loginInput
                        id="userId"
                        type="id"
                        placeholder="아이디를 입력해 주세요"
                        {...register("userId",{
                            required: true,
                            maxLength: 16,
                            minLength: 4,
                            pattern: /^[a-zA-Z0-9]{4,12}$/,
                        })}
                    />
                </L.loginInputBox>
            </L.idForm>

            <L.pwForm>
                <L.formHeader>
                    <L.ellipse></L.ellipse>
                    <L.formHeaderText>비밀번호</L.formHeaderText>
                </L.formHeader>
                <L.loginInputBox toggle={checkId}>
                    <L.loginInput
                        id="userPw"
                        type="password"
                        placeholder="비밀번호를 입력해 주세요"
                        {...register("userPw",{
                            required: true,
                            maxLength: 20,
                            pattern: /^[A-Za-z0-9]{6,20}$/,
                        })}
                    />
                </L.loginInputBox>
            </L.pwForm>


            <L.pwForm>
                <L.formHeader>
                    <L.ellipse></L.ellipse>
                    <L.formHeaderText>비밀번호 확인</L.formHeaderText>
                </L.formHeader>
                <L.loginInputBox toggle={checkId}>
                    <L.loginInput
                        id="userPwCheck"
                        type="password"
                        placeholder="비밀번호를 다시 한 번 입력해 주세요"
                        {...register("userPwCheck")}
                    />
                </L.loginInputBox>
            </L.pwForm>
  
            <L.pwForm>
                <L.formHeader>
                    <L.ellipse></L.ellipse>
                    <L.formHeaderText>그룹 이름</L.formHeaderText>
                </L.formHeader>
                <L.loginInputBox toggle={checkId}>
                    <L.loginInput
                        id="groundName"
                        type="text"
                        placeholder="그룹이름을 입력해 주세요"
                        {...register("groupName")}
                    />
                </L.loginInputBox>
            </L.pwForm>

            <L.pwForm>
                <L.formHeader>
                    <L.ellipse></L.ellipse>
                    <L.formHeaderText>그룹 분류</L.formHeaderText>
                </L.formHeader>
                <L.loginInputBox toggle={checkId}>
                    <GroupType/>
                </L.loginInputBox>
            </L.pwForm>

            <L.pwForm>
                <L.formHeader>
                    <L.ellipse></L.ellipse>
                    <L.formHeaderText>그룹 프로필 주소</L.formHeaderText>
                </L.formHeader>
                <L.loginInputBox toggle={checkId}>
                    <L.loginInput
                        id="groupProfile"
                        type="email"
                        placeholder="Ondot.co.kr"
                        {...register("groupProfile")}
                    />
                </L.loginInputBox>
            </L.pwForm>

            <S.signUpBtn type="submit">
                회원가입
            </S.signUpBtn>
        </L.loginForm>
    );
}

export default SignUpForm;
