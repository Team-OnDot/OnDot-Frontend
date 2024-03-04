import { useNavigate } from 'react-router-dom';
import * as I from './InterviewApplyComplete.style';
import { interviewApplyAtom } from '../../../recoil/interviewApplyAtom';
import { useRecoilState } from 'recoil';

function InterviewApplyComplete() {
	const navigate = useNavigate();
	const [interviewApply, setInterviewApply] = useRecoilState(interviewApplyAtom);
	
	const goInterviewPage = () => {
		navigate(`/interview-apply/${interviewApply.organizationId}/${interviewApply.interviewId}`);
	}

	const goProfilePage = () => {
		navigate(``);
	}
	return (
		<>
			{/*Main*/}
			<I.InterviewMain>
				<I.InterviewMainImg src={process.env.PUBLIC_URL + '/images/interviewPageGuestComplete.svg'} />
				<I.InterviewMainText>
					지원해주셔서 감사합니다.
					<br />
					면접에서 뵙겠습니다 :)
				</I.InterviewMainText>
				<I.ApplyBtnWrap>
					<I.EditBtn onClick={goInterviewPage}>면접 페이지 바로가기</I.EditBtn>
					<I.ProfileBtn onClick={goProfilePage}>프로필 페이지로 이동</I.ProfileBtn>
				</I.ApplyBtnWrap>
			</I.InterviewMain>
		</>
	);
}

export default InterviewApplyComplete;
