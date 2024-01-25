import * as L from '../login/LoginForm.style';
import * as S from './SignUpForm.style';
import GroupType from './GroupType';
import {useForm} from 'react-hook-form';
import { useState, useEffect } from 'react';
import { getValue } from '@testing-library/user-event/dist/utils';

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
        setError,
        resetField,
        clearErrors,
        getValues,
        formState: { errors },
    } = useForm<FormValue>({ mode: 'onBlur' });

    //버튼 활성화 변수
    const [isActive, setIsActive] = useState(false);

    //길이 변화 변수
    const onChangeId = watch("userId")?.length ?? 0;
    const onChangePw = watch("userPw")?.length ?? 0;
    const onChangePwCheck = watch("pwCheck")?.length ?? 0;
    const onChangeGroupName = watch("groupName")?.length ?? 0;
    const onChangeGroupProfile = watch("groupProfile")?.length ?? 0;

    //비밀번호 일치 확인
    useEffect(() => {

        if (watch('userPw') !== watch('pwCheck') && watch('pwCheck')) {
            setError('pwCheck', {
                type: 'password-mismatch',
                message: '비밀번호가 일치하지 않습니다'
            })
            } else { // 비밀번호 일치시 오류 제거
            clearErrors('pwCheck');
            }
        }, [watch('userPw'), watch('pwCheck')])

    
     //회원가입 버튼 활성화    
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
    }

    //값이 다 정상적으로 입력되었을 때 실행되는 함수
    const onValid = (data: FormValue) => {
        console.log("성공");
        console.log(data);        
      };

    //값이 다 비정상적으로 입력되었을 때 실행되는 함수
    const onError = (error:any) => {
        console.log(error);
    };

    return(
        <L.loginForm onSubmit={handleSubmit(onValid, onError)}>

            {/*아이디*/}
            <L.idForm>
                <L.formHeader>
                    <L.ellipse></L.ellipse>
                    <L.formHeaderText>아이디</L.formHeaderText>
                </L.formHeader>
                <L.loginInputBox
                    toggle={onChangeId > 0 ? true: false || errors.userId ? true: false} 
                    color={errors.userId ? '#FF4A4A': '#606060'}                
                >
                    <L.loginInput
                        id="userId"
                        type="text"
                        placeholder="아이디를 입력해 주세요"
                        {...register("userId",{
                            required: true,
                            pattern: {
                                value: /^[a-zA-Z0-9]{4,16}$/,
                                message: "4~16자 영문, 숫자"
                            },
                        })}
                    />
                    {onChangeId > 0 && 
                        <L.inputCancelBtn 
                            src={process.env.PUBLIC_URL + '/images/inputCancelIcon.svg'}
                            onClick={e => removeInput("userId")}
                        />
                    }
                </L.loginInputBox>
                <S.errorMessage>
                    {onChangeId === 0 && <S.heplerText error={errors.userId ? true : false}>4~16자 영문, 숫자</S.heplerText>}
                    <S.errorText error={errors.userId ? true : false}>4~16자 영문, 숫자</S.errorText>
                </S.errorMessage>
            </L.idForm>

            {/*비밀번호*/}
            <L.pwForm>
                <L.formHeader>
                    <L.ellipse></L.ellipse>
                    <L.formHeaderText>비밀번호</L.formHeaderText>
                </L.formHeader>
                <L.loginInputBox 
                    toggle={onChangePw > 0 ? true: false || errors.userPw ? true: false} 
                    color={errors.userPw ? '#FF4A4A': '#606060'}    
                >
                    <L.loginInput
                        id="userPw"
                        type="password"
                        placeholder="비밀번호를 입력해 주세요"
                        {...register("userPw",{
                            required: true,
                            pattern: {
                                value:/^[a-z0-9#?!@$%^&*-](?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-])[a-z0-9#?!@$%^&*-]{8,20}$/,
                                message: "8~20자 영문, 숫자, 특수기호(_ @ ? !)"
                            },
                        })}
                    />
                    {onChangePw > 0 && 
                        <L.inputCancelBtn 
                            src={process.env.PUBLIC_URL + '/images/inputCancelIcon.svg'}
                            onClick={e => removeInput("userPw")}
                        />
                    }
                </L.loginInputBox>
                <S.errorMessage>
                    {onChangePw === 0 && <S.heplerText error={errors.userPw ? true : false}>8~20자 영문, 숫자, 특수기호(_ @ ? !)</S.heplerText>}
                    <S.errorText error={errors.userPw ? true : false}>8~20자 영문, 숫자, 특수기호(_ @ ? !)</S.errorText>
                </S.errorMessage>
            </L.pwForm>

            {/*비밀번호 확인*/}
            <L.pwForm>
                <L.formHeader>
                    <L.ellipse></L.ellipse>
                    <L.formHeaderText>비밀번호 확인</L.formHeaderText>
                </L.formHeader>
                <L.loginInputBox 
                    toggle={onChangePwCheck > 0 ? true: false || errors.pwCheck ? true: false} 
                    color={errors.pwCheck ? '#FF4A4A': '#606060'}    
                >
                    <L.loginInput
                        id="pwCheck"
                        type="password"
                        placeholder="비밀번호를 다시 한 번 입력해 주세요"
                        {...register("pwCheck",{
                            required: true,
                            validate: {
                                matchPassword: (value) => {
                                  const { userPw } = getValues();
                                  return userPw === value || '비밀번호가 일치하지 않습니다'
                                }
                            }
                        })}
                    />
                    {onChangePwCheck > 0 && 
                        <L.inputCancelBtn 
                            src={process.env.PUBLIC_URL + '/images/inputCancelIcon.svg'}
                            onClick={e => removeInput("pwCheck")}
                        />
                    }
                </L.loginInputBox>
                <S.errorMessage>
                    {onChangePwCheck === 0 && <S.heplerText error={errors.pwCheck ? true : false}>비밀번호가 일치하지 않습니다</S.heplerText>}
                    <S.errorText error={errors.pwCheck ? true : false}>{errors?.pwCheck?.message}</S.errorText>
                </S.errorMessage>
            </L.pwForm>
  
            {/*그룹 이름*/}
            <L.pwForm>
                <L.formHeader>
                    <L.ellipse></L.ellipse>
                    <L.formHeaderText>그룹 이름</L.formHeaderText>
                </L.formHeader>
                <L.loginInputBox 
                    toggle={onChangeGroupName > 0 ? true: false || errors.groupName ? true: false} 
                    color={errors.groupName ? '#FF4A4A': '#606060'}    
                >
                    <L.loginInput
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
                    {onChangeGroupName > 0 && 
                        <L.inputCancelBtn 
                            src={process.env.PUBLIC_URL + '/images/inputCancelIcon.svg'}
                            onClick={e => removeInput("groupName")}
                        />
                    }
                </L.loginInputBox>
                <S.errorMessage>
                    {onChangeGroupName === 0 && <S.heplerText error={errors.groupName ? true : false}>2~12자 한글, 영문, 숫자</S.heplerText>}
                    <S.errorText error={errors.groupName ? true : false}>2~12자 한글, 영문, 숫자</S.errorText>
                </S.errorMessage>
            </L.pwForm>

            {/*그룹 분류*/}
            <L.pwForm>
                <L.formHeader>
                    <L.ellipse></L.ellipse>
                    <L.formHeaderText>그룹 분류</L.formHeaderText>
                </L.formHeader>
                    <GroupType/>
            </L.pwForm>

            {/*그룹 프로필 주소*/}
            <L.pwForm>
                <L.formHeader>
                    <L.ellipse></L.ellipse>
                    <L.formHeaderText>그룹 프로필 주소</L.formHeaderText>
                </L.formHeader>
                <L.loginInputBox 
                    toggle={onChangeGroupProfile > 0 ? true: false || errors.groupProfile ? true: false} 
                    color={errors.groupProfile ? '#FF4A4A': '#606060'}     
                >
                    <L.loginInput
                        id="groupProfile"
                        type="text"
                        placeholder="Ondot.co.kr"
                        {...register("groupProfile",{
                            required: true,
                            pattern: {
                                value: /^[a-zA-Z0-9]{1,100}$/,
                                message: "ㅇ"
                            },
                        })}
                    />
                    {/*clear버튼*/}
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
