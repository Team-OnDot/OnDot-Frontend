import { useNavigate } from 'react-router-dom';
import * as I from './InterviewApply.style';

function InterviewYet() {

	const navigate = useNavigate();

	//회원가입 클릭 시
	const onClickProfile = () => {
		//navigate(`/apply-info`);
	};

	return (
		<>	
            {/*Main*/}
			<I.InterviewMain>
				<I.InterviewMainText>
					아직 지원기간이 아닙니다!
				</I.InterviewMainText>
				<I.ApplyBtnWrap>
					<I.ApplyBtn onClick={onClickProfile}>프로필 페이지로 이동</I.ApplyBtn>
				</I.ApplyBtnWrap>
			</I.InterviewMain>
		</>
	);
}

export default InterviewYet;