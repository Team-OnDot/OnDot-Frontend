import * as S from './SignUpForm.style';
import { useState } from 'react';

function GroupType(){

    //그룹 분류 option열기
    const [isOption, setIsOption] = useState(false);
	const onClickLabel = () => {
        setIsOption(!isOption);
	};

    //그룹 분류 value값 설정하기
    const [groupType, setGroupType] = useState("동아리");
    const handleClickedGroupType = (type: string) => {
        setGroupType(type);
        setIsOption(!isOption);
    };

    return(
        <div>
            <S.groupTypeBox toggle={isOption}>
                <S.groupTypeLabel onClick={onClickLabel}>{groupType}</S.groupTypeLabel>
                <S.groupTypeUl toggle={isOption}>
                    <S.groupTypeLiTop onClick={(e) => handleClickedGroupType("동아리")}>동아리</S.groupTypeLiTop>
                    <S.groupTypeLi onClick={(e) => handleClickedGroupType("학생회")}>학생회</S.groupTypeLi>
                    <S.groupTypeLi onClick={(e) => handleClickedGroupType("학술 모임")}>학술 모임</S.groupTypeLi>
                    <S.groupTypeLiBottom onClick={(e) => handleClickedGroupType("기타")}>기타</S.groupTypeLiBottom>
                </S.groupTypeUl>
            </S.groupTypeBox>
        </div>
    );
}

export default GroupType;