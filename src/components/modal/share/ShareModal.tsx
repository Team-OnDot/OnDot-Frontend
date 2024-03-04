import * as S from './ShareModal.style';

type ShareModal = {
	setIsOpen: (state: boolean) => void;
};

function ShareModal({ setIsOpen }: ShareModal) {
	return (
		<S.Background>
			<S.Box>
				<h2>클립보드에 복사가 완료되었습니다!</h2>
				<S.BtnWrapper>
					<S.BtnConfirm onClick={() => setIsOpen(false)}>완료</S.BtnConfirm>
				</S.BtnWrapper>
			</S.Box>
		</S.Background>
	);
}

export default ShareModal;
