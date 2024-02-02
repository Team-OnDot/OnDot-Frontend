import { useNavigate } from 'react-router-dom';
import * as I from './ApplyInfo.style';
import * as In from '../../pages/interviewApply/InterviewApply.style';
import * as L from '../../components/login/LoginForm.style';
import * as S from '../../components/signUp/SignUpForm.style';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';

type IUserData = {
    userName: string;
    userPhone: string;
    userPw: string;
    pwCheck: string;
  }

function ApplyInfoForm() {

    const {
        register,
        handleSubmit,
        watch,
        setError,
        resetField,
        clearErrors,
        getValues,
        formState: { errors }
    } = useForm<IUserData>({mode: "onBlur"});

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
        resetField(name);
    }

    //값이 다 정상적으로 입력되었을 때 실행되는 함수
    const navigate = useNavigate();
    const onValid = (data: IUserData) => {
        console.log("성공");
        console.log(data);  
        navigate('/apply-time');      
    };

    //값이 다 비정상적으로 입력되었을 때 실행되는 함수
    const onError = (error:any) => {
        console.log(error);
    };

	return (
		<div>
            {/*Main(지원 정보 입력폼)*/}
            <I.ApplyForm onSubmit={handleSubmit(onValid, onError)}>

                <I.ApplyTitle>
                    <In.Ellipse2/>
                    <I.ApplyTitleText>지원자 이름</I.ApplyTitleText>
                </I.ApplyTitle>

                <L.LoginInputBox
                    toggle={watch("userName")?.length > 0 ? true: false || errors.userName ? true: false} 
                    color={errors.userName ? '#FF4A4A': '#606060'}                
                >
                    <L.LoginInput
                        id="userName"
                        type="text"
                        placeholder="이름을 입력해 주세요"
                        {...register("userName",{
                            required: true,
                            pattern: {
                                value: /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,10}$/,
                                message: ""
                            },
                        })}
                    />
                    {watch("userName")?.length > 0 && 
                        <L.InputCancelBtn 
                            src={process.env.PUBLIC_URL + '/images/inputCancelIcon.svg'}
                            onClick={e => removeInput("userName")}
                        />
                    }
                </L.LoginInputBox>

                <I.ApplyTitle>
                    <In.Ellipse2/>
                    <I.ApplyTitleText>지원자 전화번호</I.ApplyTitleText>
                </I.ApplyTitle>
                
                <L.LoginInputBox
                    toggle={watch("userPhone")?.length > 0 ? true: false || errors.userPhone ? true: false} 
                    color={errors.userPhone ? '#FF4A4A': '#606060'}                
                >
                    <L.LoginInput
                        id="userPhone"
                        type="text"
                        placeholder="010-0000-0000"
                        {...register("userPhone",{
                            required: true,
                            pattern: {
                                value: /^(010)-[0-9]{4}-[0-9]{4}$/,
                                message: "d"
                            },
                        })}
                    />
                    {watch("userPhone")?.length > 0 && 
                        <L.InputCancelBtn 
                            src={process.env.PUBLIC_URL + '/images/inputCancelIcon.svg'}
                            onClick={e => removeInput("userPhone")}
                        />
                    }
                </L.LoginInputBox>

                {/*비밀번호*/}
                <I.ApplyTitle>
                    <In.Ellipse2/>
                    <I.ApplyTitleText>비밀번호</I.ApplyTitleText>
                    <I.PwTxt>지원자 식별에 사용되며 재설정이 불가능합니다.</I.PwTxt>
                </I.ApplyTitle>
                
                <L.LoginInputBox
                    toggle={watch("userPw")?.length > 0 ? true: false || errors.userPw ? true: false} 
                    color={errors.userPw ? '#FF4A4A': '#606060'}                
                >
                    <L.LoginInput
                        id="userPw"
                        type="text"
                        placeholder="비밀번호를 입력해주세요"
                        {...register("userPw",{
                            required: true,
                            pattern: {
                                value:/^[a-z0-9#?!@$%^&*-](?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-])[a-z0-9#?!@$%^&*-]{8,20}$/,
                                message: "8~20자 영문, 숫자, 특수기호(_ @ ? !)"
                            },
                        })}
                    />
                    {watch("userPw")?.length > 0 && 
                        <L.InputCancelBtn 
                            src={process.env.PUBLIC_URL + '/images/inputCancelIcon.svg'}
                            onClick={e => removeInput("userPw")}
                        />
                    }
                </L.LoginInputBox>
                <S.ErrorMessage>
                    {watch("userPw")?.length === 0 && <S.HeplerText error={errors.userPw ? true : false}>8~20자 영문, 숫자, 특수기호(_ @ ? !)</S.HeplerText>}
                    <S.ErrorText error={errors.userPw ? true : false}>8~20자 영문, 숫자, 특수기호(_ @ ? !)</S.ErrorText>
                </S.ErrorMessage>

                {/*비밀번호 확인*/}
                <I.ApplyTitle>
                    <In.Ellipse2/>
                    <I.ApplyTitleText>비밀번호 확인</I.ApplyTitleText>
                </I.ApplyTitle>
                
                <L.LoginInputBox
                    toggle={watch("pwCheck")?.length > 0 ? true: false || errors.pwCheck ? true: false} 
                    color={errors.pwCheck ? '#FF4A4A': '#606060'}                
                >
                    <L.LoginInput
                        id="pwCheck"
                        type="text"
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
                    {watch("pwCheck")?.length > 0 && 
                        <L.InputCancelBtn 
                            src={process.env.PUBLIC_URL + '/images/inputCancelIcon.svg'}
                            onClick={e => removeInput("pwCheck")}
                        />
                    }
                </L.LoginInputBox>
                <S.ErrorMessage>
                    {watch("pwCheck")?.length === 0 && <S.HeplerText error={errors.pwCheck ? true : false}>비밀번호가 일치하지 않습니다</S.HeplerText>}
                    <S.ErrorText error={errors.pwCheck ? true : false}>{errors?.pwCheck?.message}</S.ErrorText>
                </S.ErrorMessage>

                <I.NextBtn type="submit" toggle={isActive}>
                    다음
                </I.NextBtn>
            </I.ApplyForm>

        </div>
	);
}

export default ApplyInfoForm;