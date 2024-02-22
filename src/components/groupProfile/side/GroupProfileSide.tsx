import { useRef } from 'react';
import * as S from './GroupProfile.style';
import { useNavigate } from 'react-router-dom';

function GroupProfileSide() {
	const groupInfo = {
		groupName: '온닷',
		groupType: '동아리',
		groupLink: 'Ondot.co.kr.ondot2024',
	};

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
				<S.GroupName>{groupInfo.groupName}</S.GroupName>
				<S.GroupType>{groupInfo.groupType}</S.GroupType>
				<S.GroupLink onClick={handleCopyLink}>
					<a ref={linkRef} href={groupInfo.groupLink}>
						{groupInfo.groupLink}
					</a>
				</S.GroupLink>
				<S.GroupTextArea>안녕하세요. 온닷입니다.</S.GroupTextArea>
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
