import { useNavigate } from 'react-router-dom';
import * as S from './GroupProfileMain.style';
import InterviewPreview from '../../components/interviewPreview/InterviewPreview';
import * as I from '../../components/interviewPreview/InterviewPreview';
import { useEffect } from 'react';
import axios from 'axios';

function GroupProfileMain() {
	const interviews: I.Interview[] = [

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

			for(let i = 0; i < 1; i++){
				interviews[i].title = response.data.content.name
			}
			console.log(interviews[0].title)
            
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
						<S.InterviewNull>
							<S.NullIconBox><S.NullIcon3/><S.NullIcon2/><S.NullIcon1/></S.NullIconBox>
							진행중인 면접이 없습니다
							<S.NullIconBox><S.NullIcon1/><S.NullIcon2/><S.NullIcon3/></S.NullIconBox>
						</S.InterviewNull>
					)}
				</S.InterviewComponentsZone>
			</S.InterviewsZone>
		</>
	);
}

export default GroupProfileMain;
