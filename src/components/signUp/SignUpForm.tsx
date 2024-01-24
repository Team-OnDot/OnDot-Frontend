import * as L from '../login/LoginForm.style';
import * as S from './SignUpForm.style';
import GroupType from './GroupType';
import {useForm} from 'react-hook-form';
import { useState, useEffect } from 'react';

function SignUpForm(){

    type FormValue = {
        userId: string;
        userPw: string;
        pwCheck: string;
        groupName: string;
        groupType: string;
        groupProfile: string;
    }

    const {
        register,
        handleSubmit,
        watch,
        resetField,
        formState: { errors },
    } = useForm<FormValue>();

    //버튼 활성화 변수
    const [isActive, setIsActive] = useState(false);

    //길이 변화 변수
    const onChangeId = watch("userId")?.length ?? 0;
    const onChangePw = watch("userPw")?.length ?? 0;
    const onChangePwCheck = watch("pwCheck")?.length ?? 0;
    const onChangeGroupName = watch("groupName")?.length ?? 0;
    const onChangeGroupProfile = watch("groupProfile")?.length ?? 0;

    const [checkId, setCheckId] = useState(false);
    const [checkPw, setCheckPw] = useState(false);
    const [checkPwCheck, setCheckPwCheck] = useState(false);
    const [checkGroupName, setCheckGroupName] = useState(false);
    const [checkGroupProfile, setCheckGroupProfile] = useState(false);


    //회원가입 버튼 활성화
    useEffect(() => {
        //다 입력되면 버튼 색 활성화
        if(onChangeId > 0 && onChangePw > 0 && onChangePwCheck > 0 && 
            onChangeGroupName && onChangeGroupProfile)
            setIsActive(true);
        else
            setIsActive(false);

        //입력된 박스 border색 변경    
        if(onChangeId > 0)
            setCheckId(true);
        else
            setCheckId(false);

        if(onChangePw > 0)
            setCheckPw(true);
        else
            setCheckPw(false);
        
        if(onChangePwCheck > 0)
            setCheckPwCheck(true);
        else
            setCheckPwCheck(false);

        if(onChangeGroupName > 0)
            setCheckGroupName(true);
        else
            setCheckGroupName(false);

        if(onChangeGroupProfile > 0)
            setCheckGroupProfile(true);
        else
            setCheckGroupProfile(false);
    });

    //입력 취소 버튼
    const removeInput = (name:any) => {
        resetField(name);
    }

    return(
        <L.loginForm>

            <L.idForm>
                <L.formHeader>
                    <L.ellipse></L.ellipse>
                    <L.formHeaderText>아이디</L.formHeaderText>
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
                    {onChangeId > 0 && 
                        <L.inputCancelBtn 
                            src={process.env.PUBLIC_URL + '/images/inputCancelIcon.svg'}
                            onClick={e => removeInput("userId")}
                        />
                    }
                </L.loginInputBox>
            </L.idForm>

            <L.pwForm>
                <L.formHeader>
                    <L.ellipse></L.ellipse>
                    <L.formHeaderText>비밀번호</L.formHeaderText>
                </L.formHeader>
                <L.loginInputBox toggle={checkPw}>
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
                    {onChangePw > 0 && 
                        <L.inputCancelBtn 
                            src={process.env.PUBLIC_URL + '/images/inputCancelIcon.svg'}
                            onClick={e => removeInput("userPw")}
                        />
                    }
                </L.loginInputBox>
            </L.pwForm>


            <L.pwForm>
                <L.formHeader>
                    <L.ellipse></L.ellipse>
                    <L.formHeaderText>비밀번호 확인</L.formHeaderText>
                </L.formHeader>
                <L.loginInputBox toggle={checkPwCheck}>
                    <L.loginInput
                        id="pwCheck"
                        type="password"
                        placeholder="비밀번호를 다시 한 번 입력해 주세요"
                        {...register("pwCheck")}
                    />
                    {onChangePwCheck > 0 && 
                        <L.inputCancelBtn 
                            src={process.env.PUBLIC_URL + '/images/inputCancelIcon.svg'}
                            onClick={e => removeInput("pwCheck")}
                        />
                    }
                </L.loginInputBox>
            </L.pwForm>
  
            <L.pwForm>
                <L.formHeader>
                    <L.ellipse></L.ellipse>
                    <L.formHeaderText>그룹 이름</L.formHeaderText>
                </L.formHeader>
                <L.loginInputBox toggle={checkGroupName}>
                    <L.loginInput
                        id="grounName"
                        type="text"
                        placeholder="그룹이름을 입력해 주세요"
                        {...register("groupName")}
                    />
                    {onChangeGroupName > 0 && 
                        <L.inputCancelBtn 
                            src={process.env.PUBLIC_URL + '/images/inputCancelIcon.svg'}
                            onClick={e => removeInput("groupName")}
                        />
                    }
                </L.loginInputBox>
            </L.pwForm>

            <L.pwForm>
                <L.formHeader>
                    <L.ellipse></L.ellipse>
                    <L.formHeaderText>그룹 분류</L.formHeaderText>
                </L.formHeader>
                    <GroupType/>
            </L.pwForm>

            <L.pwForm>
                <L.formHeader>
                    <L.ellipse></L.ellipse>
                    <L.formHeaderText>그룹 프로필 주소</L.formHeaderText>
                </L.formHeader>
                <L.loginInputBox toggle={checkGroupProfile}>
                    <L.loginInput
                        id="groupProfile"
                        type="email"
                        placeholder="Ondot.co.kr"
                        {...register("groupProfile")}
                    />
                    {onChangeGroupProfile > 0 && 
                        <L.inputCancelBtn 
                            src={process.env.PUBLIC_URL + '/images/inputCancelIcon.svg'}
                            onClick={e => removeInput("groupProfile")}
                        />
                    }
                </L.loginInputBox>
            </L.pwForm>

            <S.signUpBtn type="submit" toggle={isActive}>
                회원가입
            </S.signUpBtn>
        </L.loginForm>
    );
}

export default SignUpForm;
