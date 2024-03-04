import { useNavigate, useParams } from 'react-router-dom';
import * as I from './InterviewApplyInfoForm.style';
import * as L from '../../login/LoginForm.style';
import * as S from '../../signUp/signupId/SignUpForm.style';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { interviewApplyAtom } from '../../../recoil/interviewApplyAtom';

type IUserData = {
	userName: string;
	userPhone: string;
	userEmail: string;
	userAuth: string;
};

function ApplyInfoForm() {
	const [ authNumber, setAuthNumber ] = useState('');
	const [interviewApply, setInterviewApply] = useRecoilState(interviewApplyAtom);
	
	const {
		register,
		handleSubmit,
		watch,
		setError,
		resetField,
		clearErrors,
		getValues,
		formState: { errors },
	} = useForm<IUserData>({ mode: 'onBlur' });

	//인증번호 일치 확인
	useEffect(() => {
		if (watch('userAuth') !== authNumber && watch('userAuth')) {
			setError('userAuth', {
				type: 'auth-mismatch',
				message: '인증번호가 일치하지 않습니다',
			});
		} else {
			// 비밀번호 일치시 오류 제거
			clearErrors('userAuth');
		}
	}, [watch('userAuth')]);

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
	const removeInput = (name: any) => {
		resetField(name);
	};

	// 인증번호 전송 버튼
	const onAuth = () => {
		// API 연결
		axios({
			url: `/api/v1/auth/email`,
			method: 'get',
			params: {
				email: watch('userEmail'),
			},
		})
		.then((response) => {
			console.log(response.data);
			setAuthNumber(response.data.content);
		})
		.catch((error) => {
			console.log('실패');
			console.error('AxiosError:', error);
		});
		
	};

	//값이 다 정상적으로 입력되었을 때 실행되는 함수
	const navigate = useNavigate();
	const onValid = (data: IUserData) => {
		console.log('성공');
		console.log(data);

		// API 연결
		axios({
			url: `/api/v1/interviews/${interviewApply.interviewId}/applicants/signin`,
			method: 'post',
			data: {
				name: data.userName,
				email: data.userEmail,
				phone: data.userPhone
			},
		})
		.then((response) => {
			setInterviewApply({
				organizationId: interviewApply.organizationId,
				interviewId: interviewApply.interviewId,
				applyName: data.userName,
				applyPhone: data.userPhone,
				applyEmail: data.userEmail,
			});
			navigate('/interview-apply-input-schedule');
		})
		.catch((error) => {
			console.log('실패');
			console.error('AxiosError:', error);
		});
		
	};

	//값이 다 비정상적으로 입력되었을 때 실행되는 함수
	const onError = (error: any) => {
		console.log(error);
	};

	return (
		<div>
			{/*Main(지원 정보 입력폼)*/}
			<I.ApplyForm onSubmit={handleSubmit(onValid, onError)}>
				<I.ApplyTitle>
					<I.Ellipse2 />
					<I.ApplyTitleText>지원자 이름</I.ApplyTitleText>
				</I.ApplyTitle>

				<L.LoginInputBox toggle={watch('userName')?.length > 0 ? true : false || errors.userName ? true : false} color={errors.userName ? '#FF4A4A' : '#606060'}>
					<L.LoginInput
						id="userName"
						type="text"
						placeholder="이름을 입력해 주세요"
						{...register('userName', {
							required: true,
							pattern: {
								value: /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,10}$/,
								message: '',
							},
						})}
					/>
					{watch('userName')?.length > 0 && <L.InputCancelBtn src={process.env.PUBLIC_URL + '/images/inputCancelIcon.svg'} onClick={(e) => removeInput('userName')} />}
				</L.LoginInputBox>

				<I.ApplyTitle>
					<I.Ellipse2 />
					<I.ApplyTitleText>지원자 전화번호</I.ApplyTitleText>
				</I.ApplyTitle>

				<L.LoginInputBox toggle={watch('userPhone')?.length > 0 ? true : false || errors.userPhone ? true : false} color={errors.userPhone ? '#FF4A4A' : '#606060'}>
					<L.LoginInput
						id="userPhone"
						type="text"
						placeholder="010-0000-0000"
						{...register('userPhone', {
							required: true,
							pattern: {
								value: /^(010)-[0-9]{4}-[0-9]{4}$/,
								message: 'd',
							},
						})}
					/>
					{watch('userPhone')?.length > 0 && <L.InputCancelBtn src={process.env.PUBLIC_URL + '/images/inputCancelIcon.svg'} onClick={(e) => removeInput('userPhone')} />}
				</L.LoginInputBox>

				{/*이메일*/}
				<I.ApplyTitle>
					<I.Ellipse2 />
					<I.ApplyTitleText>이메일</I.ApplyTitleText>
					<I.PwTxt>지원자 식별에 사용되며 재설정이 불가능합니다.</I.PwTxt>
				</I.ApplyTitle>

				<I.InputContainer>
					<L.LoginInputBox toggle={watch('userEmail')?.length > 0 ? true : false || errors.userEmail ? true : false} color={errors.userEmail ? '#FF4A4A' : '#606060'}>
						<L.LoginInput
							id="userEmail"
							type="text"
							placeholder="이메일를 입력해주세요"
							{...register('userEmail', {
								required: true,
								pattern: {
									value: /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/,
									message: "ex. ondot@email.com"
								},
							})}
						/>
						{watch('userEmail')?.length > 0 && <L.InputCancelBtn src={process.env.PUBLIC_URL + '/images/inputCancelIcon.svg'} onClick={(e) => removeInput('userEmail')} />}
					</L.LoginInputBox>
					<I.AuthBtn toggle={watch('userEmail')?.length > 0 ? true : false || errors.userEmail ? true : false} onClick={onAuth}>
						인증번호 전송
					</I.AuthBtn>
				</I.InputContainer>
				<S.ErrorMessage>
					{/* {watch('userEmail')?.length === 0 && <S.HeplerText error={errors.userEmail ? true : false}>8~20자 영문, 숫자, 특수기호(_ @ ? !)</S.HeplerText>}
					<S.ErrorText error={errors.userEmail ? true : false}>8~20자 영문, 숫자, 특수기호(_ @ ? !)</S.ErrorText> */}
				</S.ErrorMessage>

				{/*비밀번호 확인*/}
				<I.ApplyTitle>
					<I.Ellipse2 />
					<I.ApplyTitleText>인증번호</I.ApplyTitleText>
				</I.ApplyTitle>

				<L.LoginInputBox toggle={watch('userAuth')?.length > 0 ? true : false || errors.userAuth ? true : false} color={errors.userAuth ? '#FF4A4A' : '#606060'}>
					<L.LoginInput
						id="userAuth"
						type="password"
						placeholder="인증번호를 입력해 주세요"
						{...register('userAuth', {
							required: true,
							// validate: {
							// 	matchAuth: (value) => {
							// 		const { authNumber } = getValues();
							// 		return authNumber === value || '비밀번호가 일치하지 않습니다';
							// 	},
							// },
						})}
					/>
					{watch('userAuth')?.length > 0 && <L.InputCancelBtn src={process.env.PUBLIC_URL + '/images/inputCancelIcon.svg'} onClick={(e) => removeInput('userAuth')} />}
				</L.LoginInputBox>
				<S.ErrorMessage>
					{watch('userAuth')?.length === 0 && <S.HeplerText error={errors.userAuth ? true : false}>인증번호가 일치하지 않습니다</S.HeplerText>}
					<S.ErrorText error={errors.userAuth ? true : false}>{errors?.userAuth?.message}</S.ErrorText>
				</S.ErrorMessage>

				<I.NextBtn type="submit" toggle={isActive}>
					다음
				</I.NextBtn>
			</I.ApplyForm>
		</div>
	);
}

export default ApplyInfoForm;
