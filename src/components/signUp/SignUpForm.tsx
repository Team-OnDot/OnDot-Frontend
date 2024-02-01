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
        <L.LoginForm onSubmit={handleSubmit(onValid, onError)}>

            {/*이메일*/}
            <L.IdForm>
                <L.FormHeader>
                    <L.Ellipse></L.Ellipse>
                    <L.FormHeaderText>이메일</L.FormHeaderText>
                </L.FormHeader>
                <L.LoginInputBox
                    toggle={onChangeId > 0 ? true: false || errors.userId ? true: false} 
                    color={errors.userId ? '#FF4A4A': '#606060'}                
                >
                    <L.LoginInput
                        id="userId"
                        type="text"
                        placeholder="이메일을 입력해 주세요"
                        {...register("userId",{
                            required: true,
                            pattern: {
                                value: /^[a-zA-Z0-9]{4,16}$/,
                                message: "4~16자 영문, 숫자"
                            },
                        })}
                    />
                    {onChangeId > 0 && 
                        <L.InputCancelBtn 
                            src={process.env.PUBLIC_URL + '/images/inputCancelIcon.svg'}
                            onClick={e => removeInput("userId")}
                        />
                    }
                </L.LoginInputBox>
                <S.ErrorMessage>
                    {onChangeId === 0 && <S.HeplerText error={errors.userId ? true : false}>4~16자 영문, 숫자</S.HeplerText>}
                    <S.ErrorText error={errors.userId ? true : false}>4~16자 영문, 숫자</S.ErrorText>
                </S.ErrorMessage>
            </L.IdForm>

            {/*비밀번호*/}
            <L.PwForm>
                <L.FormHeader>
                    <L.Ellipse></L.Ellipse>
                    <L.FormHeaderText>비밀번호</L.FormHeaderText>
                </L.FormHeader>
                <L.LoginInputBox 
                    toggle={onChangePw > 0 ? true: false || errors.userPw ? true: false} 
                    color={errors.userPw ? '#FF4A4A': '#606060'}    
                >
                    <L.LoginInput
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
                        <L.InputCancelBtn 
                            src={process.env.PUBLIC_URL + '/images/inputCancelIcon.svg'}
                            onClick={e => removeInput("userPw")}
                        />
                    }
                </L.LoginInputBox>
                <S.ErrorMessage>
                    {onChangePw === 0 && <S.HeplerText error={errors.userPw ? true : false}>8~20자 영문, 숫자, 특수기호(_ @ ? !)</S.HeplerText>}
                    <S.ErrorText error={errors.userPw ? true : false}>8~20자 영문, 숫자, 특수기호(_ @ ? !)</S.ErrorText>
                </S.ErrorMessage>
            </L.PwForm>

            {/*비밀번호 확인*/}
            <L.PwForm>
                <L.FormHeader>
                    <L.Ellipse></L.Ellipse>
                    <L.FormHeaderText>비밀번호 확인</L.FormHeaderText>
                </L.FormHeader>
                <L.LoginInputBox 
                    toggle={onChangePwCheck > 0 ? true: false || errors.pwCheck ? true: false} 
                    color={errors.pwCheck ? '#FF4A4A': '#606060'}    
                >
                    <L.LoginInput
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
                        <L.InputCancelBtn 
                            src={process.env.PUBLIC_URL + '/images/inputCancelIcon.svg'}
                            onClick={e => removeInput("pwCheck")}
                        />
                    }
                </L.LoginInputBox>
                <S.ErrorMessage>
                    {onChangePwCheck === 0 && <S.HeplerText error={errors.pwCheck ? true : false}>비밀번호가 일치하지 않습니다</S.HeplerText>}
                    <S.ErrorText error={errors.pwCheck ? true : false}>{errors?.pwCheck?.message}</S.ErrorText>
                </S.ErrorMessage>
            </L.PwForm>
  
            {/*그룹 이름*/}
            <L.PwForm>
                <L.FormHeader>
                    <L.Ellipse></L.Ellipse>
                    <L.FormHeaderText>그룹 이름</L.FormHeaderText>
                </L.FormHeader>
                <L.LoginInputBox 
                    toggle={onChangeGroupName > 0 ? true: false || errors.groupName ? true: false} 
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
                    {onChangeGroupName > 0 && 
                        <L.InputCancelBtn 
                            src={process.env.PUBLIC_URL + '/images/inputCancelIcon.svg'}
                            onClick={e => removeInput("groupName")}
                        />
                    }
                </L.LoginInputBox>
                <S.ErrorMessage>
                    {onChangeGroupName === 0 && <S.HeplerText error={errors.groupName ? true : false}>2~12자 한글, 영문, 숫자</S.HeplerText>}
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
                    toggle={onChangeGroupProfile > 0 ? true: false || errors.groupProfile ? true: false} 
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
                                message: "ㅇ"
                            },
                        })}
                    />
                    {/*clear버튼*/}
                    {onChangeGroupProfile > 0 && 
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

export default SignUpForm;
