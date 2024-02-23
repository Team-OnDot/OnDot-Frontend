import { useEffect, useRef, useState } from 'react';
import * as S from './GroupProfile.style';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { groupInfoAtom } from '../../../recoil/groupAtoms';

function GroupProfileSide() {
	// type GroupInfo = {
	// 	name?: string,
  //   type?: string,
  //   profileUrl?: string,
  //   imageUrl?: string,
  //   contact?: string,
  //   description?: string,
  //   interviews?: number[],
	// }
	// const [groupInfo, setGroupInfo] = useState<GroupInfo>({
	// 	name: "",
  //   type: "",
  //   profileUrl: "",
  //   imageUrl: "",
  //   contact: "",
  //   description: "",
  //   interviews: [],
	// });

	const accessToken = localStorage.getItem('isLogin');
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
				setGroupInfo(response.data.content);
			}).catch((error) => console.log((error)));
		}
		getData();
	}, [])

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
				<S.GroupImg src={process.env.PUBLIC_URL + '/images/profileImg.svg'} />
				<S.GroupName>{groupInfo.name}</S.GroupName>
				<S.GroupType>{groupInfo.type}</S.GroupType>
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
