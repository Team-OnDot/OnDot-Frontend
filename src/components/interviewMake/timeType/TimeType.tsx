import * as S from './TimeType.style';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { interviewTimeAtom } from '../../../recoil/interviewMakeAtom';

function TimeType() {
	//시간 option열기
	const [isOption, setIsOption] = useState(false);
	const onClickLabel = () => {
		setIsOption(!isOption);
	};

	//시간 value값 설정하기
	const [timeType, setTimeType] = useRecoilState(interviewTimeAtom);
	const handleClickedTimeType = (time: number) => {
		setTimeType(time);
		setIsOption(!isOption);
	};

	return (
		<div>
			<S.timeTypeBox toggle={isOption}>
				<S.timeTypeLabel onClick={onClickLabel}>{timeType}분</S.timeTypeLabel>
				<S.timeTypeUl toggle={isOption}>
					<S.timeTypeLiTop onClick={(e: any) => handleClickedTimeType(5)}>5분</S.timeTypeLiTop>
					<S.timeTypeLi onClick={(e) => handleClickedTimeType(10)}>10분</S.timeTypeLi>
					<S.timeTypeLi onClick={(e) => handleClickedTimeType(15)}>15분</S.timeTypeLi>
					<S.timeTypeLi onClick={(e) => handleClickedTimeType(20)}>20분</S.timeTypeLi>
					<S.timeTypeLi onClick={(e) => handleClickedTimeType(25)}>25분</S.timeTypeLi>
					<S.timeTypeLi onClick={(e) => handleClickedTimeType(30)}>30분</S.timeTypeLi>
					<S.timeTypeLi onClick={(e) => handleClickedTimeType(35)}>40분</S.timeTypeLi>
					<S.timeTypeLi onClick={(e) => handleClickedTimeType(40)}>45분</S.timeTypeLi>
					<S.timeTypeLiBottom onClick={(e: any) => handleClickedTimeType(60)}>60분</S.timeTypeLiBottom>
				</S.timeTypeUl>
			</S.timeTypeBox>
		</div>
	);
}

export default TimeType;
