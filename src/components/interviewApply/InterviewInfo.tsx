import * as I from './InterviewApply.style'

function InterviewInfo() {

	return (
		<I.InterviewInfoBox>
            <I.InterviewTitle>온닷 1기 운영진 면접</I.InterviewTitle>
            <I.InterviewInfo1>
                <img src={process.env.PUBLIC_URL + '/images/iconDate.svg'}/>
                <I.InterviewInfoText>2024년 1월 1일 ~ 2024년 1월 3일</I.InterviewInfoText>
            </I.InterviewInfo1>

            <I.InterviewInfo2>
                <img src={process.env.PUBLIC_URL + '/images/iconTime.svg'}/>
                <I.InterviewInfoText>30분</I.InterviewInfoText>
            </I.InterviewInfo2>

            <I.InterviewInfo2>
                <img src={process.env.PUBLIC_URL + '/images/iconFormat.svg'}/>
                <I.InterviewInfoText>1:1 면접</I.InterviewInfoText>
            </I.InterviewInfo2>

            <I.InterviewInfo2>
                <img src={process.env.PUBLIC_URL + '/images/iconPlace.svg'}/>
                <I.InterviewInfoText>숭실대학교 정보과학관 205호</I.InterviewInfoText>
            </I.InterviewInfo2>
        </I.InterviewInfoBox>			
	);
}

export default InterviewInfo;