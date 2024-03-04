import { useEffect, useRef, useState } from 'react';
import * as S from './InterviewApplySide.style';
import { useRecoilState, useRecoilValue } from 'recoil';
import { interviewInfoAtom } from '../../../recoil/interviewAtom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { groupInfoAtom } from '../../../recoil/groupAtoms';
import { interviewApplyAtom } from '../../../recoil/interviewApplyAtom';

function InterviewApplySide() {
	const [interviewInfo, setInterviewInfo] = useRecoilState(interviewInfoAtom);
	const [interviewApply, setInterviewApply] = useRecoilState(interviewApplyAtom);
	const groupInfo = useRecoilValue(groupInfoAtom);
	const { organizationId, interviewId } = useParams();
	const [startDateString, setStartDateString] = useState<string>();
	const [endDateString, setEndDateString] = useState<string>();

	useEffect(() => {
		const getData = async () => {
			if (organizationId !== undefined && interviewId !== undefined) {
				setInterviewApply({
					organizationId: organizationId,
					interviewId: interviewId,
					applyName: interviewApply.applyName,
					applyPhone: interviewApply.applyPhone,
					applyEmail: interviewApply.applyEmail,
				});
			}
			try {
				const response = await axios({
					url: `/api/v1/organizations/applicants/${interviewApply.organizationId}/${interviewApply.interviewId}`,
					method: 'get',
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
			<S.GroupImg src={groupInfo.imageUrl? groupInfo.imageUrl : process.env.PUBLIC_URL + '/images/profileImg.svg'} />
			<S.GroupName>{groupInfo.name}</S.GroupName>
			<S.GroupType>{groupInfo.type === 'STUDENT_COUNCIL' ? '학생회' : groupInfo.type === 'STUDENT_CLUB' ? '동아리' : groupInfo.type === 'ACADEMIC_CLUB' ? '학술모임' : '기타'}</S.GroupType>
			<S.GroupLink onClick={handleCopyLink}>
				<a ref={linkRef} href={groupInfo.profileUrl}>
					{groupInfo.profileUrl}
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
