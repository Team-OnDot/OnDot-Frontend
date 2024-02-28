import * as S from './InterviewPreview.style';
import { useEffect, useState } from 'react';
import axios from 'axios';

export type Interview = {
	interviewId: number;
};

function InterviewPreview(I: Interview) {

	return (
		<S.PreviewContainer>
			<S.PreviewWrap>
				<S.PreviewTitle></S.PreviewTitle>
				<S.PreviewDate></S.PreviewDate>
			</S.PreviewWrap>
			<S.PreviewText>
				<img src={process.env.PUBLIC_URL + '/images/iconDate.svg'}/>
				
			</S.PreviewText>
			<S.PreviewText>
				<img src={process.env.PUBLIC_URL + '/images/iconTime.svg'}/>
				
			</S.PreviewText>
			<S.PreviewText>
				<img src={process.env.PUBLIC_URL + '/images/iconFormat.svg'}/>
				
			</S.PreviewText>
			<S.PreviewText>
				<img src={process.env.PUBLIC_URL + '/images/iconPlace.svg'}/>
				
			</S.PreviewText>
			<S.PreviewShare>공유</S.PreviewShare>
		</S.PreviewContainer>
	);
}

export default InterviewPreview;