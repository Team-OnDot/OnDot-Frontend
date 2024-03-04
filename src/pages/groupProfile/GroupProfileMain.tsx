import { useNavigate } from 'react-router-dom';
import * as S from './GroupProfileMain.style';
import InterviewPreview from '../../components/interviewPreview/InterviewPreview';
import { useRecoilValue } from 'recoil';
import { groupInfoAtom } from '../../recoil/groupAtoms';

function GroupProfileMain() {
	const navigate = useNavigate();

	//만들기 버튼 클릭 시
	const onClickCreateInterview = () => {
		navigate('/interview-make-1');
	};

	//그룹별 interviewId 조회
	const groupInfo = useRecoilValue(groupInfoAtom);
	const interviewList = groupInfo.interviews;

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
