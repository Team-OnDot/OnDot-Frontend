import { Outlet } from 'react-router-dom';
import GroupProfileSide from './side/GroupProfileSide';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
`;

function GroupProfile() {
	return (
		<Wrapper>
			<GroupProfileSide />
			<Outlet></Outlet>
		</Wrapper>
	);
}

export default GroupProfile;
