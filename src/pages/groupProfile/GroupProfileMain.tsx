import { useNavigate } from 'react-router-dom';
import * as S from './GroupProfileMain.style';
import InterviewPreview from '../../components/interviewPreview/interviewPreview/InterviewPreview';
import InterviewDelModal from '../../components/interviewPreview/interviewDelete/InterviewDelModal';
import { useRecoilValue } from 'recoil';
import { groupInfoAtom } from '../../recoil/groupAtoms';
import { interviewDelAtom } from '../../recoil/modalAtoms';
import { useEffect, useState } from 'react';
import axios from 'axios';

function GroupProfileMain() {
	const navigate = useNavigate();

	//만들기 버튼 클릭 시
	const onClickCreateInterview = () => {
		navigate('/interview-make-1');
	};

	//그룹별 interviewId 조회
	const groupInfo = useRecoilValue(groupInfoAtom);
	const interviewList = groupInfo.interviews;
	const [interview, setInterview] = useState<number[]>([]);

	//삭제 모달창 상태 조회
	const delModalState = useRecoilValue(interviewDelAtom);

	//면접 조회 API연결
	useEffect(() => {
		console.log(interviewList);
		const fetchData = async () => {
			for (let i = 0; i < groupInfo.interviews.length; i++) {
				try {
					const response = await axios.get(`/api/v1/interviews/${interviewList[i]}`, {
						params: {
							interviewId: interviewList[i],
						},
						headers: { Authorization: 'Bearer ' + sessionStorage.getItem('isLogin') },
					});
	
					// 삭제되지 않은 면접만 값 출력
					if (response.data.content.interviewStatus === 'SCHEDULED') {
						setInterview(prevState => [...prevState, interviewList[i]]);
					}
				} catch (error) {
					console.error('AxiosError:', error);
				}
			}
		};
	
		fetchData();
	}, []);
	return (
		<>
			<S.InterviewsZone>
				<S.NavWrap>
					<S.NavTextBox>
						<S.NavText>면접 페이지</S.NavText>
						<img src={process.env.PUBLIC_URL + '/images/lineCircleShort.svg'} />
					</S.NavTextBox>
					<S.CreateInterviewBtn onClick={onClickCreateInterview} />
				</S.NavWrap>

				{/*면접 삭제 모달*/}
				{delModalState ? (
					<S.DeleteMain>
						<InterviewDelModal/>
					</S.DeleteMain>): null}

				{/*면접 리스트 출력*/}
				<S.InterviewComponentsZone>
					{interview.length ? (
						interview.map((interviewId) => {
							return <InterviewPreview key={interviewId} interviewId={interviewId} />;
						})
					) : (
						<S.InterviewNull>
							<S.NullIconBox>
								<S.NullIcon3 />
								<S.NullIcon2 />
								<S.NullIcon1 />
							</S.NullIconBox>
							진행중인 면접이 없습니다
							<S.NullIconBox>
								<S.NullIcon1 />
								<S.NullIcon2 />
								<S.NullIcon3 />
							</S.NullIconBox>
						</S.InterviewNull>
					)}
				</S.InterviewComponentsZone>
			</S.InterviewsZone>
		</>
	);
}

export default GroupProfileMain;
