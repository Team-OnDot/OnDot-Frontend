import { useNavigate } from 'react-router-dom';
import * as I from './InterviewApply.style';
import InterviewApplySide from '../../components/interviewApply/side/InterviewApplySide';
import { Outlet } from 'react-router-dom';

function InterviewApply() {
	const navigate = useNavigate();

	return (
		<I.InterviewComponent>
			<InterviewApplySide />
			<Outlet></Outlet>
		</I.InterviewComponent>
	);
}

export default InterviewApply;
