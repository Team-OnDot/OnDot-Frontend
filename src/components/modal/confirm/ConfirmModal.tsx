import * as S from './ConfirmModal.style';

type ConfirmModal = {
	setIsOpen: (state: boolean) => void;
	confirmInterview: (interviewId: string) => void;
	interviewId: string;
};

function ConfirmModal({ setIsOpen, confirmInterview, interviewId }: ConfirmModal) {
	return (
		<S.Background>
			<S.Box>
				<h2>타임 테이블을 확정하시겠습니까?</h2>
				<p>확정한 타임테이블은 모든 지원자가 열람 가능하며, 수정이 불가합니다. 다시 한 번 확인 후 최종 확정해 주세요!</p>
				<S.BtnWrapper>
					<S.BtnCancel onClick={() => setIsOpen(false)}>취소</S.BtnCancel>
					<S.BtnConfirm onClick={() => confirmInterview(interviewId)}>확정</S.BtnConfirm>
				</S.BtnWrapper>
			</S.Box>
		</S.Background>
	);
}

export default ConfirmModal;
