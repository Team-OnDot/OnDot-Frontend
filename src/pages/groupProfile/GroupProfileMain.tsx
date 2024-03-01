import { useNavigate } from 'react-router-dom';
import * as S from './GroupProfileMain.style';
import InterviewPreview from '../../components/interviewPreview/interviewPreview/InterviewPreview';
import InterviewDelModal from '../../components/interviewPreview/interviewDelete/InterviewDelModal';
import { useRecoilValue } from 'recoil';
import { groupInfoAtom } from '../../recoil/groupAtoms';
import { interviewDelAtom } from '../../recoil/modalAtoms';

function GroupProfileMain() {
	const navigate = useNavigate();

	//만들기 버튼 클릭 시
	const onClickCreateInterview = () => {
		navigate('/interview-make-1');
	};

	//그룹별 interviewId 조회
	const groupInfo = useRecoilValue(groupInfoAtom);
	const interviewList = groupInfo.interviews;

	//삭제 모달창 상태 조회
	const delModalState = useRecoilValue(interviewDelAtom);

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

				{/*면접 삭제 모달*/}
				{delModalState ? (
					<S.DeleteMain>
						<InterviewDelModal/>
					</S.DeleteMain>): null}

				{/*면접 리스트 출력*/}
				<S.InterviewComponentsZone>
					{interviewList.length ? (
						interviewList.map((interviewId) => {
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
