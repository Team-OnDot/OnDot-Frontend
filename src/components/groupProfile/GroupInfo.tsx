import { useState } from 'react';
import * as S from './GroupInfo.style';
import { useNavigate } from 'react-router-dom';

export type Group = {
	name: String,
	type: String,
	link: String,
	text: String,
	contact: String
}

function GroupInfo(group: Group) {

	const navigate = useNavigate();

	//설정 클릭
	const onClickSetting = () => {
		navigate('/group-profile-setting');
	}

	//로그아웃 클릭
	const onClickLogout = () => {
		navigate(`/`);
	};

	return (
		<S.GroupContainer>
			<S.GroupImg src={process.env.PUBLIC_URL + '/images/profileImg.svg'}/>
			<S.GroupName>{group.name}</S.GroupName>
			<S.GroupType>{group.type}</S.GroupType>
			<S.GroupLink>
				<img src={process.env.PUBLIC_URL + '/images/iconLink.svg'}/>
				{group.link}
			</S.GroupLink>
			<S.GroupText>{group.text}</S.GroupText>
			<S.GroupContact>
				<img src={process.env.PUBLIC_URL + '/images/iconContact.svg'}/>
				{group.contact}
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