import * as S from './SignUpForm.style';
import { useState } from 'react';

function GroupType(){

    //그룹 분류 option열기
    const [isOption, setIsOption] = useState(false);
	const onClickLabel = () => {
        setIsOption(!isOption);
	};

    return(
        <div>
            <S.groupTypeBox toggle={isOption}>
                <S.groupTypeLabel onClick={onClickLabel}>동아리</S.groupTypeLabel>
                <S.groupTypeUl toggle={isOption}>
                    <S.groupTypeLiTop>동아리</S.groupTypeLiTop>
                    <S.groupTypeLi>학생회</S.groupTypeLi>
                    <S.groupTypeLi>학술 모임</S.groupTypeLi>
                    <S.groupTypeLiBottom>기타</S.groupTypeLiBottom>
                </S.groupTypeUl>
            </S.groupTypeBox>
        </div>
    );
}

export default GroupType;