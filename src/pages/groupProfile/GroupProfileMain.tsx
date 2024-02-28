import { useNavigate } from 'react-router-dom';
import * as S from './GroupProfileMain.style';
import InterviewPreview from '../../components/interviewPreview/InterviewPreview';
import * as I from '../../components/interviewPreview/InterviewPreview';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { groupInfoAtom } from '../../recoil/groupAtoms';

function GroupProfileMain() {

    const navigate = useNavigate();

	//만들기 버튼 클릭 시
	const onClickCreateInterview = () => {
		navigate('/interview-make-1');
	};

	//그룹별 interviewId 조회
	const groupInfo = useRecoilValue(groupInfoAtom); 
	const interviewList = groupInfo.interviews;

	useEffect(() => {
        fetchInterviews(interviewList);
    }, [interviewList]);

    async function fetchInterviews(interviewList:any) {
        try {
            for (let i = 0; i < interviewList.length; i++) {
                await getRes(interviewList[i]);
            }
        } catch (err) {
            console.error(err);
        }
    }

    async function getRes(num:any) {
        try {
            const response = await axios({
                url: `/api/v1/interviews/${num}`,
                method: 'get',
                params: {
                    interviewId: num
                },
                headers: { Authorization: "Bearer " + localStorage.getItem('isLogin') },
            });
            console.log(response.data);
        } catch (error) {
            console.error('AxiosError:', error);
        }
    }
	  
	return (
		<>
			<S.InterviewsZone>
				<S.NavWrap>
					<S.NavText>
						<S.NavCircle />
						면접 페이지
						<img src={process.env.PUBLIC_URL + '/images/lineCircleShort.svg'} />
					</S.NavText>
					<S.CreateInterviewBtn onClick={onClickCreateInterview} />
				</S.NavWrap>
				<S.InterviewComponentsZone>
					{interviewList.length ? (
						interviewList.map((id, index) => {
							return <InterviewPreview interviewId={id}/>;
					})) : (
						<S.InterviewNull>
							<S.NullIconBox><S.NullIcon3/><S.NullIcon2/><S.NullIcon1/></S.NullIconBox>
								진행중인 면접이 없습니다
							<S.NullIconBox><S.NullIcon1/><S.NullIcon2/><S.NullIcon3/></S.NullIconBox>
						</S.InterviewNull>
					)}
				</S.InterviewComponentsZone>
			</S.InterviewsZone>
		</>
	);
}

export default GroupProfileMain;
