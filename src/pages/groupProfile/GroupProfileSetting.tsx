import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useRecoilState, useSetRecoilState } from 'recoil';
import { GroupInfo, groupInfoAtom } from './../../recoil/groupAtoms';
import * as S from './GroupProfileSetting.style';
import GroupType from './../../components/signUp/GroupType';


function GroupProfileSetting() {
    const [groupInfo, setGroupInfo] = useRecoilState(groupInfoAtom);
    const [imgFile, setImgFile] = useState(groupInfo.profile);
    
    const regExpName = /^[a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,12}$/;

	const navigate = useNavigate();

    const { 
        register, watch, handleSubmit, setValue,
        formState: { errors, isValid } 
    } = useForm<GroupInfo>({
        mode: "onChange",
        defaultValues: groupInfo
    });
    
    const onSubmitFun = (() => {
        const data = {
            name: watch('name'),
            type: watch('type'),
            link: watch('link'),
            text: watch('text'),
            contact: watch('contact')
        }
        console.log(data);
        // API 연결

    });
        /*
        <S.BtnBack>
            <img src={process.env.PUBLIC_URL + '/images/iconBack.svg'} />
        </S.BtnBack>
        */
	return (
        <S.SettingContainer>
            <S.MainText>그룹프로필 설정<S.MainTextCircle /></S.MainText>
            <S.TextContainer>
                <S.TextCircle />
                <S.Text>프로필 사진</S.Text>
            </S.TextContainer>
            <S.Profile src={ imgFile ? imgFile : process.env.PUBLIC_URL + '/images/profileImg.svg'}>
                <S.ProfilePlus src={process.env.PUBLIC_URL + '/images/iconProfilePlus.svg'} />
            </S.Profile>
            
                
            <S.TextSub>00Mb 이상</S.TextSub>
            <S.TextContainer>
                <S.TextCircle />
                <S.Text>그룹 이름</S.Text>
            </S.TextContainer>
            <S.SettingInput
                type="text"
                id="name"
                required
                {...register("name", { required: true, pattern: regExpName })}
            />
            <S.TextSub>2~12자 한글, 영문, 숫자</S.TextSub>
            <S.TextContainer>
                <S.TextCircle />
                <S.Text>그룹분류</S.Text>
            </S.TextContainer>
            <GroupType />
            <S.TextContainer>
                <S.TextCircle />
                <S.Text>그룹 프로필 주소</S.Text>
            </S.TextContainer>
            <S.SettingInput
                type="text"
                id="link"
                required
                {...register("link", { required: true })}
            />
            <S.TextContainer>
                <S.TextCircle />
                <S.Text>프로필 인사말</S.Text>
            </S.TextContainer>
            <S.SettingInput
                type="text"
                id="text"
                required
                {...register("text", { required: true, maxLength: 140 })}
            />
            <S.TextSub>140자 이내</S.TextSub>
            <S.TextContainer>
                <S.TextCircle />
                <S.Text>연락처</S.Text>
            </S.TextContainer>
            <S.SettingInput
                placeholder="전화번호 이메일 혹은 SNS를 입력해주세요"
                type="text"
                id="contact"
                required
                {...register("contact", { required: true, maxLength: 80 })}
            />
            <S.TextSub>80자 이내</S.TextSub>
            <S.NextBtn type='submit' value='완료' onClick={onSubmitFun}/>
        </S.SettingContainer>
	);
}

export default GroupProfileSetting;