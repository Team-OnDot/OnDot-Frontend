import styled from 'styled-components';

export const SettingHeader = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin: 40px auto 0px;
	@media screen and (max-width: 450px) {
		justify-content: space-between;
	}
`;
export const BtnBack = styled.button`
	width: 36px;
	height: 36px;
	border-radius: 50px;
	color: transparent;
	background: #fff url(${process.env.PUBLIC_URL + '/images/iconBack.svg'}) no-repeat center center;
	background-size: contain;
	border: none;
`;
export const MainText = styled.div`
	height: 26px;
	width: 145px;
	font-size: 22px;
	font-family: 'Pretendard-SemiBold';
	line-height: 22px;
	letter-spacing: 0em;
`;
export const SettingBlock = styled.div`
	width: 36px;
	height: 36px;
`;

//폼 컨테이너
export const SettingContainer = styled.form`
	width: 352px;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	margin: 0px auto;
`;
export const TextContainer = styled.div`
	display: flex;
	margin: 20px auto 5px 0px;
`;
export const TextCircle = styled.div`
	display: inline-block;
	width: 9px;
	height: 9px;
	border-radius: 50%;
	background-color: ${(props) => props.theme.colors.red1};
	margin: 5px 5px 5px 0px;
`;
export const Text = styled.div`
	font-size: 16px;
	font-family: 'Pretendard-SemiBold';
	line-height: 19px;
	letter-spacing: 0em;
`;
export const TextSub = styled.div`
	font-size: 12px;
	font-family: 'Pretendard-SemiBold';
	line-height: 14px;
	letter-spacing: 0em;
	color: ${(props) => props.theme.colors.gray4};
	margin: 2px auto 0px 2px;
`;
export const Profile = styled.div<{ src?: string }>`

`;
export const ProfilePlus = styled.div`
	width: 26.87px;
	height: 26.87px;
	background-image: url(${process.env.PUBLIC_URL + '/images/iconProfilePlus.svg'});
	background-repeat: no-repeat;
	background-color: transparent;
	border: none;
	margin-top: 40px;
	margin-left: 40px;
`;

export const InputContainer = styled.div<{ toggle: boolean; color: string }>`
	width: 352px;
	height: 47px;
	text-align: left;
	font-size: 15px;
	background-repeat: no-repeat;
	background-position: 10px center;
	border-radius: 11px;
	display: flex;
	border: 2px solid ${(props) => (props.toggle ? props.color : `${props.theme.colors.gray4}`)};
	color: ${(props) => (props.toggle ? `${props.theme.colors.gray1}` : `${props.theme.colors.gray2}`)};
`;
export const SettingInputImage = styled.input`
	display: none;
`;
export const LabelForImage = styled.label<{ src?: string }>`
   	cursor: pointer;
   	display: block;
	width: 69px;
	height: 69px;
	background-image: url(${(props) => props.src});
	background-repeat: no-repeat;
	background-size: cover;
	border-radius: 50%;
	border: 2px solid ${(props) => props.theme.colors.gray4};
	margin-left: 0px;
	margin-right: auto;
`;
export const SettingInput = styled.input<{ src?: string }>`
	width: 300px;
	padding-left: 15px;
	border-radius: 11px;
	border: none;
	font-family: 'Pretendard-SemiBold';
	font-size: 15px;
`;
export const ClearBtn = styled.img`
	margin-left: auto;
	margin-right: 8px;
`;
export const SettingLongInput = styled.textarea<{ toggle: boolean; color: string; }>`
	width: 352px;
	resize: none;
	font-family: 'Pretendard-SemiBold';
	font-size: 15px;
	border-radius: 11px;
	border: 2px solid ${(props) => (props.toggle ? props.color : `${props.theme.colors.gray4}`)};
	color: ${(props) => (props.toggle ? `${props.theme.colors.gray1}` : `${props.theme.colors.gray2}`)};
	padding: 15px 10px;

`;

export const SubmitBtn = styled.input<{ toggle: boolean }>`
	width: 352px;
	height: 47px;
	font-size: 17px;
	line-height: 18px;
	letter-spacing: 0em;
	color: ${(props) => props.theme.colors.white};
	background-color: ${(props) => props.toggle? props.theme.colors.red1 : props.theme.colors.gray5};
	border-radius: 30px;
	border: none;
	margin-top: 30px;
`;
