import * as S from './InterviewPreview.style';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { format } from 'date-fns';

export type Interview = {
	interviewId: number;
};

function InterviewPreview(I: Interview) {

	const [interviewName, setInterview] = useState(''); //면접 제목
	const [interviewLocation, setInterviewLocation] = useState(''); //면접 장소
	const [interviewDate, setInterviewDate] = useState(''); //면접 기간
	const [applyDate, setApplyDate] = useState(''); //면접 기간
	const [interviewTime, setInterviewTime] = useState('') //면접 진행 시간
	const [interviewCount, setInterviewCount] = useState('') //면접 진행 방식

	useEffect(() => {
		axios({
			url: `/api/v1/interviews/${I.interviewId}`,
			method: 'get',
			params: {
				interviewId: I.interviewId
			},
			headers: { Authorization: "Bearer " + localStorage.getItem('isLogin') },
          }).then((response) => {
			console.log(response.data);
			setInterview(response.data.content.name);
			setApplyDate(`${format(response.data.content.applyStartDate, "MM/dd")} ~ 
							${format(response.data.content.applyEndDate, "MM/dd")}`);
			setInterviewDate(`${format(response.data.content.interviewStartDate, "yyyy년 MM월 dd일")} ~ 
							${format(response.data.content.interviewEndDate, "yyyy년 MM월 dd일")}`);
			setInterviewLocation(response.data.content.location);
			setInterviewTime(response.data.content.requiredTime);
			setInterviewCount(`${response.data.content.interviewerCount}:${response.data.content.applicantCount}`)
			
          }).catch((error) => {
            console.log("실패");  
            console.error('AxiosError:', error);
        });
		
    }, []);

	return (
		<S.PreviewContainer>
			<S.PreviewWrap>
				<S.PreviewTitle>{interviewName}</S.PreviewTitle>
				<S.PreviewDate>{applyDate}</S.PreviewDate>
			</S.PreviewWrap>
			<S.PreviewText>
				<img src={process.env.PUBLIC_URL + '/images/iconDate.svg'}/>
				{interviewDate}
			</S.PreviewText>
			<S.PreviewText>
				<img src={process.env.PUBLIC_URL + '/images/iconTime.svg'}/>
				{interviewTime}분
			</S.PreviewText>
			<S.PreviewText>
				<img src={process.env.PUBLIC_URL + '/images/iconFormat.svg'}/>
				{interviewCount} 면접
			</S.PreviewText>
			<S.PreviewText>
				<img src={process.env.PUBLIC_URL + '/images/iconPlace.svg'}/>
				{interviewLocation}
			</S.PreviewText>
			<S.PreviewShare>공유</S.PreviewShare>
		</S.PreviewContainer>
	);
}

export default InterviewPreview;