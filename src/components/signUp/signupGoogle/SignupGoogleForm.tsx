import * as L from '../../login/LoginForm.style';
import * as S from '../signupId/SignUpForm.style';
import GroupType from '../signupId/GroupType';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { groupTypeAtom } from '../../../recoil/signUpAtoms';
import axios from 'axios';

function SignUpGoogleForm(){

    type FormValue = {
        email: string;
        groupName: string;
        groupType: string;
        groupProfile: string;
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
    const onValid = (data: FormValue) => {

        data.groupType = groupTypeValue;
        
        console.log("성공");
        console.log(data);  
        
        axios({
            url: '/api/v1/auth/signup',
            method: 'POST',
            data: { },
          }).then((response) => {
            console.log(response.data);
          }).catch((error) => {
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
                    <L.FormHeaderText>구글 이메일</L.FormHeaderText>
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

            {/*그룹 이름*/}
            <L.PwForm>
                <L.FormHeader>
                    <L.Ellipse></L.Ellipse>
                    <L.FormHeaderText>그룹 이름</L.FormHeaderText>
                </L.FormHeader>
                <L.LoginInputBox 
                    toggle={watch("groupName")?.length > 0 ? true: false || errors.groupName ? true: false} 
                    color={errors.groupName ? '#FF4A4A': '#606060'}    
                >
                    <L.LoginInput
                        id="grounName"
                        type="text"
                        placeholder="그룹이름을 입력해 주세요"
                        {...register("groupName",{
                            required: true,
                            pattern: {
                                value:/^[a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,12}$/,
                                message: "2~12자 한글, 영문, 숫자"
                            },
                        })}
                    />
                    {watch("groupName")?.length > 0 && 
                        <L.InputCancelBtn 
                            src={process.env.PUBLIC_URL + '/images/inputCancelIcon.svg'}
                            onClick={e => removeInput("groupName")}
                        />
                    }
                </L.LoginInputBox>
                <S.ErrorMessage>
                    {watch("groupName")?.length === 0 && <S.HeplerText error={errors.groupName ? true : false}>2~12자 한글, 영문, 숫자</S.HeplerText>}
                    <S.ErrorText error={errors.groupName ? true : false}>2~12자 한글, 영문, 숫자</S.ErrorText>
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
                    toggle={watch("groupProfile")?.length > 0 ? true: false || errors.groupProfile ? true: false} 
                    color={errors.groupProfile ? '#FF4A4A': '#606060'}     
                >
                    <L.LoginInput
                        id="groupProfile"
                        type="text"
                        placeholder="Ondot.co.kr"
                        {...register("groupProfile",{
                            required: true,
                            pattern: {
                                value: /^[a-zA-Z0-9]{1,100}$/,
                                message: ""
                            },
                        })}
                    />
                    {/*clear버튼*/}
                    {watch("groupProfile")?.length > 0 && 
                        <L.InputCancelBtn 
                            src={process.env.PUBLIC_URL + '/images/inputCancelIcon.svg'}
                            onClick={e => removeInput("groupProfile")}
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

export default SignUpGoogleForm;
