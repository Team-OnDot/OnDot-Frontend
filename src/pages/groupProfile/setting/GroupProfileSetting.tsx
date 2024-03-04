import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { GroupInfo, groupInfoAtom } from '../../../recoil/groupAtoms';
import * as S from './GroupProfileSetting.style';
import GroupType from '../../../components/signUp/signupId/GroupType';
import { groupTypeAtom } from '../../../recoil/signUpAtoms';
import axios from 'axios';

function GroupProfileSetting() {
	const accessToken = localStorage.getItem('isLogin');
	const [groupInfo, setGroupInfo] = useRecoilState(groupInfoAtom);
	const [groupType, setGroupType] = useRecoilState(groupTypeAtom);
	const [imgFile, setImgFile] = useState<File | null>(null);
	const [imgUrl, setImgUrl] = useState(groupInfo.imageUrl);

	useEffect(() => {
		const getData = async () => {
			await axios({
				url: '/api/v1/organizations',
				method: 'get',
				headers: {
					Authorization: 'Bearer ' + accessToken
				}
			}).then((response) => {
				console.log(response.data);
				const getGroupInfo = response.data.content;
				if(getGroupInfo.type === "STUDENT_COUNCIL"){
					getGroupInfo.type = "동아리";
				}
				else if(getGroupInfo.type === "STUDENT_CLUB"){
					getGroupInfo.type = "학생회";
				}
				else if(getGroupInfo.type === "ACADEMIC_CLUB"){
					getGroupInfo.type = "학술 모임";
				}
				else{
					getGroupInfo.type = "기타";
				}
				setGroupInfo(getGroupInfo);
				setGroupType(getGroupInfo.type);
			}).catch((error) => console.log((error)));
		}
		getData();
	}, [])

	const navigate = useNavigate();

	const onBack = () => {
		navigate(-1);
	}

	const {
		register,
        handleSubmit,
        watch,
        setError,
        resetField,
        clearErrors,
        getValues,
        formState: { errors },
	} = useForm<GroupInfo>({
		mode: 'onChange',
		defaultValues: groupInfo,
	});

	//완료 버튼 활성화    
    const [isActive, setIsActive] = useState(false);
    const watchName = watch('name');
	const watchProfileUrl = watch('profileUrl');

    useEffect(() => {
        if (watchName && watchProfileUrl && groupType) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [watchName, watchProfileUrl]);

    //입력 취소 버튼
    const removeInput = (name:any) => {
        clearErrors(name);
        resetField(name);
        setError(name, { message: ''});
    }

	const onchangeImage = ( e: React.ChangeEvent<HTMLInputElement> ) => {
		if (e.target.files && e.target.files[0]) {
		  const newFileURL = URL.createObjectURL(e.target.files[0]);
		  setImgFile(e.target.files[0]);
		  setImgUrl(newFileURL);
		  console.log('프로필 사진 교체');
	  };
	}

	const onValid = (data: GroupInfo) => {
		console.log(data);
		if(groupType === "동아리"){
            data.type = "STUDENT_COUNCIL"
        }
        else if(groupType === "학생회"){
            data.type = "STUDENT_CLUB"
        }
        else if(groupType === "학술 모임"){
            data.type = "ACADEMIC_CLUB"
        }
        else{
            data.type = "OTHER"
        }
        
        axios({
            url: '/api/v1/organizations',
            method: 'patch',
            data: {
                name: data.name,
                type: data.type,
                profileUrl: data.profileUrl,
				imageUrl: data.imageUrl,
				contact: data.contact,
				description: data.description
            },
			headers: {Authorization: 'Bearer ' + accessToken,},
          }).then((response) => {
            console.log("성공");  
            console.log(response.data);
			navigate('/group-profile');
          }).catch((error) => {
            console.log("실패");  
            console.error('AxiosError:', error);
        });
		
		if (imgFile) {
			const formData = new FormData();
			formData.append("img",  imgFile);
			axios({
				url: '/api/v1/auth/profile',
				method: 'patch',
				data: formData,
				headers: {
					"Content-Type": "multipart/form-data",
					Authorization: 'Bearer ' + accessToken,
				},
			  }).then((response) => {
				console.log("성공");  
				console.log(response.data);	
			  }).catch((error) => {
				console.log("실패");  
				console.error('AxiosError:', error);
			});
		}
	};

	return (
		<>
		<S.SettingHeader>
			<S.BtnBack onClick={onBack} />
			<S.MainText>그룹프로필 설정</S.MainText>
			<S.SettingBlock />
		</S.SettingHeader>
			
		<S.SettingContainer encType='multipart/form-data' onSubmit={handleSubmit(onValid)}>
			<S.TextContainer>
				<S.TextCircle />
				<S.Text>프로필 사진</S.Text>
			</S.TextContainer>
			<S.LabelForImage 
				htmlFor="imageUrl"
				src={imgUrl? imgUrl : process.env.PUBLIC_URL + '/images/profileImg.svg'}
			>
				<S.ProfilePlus />
			</S.LabelForImage>
			<S.SettingInputImage type="file" id="imageUrl" accept='image/*' onChange={onchangeImage}/>
			<S.TextSub>{imgFile? (imgFile.size/(1024*1024)).toFixed(2): '00'}Mb 이상</S.TextSub>
			<S.TextContainer>
				<S.TextCircle />
				<S.Text>그룹 이름</S.Text>
			</S.TextContainer>
			<S.InputContainer
                toggle={watch("name")?.length > 0 ? true: false || errors.name ? true: false}  
                color={errors.name ? '#FF4A4A': '#606060'}
            >
                <S.SettingInput
                    type = "text"
                    id = "name"
                    required
                    {...register("name",{
						required: true,
						pattern: {
							value:/^[a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,12}$/,
							message: "2~12자 한글, 영문, 숫자"
						},
					})}
                />
                {watch("name")?.length > 0 && 
                    <S.ClearBtn
                        src={process.env.PUBLIC_URL + '/images/inputCancelIcon.svg'}
                        onClick={(e) => {removeInput("name");}}
                    />
                }
            </S.InputContainer>
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
			<S.InputContainer
                toggle={watch("profileUrl")?.length > 0 ? true: false || errors.profileUrl ? true: false}  
                color={errors.profileUrl ? '#FF4A4A': '#606060'}
            >
				<S.SettingInput 
					type="text" 
					id="profileUrl" 
					required 
					{...register("profileUrl",{
                        required: true,
                        pattern: {
                            value: /^[a-z0-9.]{2,12}$/,
                            message: ""
                        },
                    })}
				/>	
				{watch("profileUrl")?.length > 0 && 
                    <S.ClearBtn
                        src={process.env.PUBLIC_URL + '/images/inputCancelIcon.svg'}
                        onClick={(e) => {removeInput("profileUrl");}}
                    />
                }
			</S.InputContainer>
			
			<S.TextContainer>
				<S.TextCircle />
				<S.Text>프로필 인사말</S.Text>
			</S.TextContainer>
			<S.SettingLongInput 
				id="description"
				rows={3} cols={30}
				toggle={watch("description")?.length > 0 ? true: false || errors.description ? true: false}  
                color={errors.description ? '#FF4A4A': '#606060'}
				required 
				{...register('description', { required: true, maxLength: 140 })} 
			/>
			<S.TextSub>140자 이내</S.TextSub>

			<S.TextContainer>
				<S.TextCircle />
				<S.Text>연락처</S.Text>
			</S.TextContainer>
			<S.SettingLongInput 
				id="contact"
				rows={2} cols={30}
				toggle={watch("contact")?.length > 0 ? true: false || errors.description ? true: false}  
                color={errors.contact ? '#FF4A4A': '#606060'}
				required 
				{...register('contact', { required: true, maxLength: 80 })} 
			/>
			<S.TextSub>80자 이내</S.TextSub>
			<S.SubmitBtn type="submit" value="완료" toggle={isActive} />
		</S.SettingContainer>
		</>	
	);
}

export default GroupProfileSetting;
