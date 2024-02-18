import { useNavigate } from 'react-router-dom';
import * as In from './InterviewApplyEditInfoCheck.style';
import * as L from '../../../../components/login/LoginForm.style';
import * as I from '../../../../components/interviewApply/infoForm/InterviewApplyInfoForm.style';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';

type IUserData = {
	userName: string;
	userPw: string;
};

function InterviewApplyEditInfoCheck() {
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

	//값이 다 정상적으로 입력되었을 때 실행되는 함수
	const navigate = useNavigate();
	const onValid = (data: IUserData) => {
		console.log('성공');
		console.log(data);
		navigate('/edit-info');
	};

	//값이 다 비정상적으로 입력되었을 때 실행되는 함수
	const onError = (error: any) => {
		console.log(error);
	};

	return (
		<div>
			{/*Header*/}
			<In.InputInfoHeader>
				<In.Ellipse1 />
				지원 정보 수정
			</In.InputInfoHeader>
			<img src={process.env.PUBLIC_URL + '/images/lineCircle4853.svg'} />

			{/*Main(지원 정보 입력폼)*/}
			<I.ApplyForm onSubmit={handleSubmit(onValid, onError)}>
				<I.ApplyTitle>
					<In.Ellipse2 />
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

				{/*비밀번호*/}
				<I.ApplyTitle>
					<In.Ellipse2 />
					<I.ApplyTitleText>비밀번호</I.ApplyTitleText>
				</I.ApplyTitle>

				<L.LoginInputBox toggle={watch('userPw')?.length > 0 ? true : false || errors.userPw ? true : false} color={errors.userPw ? '#FF4A4A' : '#606060'}>
					<L.LoginInput
						id="userPw"
						type="password"
						placeholder="비밀번호를 입력해주세요"
						{...register('userPw', {
							required: true,
							pattern: {
								value: /^[a-z0-9#?!@$%^&*-](?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-])[a-z0-9#?!@$%^&*-]{8,20}$/,
								message: '8~20자 영문, 숫자, 특수기호(_ @ ? !)',
							},
						})}
					/>
					{watch('userPw')?.length > 0 && <L.InputCancelBtn src={process.env.PUBLIC_URL + '/images/inputCancelIcon.svg'} onClick={(e) => removeInput('userPw')} />}
				</L.LoginInputBox>
				<I.NextBtn type="submit" toggle={isActive}>
					다음
				</I.NextBtn>
			</I.ApplyForm>
		</div>
	);
}

export default InterviewApplyEditInfoCheck;
