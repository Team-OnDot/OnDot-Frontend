import { useNavigate } from 'react-router-dom';
import * as In from './InterviewApply.style';
import ApplyInfoForm from '../../components/interviewApply/infoForm/InterviewApplyInfoForm';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';

function InterviewApplyInputInfo() {
	return (
		<div>
			{/*Header*/}
			<In.InputInfoHeader>
				<In.Ellipse1 />
				지원 정보 입력
			</In.InputInfoHeader>
			<img src={process.env.PUBLIC_URL + '/images/lineCircle4853.svg'} />

			{/*Main(지원 정보 입력폼)*/}
			<ApplyInfoForm />
		</div>
	);
}

export default InterviewApplyInputInfo;
