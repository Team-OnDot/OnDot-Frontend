import * as S from './GroupProfile.style';
import GroupInfo from './../../components/groupProfile/GroupInfo';
import InterviewPreview from './../../components/groupProfile/InterviewPreview';
import React, { useState } from 'react';
import * as I from './../../components/groupProfile/InterviewPreview';
import { useNavigate } from 'react-router-dom';

function GroupProfile() {
	const interviews : I.interview[] = [ 
		{
			title: '제목',
			date: '12/20 ~ 12/23',
			time: '시간',
			format: '형태',
			place: '장소'
		},
		{
			title: '제목2',
			date: '날짜',
			time: '시간',
			format: '형태',
			place: '장소'
		},
		{
			title: '제목3',
			date: '날짜',
			time: '시간',
			format: '형태',
			place: '장소'
		},
	];
	// const interviews : I.interview[] = [];

	const navigate = useNavigate();
	
	const onClickCreateInterview = () => {
		navigate('/');
	}

	return (
		<>
			<GroupInfo />
			<S.InterviewsZone>
				<S.NavWrap>
					<S.NavText>
						<S.NavCircle />면접 페이지
						<img src={process.env.PUBLIC_URL + '/images/lineCircleShort.svg'}/>
					</S.NavText>
					<S.CreateInterviewBtn onClick={onClickCreateInterview} />
				</S.NavWrap>
				<S.InterviewComponentsZone>
					{interviews.length?
						interviews.map((info, index) => {
							return (
								<InterviewPreview {...info} />
							);
						})
						: <S.InterviewNull>진행중인 면접이 없습니다.</S.InterviewNull>
					}
				</S.InterviewComponentsZone>
			</S.InterviewsZone>
		</>
	);
}

export default GroupProfile;