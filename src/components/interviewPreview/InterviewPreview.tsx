import * as S from './InterviewPreview.style';

export type Interview = {
	title: String,
	date: String,
	time: String,
	format: String,
	place: String, 
	applyDate : String
};

function InterviewPreview(interview: Interview) {
	return (
		<S.PreviewContainer>
			<S.PreviewWrap>
				<S.PreviewTitle>{interview.title}</S.PreviewTitle>
				<S.PreviewDate>{interview.applyDate}</S.PreviewDate>
			</S.PreviewWrap>
			<S.PreviewText>
				<img src={process.env.PUBLIC_URL + '/images/iconDate.svg'}/>
				{interview.date}
			</S.PreviewText>
			<S.PreviewText>
				<img src={process.env.PUBLIC_URL + '/images/iconTime.svg'}/>
				{interview.time}
			</S.PreviewText>
			<S.PreviewText>
				<img src={process.env.PUBLIC_URL + '/images/iconFormat.svg'}/>
				{interview.format}
			</S.PreviewText>
			<S.PreviewText>
				<img src={process.env.PUBLIC_URL + '/images/iconPlace.svg'}/>
				{interview.place}
			</S.PreviewText>
			<S.PreviewShare>공유</S.PreviewShare>
		</S.PreviewContainer>
	);
}

export default InterviewPreview;