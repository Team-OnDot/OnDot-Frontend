import * as S from './Login.style';
import LoginForm from '../../components/login/LoginForm';
import { useNavigate } from 'react-router-dom';

function Login() {

	const navigate = useNavigate();

	//회원가입 클릭 시
	const onClickSignIn = () => {
		navigate(`/sign-up-id`);
	};

	//구글 로그인 클릭 시
	const onClickGoogleLogin = () => {
		window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?
		client_id=${process.env.REACT_APP_GOOGLE_CLIENT_KEY}
		&redirect_uri=${process.env.REACT_APP_GOOGLE_REDIRECT_KEY}
		&response_type=code
		&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile`;
	}

	return (
		<div>
			{/*Header*/}
			<S.LoginHeader>
				<S.LoginWrapper>
					<S.LoginHeaderText>로그인</S.LoginHeaderText>
					<S.LoginHeaderDot/>
				</S.LoginWrapper>
			</S.LoginHeader>
			
			{/*Main*/}
			<LoginForm/>

			{/*구글로그인*/}
			<S.GoogleLoginBtn onClick={onClickGoogleLogin}>
				<S.GoogleLogo>
					<S.GoogleLogoImg src={`${process.env.PUBLIC_URL}/images/googleLogo.svg`}></S.GoogleLogoImg>
				</S.GoogleLogo>
				<S.GoogleLoginText>구글 계정으로 로그인</S.GoogleLoginText>
			</S.GoogleLoginBtn>

			{/*Footer*/}
			<S.LoginFooter>
				<S.LoginFooterWrap>
					<S.FindText>아이디 찾기</S.FindText>
					<S.FindText>비밀번호 찾기</S.FindText>
					<S.SignInText onClick={onClickSignIn}>회원가입</S.SignInText>
				</S.LoginFooterWrap>
			</S.LoginFooter>
		</div>
	);
}

export default Login;
