import { useRef } from 'react';
import * as S from './InterviewApplySide.style';

function InterviewSide() {
	const groupInfo = {
		groupName: '온닷',
		groupType: '동아리',
		groupLink: 'Ondot.co.kr.ondot2024',
	};

	const interviewInfo = {
		interviewTitle: '온닷 1기 운영진 면접',
		interviewPeriod: '2024년 1월 1일 ~ 2024년 1월 3일',
		interviewTime: '30분',
		interviewType: '1:1 면접',
		interviewPlace: '숭실대학교 정보과학관 205호',
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
			<S.GroupImg src={process.env.PUBLIC_URL + '/images/profileImg.svg'} />
			<S.GroupName>{groupInfo.groupName}</S.GroupName>
			<S.GroupType>{groupInfo.groupType}</S.GroupType>
			<S.GroupLink onClick={handleCopyLink}>
				<a ref={linkRef} href={groupInfo.groupLink}>
					{groupInfo.groupLink}
				</a>
			</S.GroupLink>
			<S.InterviewInfoContainer>
				<h3>{interviewInfo.interviewTitle}</h3>
				<S.InterviewInfoItem>
					<img src={process.env.PUBLIC_URL + '/images/iconDate.svg'} />
					<span>{interviewInfo.interviewPeriod}</span>
				</S.InterviewInfoItem>
				<S.InterviewInfoItem>
					<img src={process.env.PUBLIC_URL + '/images/iconTime.svg'} />
					<span>{interviewInfo.interviewTime}</span>
				</S.InterviewInfoItem>
				<S.InterviewInfoItem>
					<img src={process.env.PUBLIC_URL + '/images/iconFormat.svg'} />
					<span>{interviewInfo.interviewType}</span>
				</S.InterviewInfoItem>
				<S.InterviewInfoItem>
					<img src={process.env.PUBLIC_URL + '/images/iconPlace.svg'} />
					<span>{interviewInfo.interviewPlace}</span>
				</S.InterviewInfoItem>
			</S.InterviewInfoContainer>
			<S.Line src={process.env.PUBLIC_URL + '/images/lineCircle.svg'} />
			<S.InterviewGuideTitle>면접 안내</S.InterviewGuideTitle>
			<S.InterviewGuideDetail>면접은 일대일로 이루어지며 25분 가량 소요됩니다. 당일 지각은 면접 취소로 처리되며 면접 시간에 맞춰 오시길 당부 드립니다.</S.InterviewGuideDetail>
			<S.Line src={process.env.PUBLIC_URL + '/images/lineCircle.svg'} />
			<S.InterviewContanctContainer>
				<img src={process.env.PUBLIC_URL + '/images/iconContact.svg'} />
				<div>
					<S.InterviewContactText>회장 김회장 010-0000-0000</S.InterviewContactText>
					<S.InterviewContactText>이메일 Ondot@gmail.com</S.InterviewContactText>
					<S.InterviewContactText>instagram @on.dot</S.InterviewContactText>
				</div>
			</S.InterviewContanctContainer>
		</S.Container>
	);
}

export default InterviewSide;
