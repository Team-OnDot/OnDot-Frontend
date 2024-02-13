import * as S from '../groupProfile/GroupInfo.style';
import * as I from './InterviewApply.style';
import InterviewInfo from './InterviewInfo';
import { useNavigate } from 'react-router-dom';

function InterviewSide() {

	const navigate = useNavigate();

	//설정 클릭
	const onClickSetting = () => {
		navigate(`/`);
	};

	//로그아웃 클릭
	const onClickLogout = () => {
		navigate(`/`);
	};

	return (
		<S.GroupContainer>
			<S.GroupImg src={process.env.PUBLIC_URL + '/images/profileImg.svg'}/>
			<S.GroupName>온닷</S.GroupName>
			<S.GroupType>동아리</S.GroupType>
			<S.GroupLink>
				<img src={process.env.PUBLIC_URL + '/images/iconLink.svg'}/>
				Ondot.co.kr.ondot2024
			</S.GroupLink>

			{/*면접정보*/}
			<InterviewInfo/>

			{/*면접안내*/}
			<img src={process.env.PUBLIC_URL + '/images/lineCircle.svg'}/>
			<I.InterviewGuideBox>
				<I.InterviewGuideTitle>면접 안내</I.InterviewGuideTitle>
				<I.InterviewGuideText>
					면접은 일대일로 이루어지며 25분 가량 소요됩니다. 
					당일 지각은 면접 취소로 처리되며 면접 시간에 맞춰 오시길 당부 드립니다.
				</I.InterviewGuideText>
			</I.InterviewGuideBox>
			<img src={process.env.PUBLIC_URL + '/images/lineCircle.svg'}/>

			{/*contact 정보*/}
			<I.ContactBox>
				<I.ContactIcon src={process.env.PUBLIC_URL + '/images/iconContact.svg'}/>
				<I.ContactTextBox>
					<I.ContactText>회장 김회장 010-0000-0000</I.ContactText>
					<I.ContactText>이메일 Ondot@gmail.com</I.ContactText>
					<I.ContactText>instagram @on.dot</I.ContactText>
				</I.ContactTextBox>
			</I.ContactBox>
			<img src={process.env.PUBLIC_URL + '/images/lineCircle.svg'}/>
		</S.GroupContainer>
	);
}

export default InterviewSide;