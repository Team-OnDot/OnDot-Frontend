import { useNavigate } from 'react-router-dom';
import * as I from './ApplyTime.style';
import * as In from './InterviewApply.style';
import TimeTable from '../../components/interviewApply/InputTimeTable';

function InterviewApplyInputSchedule() {

	const navigate = useNavigate();

    //이전 버튼 클릭 시
    const onClickBackBtn = () => {
        navigate('/interview-apply-input-info');
    }
  
    //완료 버튼 클릭 시
    const onClickCompleteBtn = () => {
        navigate('/interview-apply-complete');
    }

	return (
		<div>
            {/*Header*/}
            <In.InputInfoHeader>
                <In.Ellipse1/>
                2024년 1월 1일 ~ 2024년 1월 5일
            </In.InputInfoHeader>
            <img src={process.env.PUBLIC_URL + '/images/lineCircleLong.svg'}/>
            <I.HeaderTxt>
                가능한 면접 시간을 클릭하여 선택해 주세요. 한 번 더 클릭하면 선택된 시간이 삭제됩니다.
            </I.HeaderTxt>

            {/*Main*/}
            <I.InputTimeMain>
                {/*PreBtn*/}
                <I.PreTimeBtn>
                    <img src={process.env.PUBLIC_URL + '/images/timePolygon.svg'}/>
                </I.PreTimeBtn>
                {/*TimeTable*/}
                <TimeTable/>
                {/*NextBtn*/}
                <I.NextTimeBtn>
                    <img src={process.env.PUBLIC_URL + '/images/timePolygon.svg'}/>
                </I.NextTimeBtn>
            </I.InputTimeMain>

             {/*Footer*/}
             <I.InputTimeFooter>
                <I.BackBtn onClick={onClickBackBtn}>이전</I.BackBtn>
                <I.CompleteBtn onClick={onClickCompleteBtn}>완료</I.CompleteBtn>
             </I.InputTimeFooter>
        </div>
	);
}

export default InterviewApplyInputSchedule;