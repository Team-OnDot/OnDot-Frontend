import * as S from './InterviewPreview.style';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { deleteIdAtom, deleteNameAtom, interviewDelAtom } from '../../../recoil/modalAtoms';

export type Interview = {
	interviewId: number;
};

function InterviewPreview({ interviewId }: Interview) {
	const [interviewName, setInterview] = useState(''); //면접 제목
	const [interviewLocation, setInterviewLocation] = useState(''); //면접 장소
	const [interviewDate, setInterviewDate] = useState(''); //면접 기간
	const [applyDate, setApplyDate] = useState(''); //면접 기간
	const [interviewTime, setInterviewTime] = useState(''); //면접 진행 시간
	const [interviewCount, setInterviewCount] = useState(''); //면접 진행 방식

	//면접 조회 API연결
	useEffect(() => {
		axios({
			url: `/api/v1/interviews/${interviewId}`,
			method: 'get',
			params: {
				interviewId: interviewId,
			},
			headers: { Authorization: 'Bearer ' + sessionStorage.getItem('isLogin') },
		})
		.then((response) => {
			//console.log(response.data);
			setInterview(response.data.content.name);
			setApplyDate(`${format(response.data.content.applyStartDate, 'MM/dd')} ~ 
						${format(response.data.content.applyEndDate, 'MM/dd')}`);
			setInterviewDate(`${format(response.data.content.interviewStartDate, 'yyyy년 MM월 dd일')} ~ 
						${format(response.data.content.interviewEndDate, 'yyyy년 MM월 dd일')}`);
			setInterviewLocation(response.data.content.location);
			setInterviewTime(response.data.content.requiredTime);
			setInterviewCount(`${response.data.content.interviewerCount}:${response.data.content.applicantCount}`);
		})
		.catch((error) => {
			console.log('실패');
			console.error('AxiosError:', error);
		});
	}, []);

	//면접 페이지로 이동
	const navigate = useNavigate();
	const onClickInterview = (interviewId: number) => {
		navigate(`/timetable-progress/${interviewId}`);
	};

	//면접 삭제 모달창
	const [delModal, setDelModal] = useRecoilState(interviewDelAtom);
	const [delId, setDelId] = useRecoilState(deleteIdAtom); //삭제 면접 id
	const [delName, setDelName] = useRecoilState(deleteNameAtom); //삭제 면접 이름
	//면접 삭제 클릭 시
	const onClickDelete = (interviewId: number, interviewName:string) => {
		setDelModal(true);
		setDelId(interviewId);
		setDelName(interviewName);
	};

	return (
		<S.PreviewContainer>
			<S.PreviewBox onClick={() => onClickInterview(interviewId)}>
				<S.PreviewWrap>
					<S.PreviewTitle>{interviewName}</S.PreviewTitle>
					<S.PreviewDate>{applyDate}</S.PreviewDate>
				</S.PreviewWrap>
				<S.PreviewText>
					<img src={process.env.PUBLIC_URL + '/images/iconDate.svg'} />
					{interviewDate}
				</S.PreviewText>
				<S.PreviewText>
					<img src={process.env.PUBLIC_URL + '/images/iconTime.svg'} />
					{interviewTime}분
				</S.PreviewText>
				<S.PreviewText>
					<img src={process.env.PUBLIC_URL + '/images/iconFormat.svg'} />
					{interviewCount} 면접
				</S.PreviewText>
				<S.PreviewText>
					<img src={process.env.PUBLIC_URL + '/images/iconPlace.svg'} />
					{interviewLocation}
				</S.PreviewText>
			</S.PreviewBox>
			<S.BtnBox>
				<S.InterviewPreIcon src={process.env.PUBLIC_URL + '/images/interviewDeleteIcon.svg'}
									onClick={() => onClickDelete(interviewId, interviewName)} />
				<S.InterviewPreIcon src={process.env.PUBLIC_URL + '/images/interviewShareIcon.svg'}/>
			</S.BtnBox>
		</S.PreviewContainer>
	);
}

export default InterviewPreview;
