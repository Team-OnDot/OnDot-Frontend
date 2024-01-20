import * as S from './header.style';
import { Outlet } from "react-router-dom";

function header() {
	return (
		<>
			<S.headerDiv>
			</S.headerDiv>
			<Outlet/>
		</>
	);
}

export default header;