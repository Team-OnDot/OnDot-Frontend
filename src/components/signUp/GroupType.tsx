import * as S from './SignUpForm.style';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { GroupTypeAtom } from '../../recoil/SignUpAtoms';

function GroupType(){

    //그룹 분류 option열기
    const [isOption, setIsOption] = useState(false);
	const onClickLabel = () => {
        setIsOption(!isOption);
	};

    //그룹 분류 value값 설정하기
    const [groupTypeAtom, setGroupTypeAtom] = useRecoilState(GroupTypeAtom);
    const handleClickedGroupType = (type: string) => {
        setGroupTypeAtom(type);
        setIsOption(!isOption);
    };

    return(
        <div>
            <S.GroupTypeBox toggle={isOption}>
                <S.GroupTypeLabel onClick={onClickLabel}>{groupTypeAtom}</S.GroupTypeLabel>
                <S.GroupTypeUl toggle={isOption}>
                    <S.GroupTypeLiTop onClick={(e) => handleClickedGroupType("동아리")}>동아리</S.GroupTypeLiTop>
                    <S.GroupTypeLi onClick={(e) => handleClickedGroupType("학생회")}>학생회</S.GroupTypeLi>
                    <S.GroupTypeLi onClick={(e) => handleClickedGroupType("학술 모임")}>학술 모임</S.GroupTypeLi>
                    <S.GroupTypeLiBottom onClick={(e) => handleClickedGroupType("기타")}>기타</S.GroupTypeLiBottom>
                </S.GroupTypeUl>
            </S.GroupTypeBox>
        </div>
    );
}

export default GroupType;
