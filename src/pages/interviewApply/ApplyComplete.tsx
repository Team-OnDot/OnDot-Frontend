import * as I from './InterviewApply.style';

function ApplyComplete() {

	return (
		<div>
            {/*Main*/}
			<I.InterviewMain>
				<I.InterviewMainText>
					지원해주셔서 감사합니다.<br/>
					면접에서 뵙겠습니다 :)
				</I.InterviewMainText>
				<I.ApplyBtnWrap>
					<I.EditBtn>면접 페이지 바로가기</I.EditBtn>
                    <I.ProfileBtn>프로필 페이지로 이동</I.ProfileBtn>
				</I.ApplyBtnWrap>
			</I.InterviewMain>
        </div>
	);
}

export default ApplyComplete;