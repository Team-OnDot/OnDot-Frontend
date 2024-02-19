import * as S from './TimeType.style';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import {interviewTimeAtom} from '../../recoil/interviewAtoms';

function TimeType(){

    //시간 option열기
    const [isOption, setIsOption] = useState(false);
	const onClickLabel = () => {
        setIsOption(!isOption);
	};

    //시간 value값 설정하기
    const [timeType, setTimeType] = useRecoilState(interviewTimeAtom);
    const handleClickedTimeType = (time: string) => {
        setTimeType(time);
        setIsOption(!isOption);
    };

    return(
        <div>
            <S.timeTypeBox toggle={isOption}>
                <S.timeTypeLabel onClick={onClickLabel}>{timeType}</S.timeTypeLabel>
                <S.timeTypeUl toggle={isOption}>
                    <S.timeTypeLiTop onClick={(e: any) => handleClickedTimeType("5분")}>5분</S.timeTypeLiTop>
                    <S.timeTypeLi onClick={(e) => handleClickedTimeType("10분")}>10분</S.timeTypeLi>
                    <S.timeTypeLi onClick={(e) => handleClickedTimeType("15분")}>15분</S.timeTypeLi>
                    <S.timeTypeLi onClick={(e) => handleClickedTimeType("20분")}>20분</S.timeTypeLi>
                    <S.timeTypeLi onClick={(e) => handleClickedTimeType("25분")}>25분</S.timeTypeLi>
                    <S.timeTypeLi onClick={(e) => handleClickedTimeType("30분")}>30분</S.timeTypeLi>
                    <S.timeTypeLi onClick={(e) => handleClickedTimeType("40분")}>40분</S.timeTypeLi>
                    <S.timeTypeLi onClick={(e) => handleClickedTimeType("45분")}>45분</S.timeTypeLi>
                    <S.timeTypeLi onClick={(e) => handleClickedTimeType("60분")}>60분</S.timeTypeLi>
                    <S.timeTypeLi onClick={(e) => handleClickedTimeType("75분")}>75분</S.timeTypeLi>
                    <S.timeTypeLi onClick={(e) => handleClickedTimeType("90분")}>90분</S.timeTypeLi>
                    <S.timeTypeLiBottom onClick={(e: any) => handleClickedTimeType("120분")}>120분</S.timeTypeLiBottom>
                </S.timeTypeUl>
            </S.timeTypeBox>
        </div>
    );
}

export default TimeType;