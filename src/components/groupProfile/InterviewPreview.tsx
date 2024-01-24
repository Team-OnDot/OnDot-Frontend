import * as S from './InterviewPreview.style';

export type interview = {
	title: String,
	date: String,
	time: String,
	format: String,
	place: String
};

function InterviewPreview(info: interview) {
	return (
		<S.PreviewContainer>
			<S.PreviewWrap>
				<S.PreviewTitle>{info.title}</S.PreviewTitle>
				<S.PreviewDate>{info.date}</S.PreviewDate>
			</S.PreviewWrap>
			<S.PreviewText>
				<img src={process.env.PUBLIC_URL + '/images/iconDate.svg'}/>
				{info.date}
			</S.PreviewText>
			<S.PreviewText>
				<img src={process.env.PUBLIC_URL + '/images/iconTime.svg'}/>
				{info.time}
			</S.PreviewText>
			<S.PreviewText>
				<img src={process.env.PUBLIC_URL + '/images/iconFormat.svg'}/>
				{info.format}
			</S.PreviewText>
			<S.PreviewText>
				<img src={process.env.PUBLIC_URL + '/images/iconPlace.svg'}/>
				{info.place}
			</S.PreviewText>
			<S.PreviewShare>공유</S.PreviewShare>
		</S.PreviewContainer>
	);
}

export default InterviewPreview;