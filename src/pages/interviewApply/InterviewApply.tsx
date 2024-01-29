import { useNavigate } from 'react-router-dom';
import * as I from './InterviewApply.style';
import InterviewSide from '../../components/interview/InterviewApplySide';
import * as S from '../../components/groupProfile/InterviewPreview';
import * as G from '../../components/interview/InterviewApplySide';

function Interview() {
	const group : G.Group = {
		name: '온닷',
		type: '동아리',
		link: 'Ondot.co.kr',
		text: '안녕하세요. 온닷입니다.',
		contact: 'ondot@gmail.com'
	};

	const interviews : S.Interview[] = [ 
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

	return (
		<>
			<InterviewSide {...group}/>

            {/*Main*/}
			<I.InterviewMain>
				<I.InterviewMainText>
					안녕하세요!<br/>
					온닷 1기 운영진 면접 페이지입니다 :)
				</I.InterviewMainText>
				<I.ApplyBtnWrap>
					<I.ApplyBtn>면접 지원하기</I.ApplyBtn>
					<I.EditBtn>지원 정보 수정하기</I.EditBtn>
				</I.ApplyBtnWrap>
			</I.InterviewMain>
		</>
	);
}

export default Interview;