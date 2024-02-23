import { useNavigate } from 'react-router-dom';
import * as S from './GroupProfileMain.style';
import InterviewPreview from '../../components/interviewPreview/InterviewPreview';
import * as I from '../../components/interviewPreview/InterviewPreview';
import { useEffect } from 'react';
import axios from 'axios';

function GroupProfileMain() {
	const interviews: I.Interview[] = [
		{
			title: '제목',
			date: '12/20 ~ 12/23',
			time: '시간',
			format: '형태',
			place: '장소',
		},
		{
			title: '제목2',
			date: '날짜',
			time: '시간',
			format: '형태',
			place: '장소',
		},
		{
			title: '제목3',
			date: '날짜',
			time: '시간',
			format: '형태',
			place: '장소',
		},
	];

	const navigate = useNavigate();

	const onClickCreateInterview = () => {
		navigate('/interview-make-1');
	};

	//면접 조회 API
	useEffect(() => {
        axios({
            url: `/api/v1/interviews/11`,
            method: 'get',
            params: {
                interviewId: 11
            },
			headers: {Authorization: "Bearer " + localStorage.getItem('isLogin'),},
          }).then((response) => {
			console.log(response.data);
            
          }).catch((error) => {
            console.log("실패");  
            console.error('AxiosError:', error);
        });
    }, []);

	return (
		<>
			<S.InterviewsZone>
				<S.NavWrap>
					<S.NavText>
						<S.NavCircle />
						면접 페이지
						<img src={process.env.PUBLIC_URL + '/images/lineCircleShort.svg'} />
					</S.NavText>
					<S.CreateInterviewBtn onClick={onClickCreateInterview} />
				</S.NavWrap>
				<S.InterviewComponentsZone>
					{interviews.length ? (
						interviews.map((interview, index) => {
							return <InterviewPreview {...interview} />;
						})
					) : (
						<S.InterviewNull>진행중인 면접이 없습니다.</S.InterviewNull>
					)}
				</S.InterviewComponentsZone>
			</S.InterviewsZone>
		</>
	);
}

export default GroupProfileMain;
