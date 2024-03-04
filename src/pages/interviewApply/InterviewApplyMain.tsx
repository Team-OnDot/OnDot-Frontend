import { useNavigate, useParams } from 'react-router-dom';
import * as I from './InterviewApplyMain.style';
import { interviewApplyAtom } from '../../recoil/interviewApplyAtom';
import { useRecoilState } from 'recoil';

function InterviewApplyMain() {
	const navigate = useNavigate();
	const [interviewApply, setInterviewApply] = useRecoilState(interviewApplyAtom);
	const { organizationId, interviewId } = useParams();

	//면접 지원하기 클릭 시
	const onClickApply = () => {
		if (organizationId !== undefined && interviewId !== undefined) {
			setInterviewApply({
				organizationId: organizationId,
				interviewId: interviewId,
				applyName: interviewApply.applyName,
				applyPhone: interviewApply.applyPhone,
				applyEmail: interviewApply.applyEmail,
			});
			navigate('/interview-apply-input-info');
		}
	};

	//지원 정보 수정하기 클릭 시
	const onClickEdit = () => {
		if (organizationId !== undefined && interviewId !== undefined) {
			setInterviewApply({
				organizationId: organizationId,
				interviewId: interviewId,
				applyName: interviewApply.applyName,
				applyPhone: interviewApply.applyPhone,
				applyEmail: interviewApply.applyEmail,
			});
			navigate('/interview-apply-edit-info');
		}
	};

	return (
		<>
			{/*Main*/}
			<I.InterviewMain>
				<I.InterviewMainImg src={process.env.PUBLIC_URL + '/images/interviewPageGuest.svg'} />
				<I.InterviewMainText>
					안녕하세요!
					<br />
					온닷 1기 운영진 면접 페이지입니다 :)
				</I.InterviewMainText>
				<I.ApplyBtnWrap>
					<I.ApplyBtn onClick={onClickApply}>면접 지원하기</I.ApplyBtn>
					<I.EditBtn onClick={onClickEdit}>지원 정보 수정하기</I.EditBtn>
				</I.ApplyBtnWrap>
			</I.InterviewMain>
		</>
	);
}

export default InterviewApplyMain;
