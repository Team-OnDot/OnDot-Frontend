import { useNavigate } from 'react-router-dom';
import * as I from './InterviewApplyMain.style';

function InterviewApplyMain() {
	const navigate = useNavigate();

	//면접 지원하기 클릭 시
	const onClickApply = () => {
		navigate(`/interview-apply-input-info`);
	};

	//지원 정보 수정하기 클릭 시
	const onClickEdit = () => {
		navigate('/interview-apply-edit-info');
	};

	return (
		<>
			{/*Main*/}
			<I.InterviewMain>
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
