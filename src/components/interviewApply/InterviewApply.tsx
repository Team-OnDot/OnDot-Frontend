import { useNavigate } from 'react-router-dom';
import InterviewApplySide from './side/InterviewApplySide';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

function InterviewApply() {
	const navigate = useNavigate();

	const InterviewComponent = styled.div`
		display: flex;
	`;

	return (
		<InterviewComponent>
			<InterviewApplySide />
			<Outlet></Outlet>
		</InterviewComponent>
	);
}

export default InterviewApply;
