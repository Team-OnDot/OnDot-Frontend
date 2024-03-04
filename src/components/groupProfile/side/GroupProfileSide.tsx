import { useEffect, useRef, useState } from 'react';
import * as S from './GroupProfileSide.style';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { groupInfoAtom } from '../../../recoil/groupAtoms';

function GroupProfileSide() {
	const accessToken = sessionStorage.getItem('isLogin');
	const [groupInfo, setGroupInfo] = useRecoilState(groupInfoAtom);

	useEffect(() => {
		const getData = async () => {
			await axios({
				url: '/api/v1/organizations',
				method: 'get',
				headers: {
					Authorization: 'Bearer ' + accessToken
				}
			}).then((response) => {
				console.log(response.data);
				const getGroupInfo = response.data.content;
				if(getGroupInfo.type === "STUDENT_COUNCIL"){
					getGroupInfo.type = "동아리";
				}
				else if(getGroupInfo.type === "STUDENT_CLUB"){
					getGroupInfo.type = "학생회";
				}
				else if(getGroupInfo.type === "ACADEMIC_CLUB"){
					getGroupInfo.type = "학술 모임";
				}
				else{
					getGroupInfo.type = "기타";
				}
				setGroupInfo(getGroupInfo);
			}).catch((error) => console.log((error)));
		}
		getData();
	}, []);

	const navigate = useNavigate();

	//설정 클릭
	const onClickSetting = () => {
		navigate('/group-profile-setting');
	};

	//로그아웃 클릭
	const onClickLogout = () => {
		localStorage.removeItem('isLogin');
		navigate('/');
	};

	const linkRef = useRef<HTMLAnchorElement>(null);
	//링크 복사 이벤트
	const handleCopyLink = async (event: any) => {
		event.preventDefault();
		const url = linkRef.current?.href;
		if (url) {
			try {
				await navigator.clipboard.writeText(url);
				alert('링크가 클립보드에 복사되었습니다.');
			} catch (error) {
				console.error('클립보드 복사에 실패했습니다.', error);
			}
		}
	};

	return (
		<S.Container>
			<div>
				<S.GroupImg src={groupInfo.imageUrl? groupInfo.imageUrl: process.env.PUBLIC_URL + '/images/profileImg.svg'} />
				<S.GroupName>{groupInfo.name}</S.GroupName>
				<S.GroupType>{groupInfo.type === 'STUDENT_COUNCIL' ? '학생회' : groupInfo.type === 'STUDENT_CLUB' ? '동아리' : groupInfo.type === 'ACADEMIC_CLUB' ? '학술모임' : '기타'}</S.GroupType>
				<S.GroupLink onClick={handleCopyLink}>
					<a ref={linkRef} href={groupInfo.profileUrl}>
						{groupInfo.profileUrl}
					</a>
				</S.GroupLink>
				<S.GroupTextArea>{groupInfo.description}</S.GroupTextArea>
			</div>
			<div>
				<S.IconBtnWrapper onClick={onClickSetting}>
					<img src={process.env.PUBLIC_URL + '/images/iconSetting.svg'} />
					<span>설정</span>
				</S.IconBtnWrapper>
				<S.Line src={process.env.PUBLIC_URL + '/images/lineCircle.svg'} />
				<S.IconBtnWrapper onClick={onClickLogout}>
					<img src={process.env.PUBLIC_URL + '/images/iconLogout.svg'} />
					<span>로그아웃</span>
				</S.IconBtnWrapper>
			</div>
		</S.Container>
	);
}

export default GroupProfileSide;
