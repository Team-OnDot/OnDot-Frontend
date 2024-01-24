import { useState } from 'react';
import * as S from './GroupInfo.style';
import { useNavigate } from 'react-router-dom';

function GroupInfo() {
	const [groupName, setGroupName] = useState('온닷');
	const [groupType, setGroupType] = useState('동아리');
	const [groupLink, setGroupLink] = useState('Ondot.co.kr');
	const [groupText, setGroupText] = useState('안녕하세요. 온닷입니다.');
	const [groupContact, setGroupContact] = useState('ondot@gmail.com');

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
			<S.GroupName>{groupName}</S.GroupName>
			<S.GroupType>{groupType}</S.GroupType>
			<S.GroupLink>
				<img src={process.env.PUBLIC_URL + '/images/iconLink.svg'}/>
				{groupLink}
			</S.GroupLink>
			<S.GroupText>{groupText}</S.GroupText>
			<S.GroupContact>
				<img src={process.env.PUBLIC_URL + '/images/iconContact.svg'}/>
				{groupContact}
			</S.GroupContact>
			<S.IconWrap onClick={onClickSetting}>
				<S.Icon onClick={onClickSetting}>
					<img src={process.env.PUBLIC_URL + '/images/iconSetting.svg'}/>설정
				</S.Icon>
				<img src={process.env.PUBLIC_URL + '/images/lineCircle.svg'}/>
				<S.Icon onClick={onClickLogout}>
					<img src={process.env.PUBLIC_URL + '/images/iconLogout.svg'}/>로그아웃
				</S.Icon>
			</S.IconWrap>
		</S.GroupContainer>
	);
}

export default GroupInfo;