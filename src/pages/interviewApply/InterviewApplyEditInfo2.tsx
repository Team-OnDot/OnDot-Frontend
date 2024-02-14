import * as In from './InterviewApply.style';
import ApplyInfoForm from '../../components/interviewApply/InfoForm/InterviewApplyInfoForm';

function InterviewApplyEditInfo2() {
	return (
		<div>
			{/*Header*/}
			<In.InputInfoHeader>
				<In.Ellipse1 />
				지원 정보 수정
			</In.InputInfoHeader>
			<img src={process.env.PUBLIC_URL + '/images/lineCircle4853.svg'} />

			{/*Main(지원 정보 입력폼)*/}
			<ApplyInfoForm />
		</div>
	);
}

export default InterviewApplyEditInfo2;
