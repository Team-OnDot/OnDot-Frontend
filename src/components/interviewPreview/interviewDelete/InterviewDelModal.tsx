import { useRecoilState, useRecoilValue } from 'recoil';
import * as S from './InterviewDelModal.style';
import { deleteIdAtom, deleteNameAtom, interviewDelAtom } from '../../../recoil/modalAtoms';
import axios from 'axios';

function InterviewDelModal() {

    //면접 삭제 모달창
	const [delModal, setDelModal] = useRecoilState(interviewDelAtom);
    const interviewId = useRecoilValue(deleteIdAtom); //삭제할 면접 id
    const interviewName = useRecoilValue(deleteNameAtom); //삭제할 면접 이름

    const onClickDeleteBtn = () => {
        axios({
			url: `/api/v1/interviews/${interviewId}`,
			method: 'patch',
			params: {
				interviewId: interviewId,
			},
			headers: { Authorization: 'Bearer ' + sessionStorage.getItem('isLogin') },
		})
        .then((response) => {
            console.log(response.data);
            setDelModal(false);
            //window.location.reload();
        })
        .catch((error) => {
            console.log('실패');
            console.error('AxiosError:', error);
        });
    }

    return(
        <>
            <S.DeleteBox>
				<h2>[{interviewName}] 페이지를 삭제하시겠습니까?</h2>
				<p>면접 페이지 삭제 시 복구가 불가합니다.</p>
                <p>정말 삭제하시겠습니까?</p>
				<S.BtnWrapper>
					<S.BtnCancel onClick={() => setDelModal(false)}>취소</S.BtnCancel>
					<S.BtnDelete onClick={onClickDeleteBtn}>삭제</S.BtnDelete>
				</S.BtnWrapper>
            </S.DeleteBox>
        </>
    );
}
export default InterviewDelModal;