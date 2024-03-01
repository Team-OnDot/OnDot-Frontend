import * as S from './InterviewDelModal.style';

function InterviewDelModal() {
    return(
        <>
            <S.DeleteBox>
				<h2>[온닷 1기 운영진 모집] 페이지를 삭제하시겠습니까?</h2>
				<p>면접 페이지 삭제 시 복구가 불가합니다.</p>
                <p>정말 삭제하시겠습니까?</p>
				<S.BtnWrapper>
					<S.BtnCancel>취소</S.BtnCancel>
					<S.BtnDelete>삭제</S.BtnDelete>
				</S.BtnWrapper>
            </S.DeleteBox>
        </>
    );
}
export default InterviewDelModal;