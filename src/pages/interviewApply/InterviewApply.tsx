import { useNavigate } from 'react-router-dom';
import * as I from './InterviewApply.style';
import InterviewSide from '../../components/interviewApply/InterviewApplySide';
import { Outlet } from "react-router-dom";

function Interview() {

	const navigate = useNavigate();

	return (
		<I.InterviewComponent>
			<InterviewSide/>
			<Outlet></Outlet>
		</I.InterviewComponent>
	);
}

export default Interview;