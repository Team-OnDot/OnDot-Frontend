import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { interviewMakeAtom, selectedDatesAtom, scheduleAtom } from './../../recoil/interviewMakeAtom';
import {} from '../../recoil/interviewMakeAtom';
import * as S from './InterviewMake3.style';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import axios from 'axios';
import { format } from 'date-fns';

type MemoData = {
	interviewMemo: string;
};

function InterviewMake3() {
	const interviewInfo = useRecoilState(interviewMakeAtom);

	const regExpMemo = /^.{0,180}$/;

	const navigate = useNavigate();
	const {
		register,
		watch,
		handleSubmit,
		formState: { errors },
	} = useForm<MemoData>({
		mode: 'onChange', // 변경
		defaultValues: {},
	});

	//다음 클릭 시(API 연결)
	const selectedDates = useRecoilValue(selectedDatesAtom);
	const selectedTimes = useRecoilValue(scheduleAtom);
	const scheduleAtomReset = useResetRecoilState(scheduleAtom);
	const accessToken = sessionStorage.getItem('isLogin');

	const onValid = (data: MemoData) => {
		//시간 string으로 변환
		const time = [];
		for (let i = 0; i < selectedTimes.length; i++) {
			time[i] = format(selectedTimes[i], "yyyy-MM-dd'T'HH:mm:ss");
		}

		// API 연결
		axios({
			url: '/api/v1/interviews',
			method: 'post',
			data: {
				name: interviewInfo[0].interviewName,
				description: data.interviewMemo,
				applyStartDate: interviewInfo[0].startDate,
				applyEndDate: interviewInfo[0].endDate,
				requiredTime: interviewInfo[0].timeType,
				interviewerCount: interviewInfo[0].format1,
				applicantCount: interviewInfo[0].format2,
				location: interviewInfo[0].interviewPlace,
				dates: selectedDates,
				dateTimes: time,
			},
			headers: { Authorization: 'Bearer ' + accessToken },
		})
			.then((response) => {
				scheduleAtomReset();
				navigate('/interview-make-complete');
			})
			.catch((error) => {
				console.log('실패');
				console.error('AxiosError:', error);
			});
	};

	//이전 버튼 클릭 시
	const onClickPreBtn = () => {
		navigate('/interview-make-2');
	};

	return (
		<S.MakeContainer onSubmit={handleSubmit(onValid)}>
			<img src={process.env.PUBLIC_URL + '/images/iconPage3_3.svg'} />
			<S.MainText>
				면접 페이지 만들기
				<S.MainTextCircle />
			</S.MainText>
			<S.MakeTextContainer>
				<S.MakeTextCircle />
				<S.MakeText>면접 안내 문구</S.MakeText>
			</S.MakeTextContainer>
			<S.MakeInputBox toggle={watch('interviewMemo')?.length > 0 ? true : false}>
				<S.MakeInput placeholder="180자 이내로 입력해주세요" id="interviewMemo" {...register('interviewMemo', { required: true, pattern: regExpMemo })} />
			</S.MakeInputBox>
			<S.MakeBtnContainer>
				<S.MakeBtn type="button" value="이전" onClick={onClickPreBtn} />
				<S.MakeBtn type="submit" value="다음" />
			</S.MakeBtnContainer>
		</S.MakeContainer>
	);
}

export default InterviewMake3;
