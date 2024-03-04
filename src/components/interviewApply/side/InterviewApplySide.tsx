import { useEffect, useRef, useState } from 'react';
import * as S from './InterviewApplySide.style';
import { useRecoilState } from 'recoil';
import { interviewInfoAtom } from '../../../recoil/interviewAtom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';

function InterviewApplySide() {
	const [interviewInfo, setInterviewInfo] = useRecoilState(interviewInfoAtom);
	const { interviewId } = useParams();
	const accessToken = localStorage.getItem('isLogin');
	const [startDateString, setStartDateString] = useState<string>();
	const [endDateString, setEndDateString] = useState<string>();

	useEffect(() => {
		const getData = async () => {
			try {
				const response = await axios({
					url: `/api/v1/interviews/${interviewId}`,
					method: 'get',
					params: {
						interviewId: interviewId,
					},
					headers: {
						Authorization: 'Bearer ' + accessToken,
					},
				});
				setInterviewInfo(response.data.content);
			} catch (error) {
				console.log(error);
			}
		};
		getData();
	}, []);

	useEffect(() => {
		if (interviewInfo && interviewInfo.interviewStartDate && interviewInfo.interviewEndDate) {
			setStartDateString(format(new Date(interviewInfo.interviewStartDate), 'yyyy년 M월 d일'));
			setEndDateString(format(new Date(interviewInfo.interviewEndDate), 'yyyy년 M월 d일'));
		}
	});

	const groupInfo = {
		groupName: '온닷',
		groupType: '동아리',
		groupLink: 'Ondot.co.kr.ondot2024',
	};

	// const interviewInfo = {
	// 	interviewTitle: '온닷 1기 운영진 면접',
	// 	interviewPeriod: '2024년 1월 1일 ~ 2024년 1월 3일',
	// 	interviewTime: '30분',
	// 	interviewType: '1:1 면접',
	// 	interviewPlace: '숭실대학교 정보과학관 205호',
	// };

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
				<h3>{interviewInfo.name}</h3>
				<S.InterviewInfoItem>
					<img src={process.env.PUBLIC_URL + '/images/iconDate.svg'} />
					<span>{interviewInfo.interviewDates.length === 1 ? startDateString : `${startDateString} ~ ${endDateString}`}</span>
				</S.InterviewInfoItem>
				<S.InterviewInfoItem>
					<img src={process.env.PUBLIC_URL + '/images/iconTime.svg'} />
					<span>{`${interviewInfo.requiredTime}분`}</span>
				</S.InterviewInfoItem>
				<S.InterviewInfoItem>
					<img src={process.env.PUBLIC_URL + '/images/iconFormat.svg'} />
					<span>{`${interviewInfo.applicantCount}:${interviewInfo.interviewerCount} 면접`}</span>
				</S.InterviewInfoItem>
				<S.InterviewInfoItem>
					<img src={process.env.PUBLIC_URL + '/images/iconPlace.svg'} />
					<span>{interviewInfo.location}</span>
				</S.InterviewInfoItem>
			</S.InterviewInfoContainer>
			<S.Line src={process.env.PUBLIC_URL + '/images/lineCircle.svg'} />
			<S.InterviewGuideTitle>면접 안내</S.InterviewGuideTitle>
			<S.InterviewGuideDetail>{interviewInfo.description}</S.InterviewGuideDetail>
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

export default InterviewApplySide;
