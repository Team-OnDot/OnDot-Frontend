import * as S from './Login.style';
import LoginForm from '../../components/login/LoginForm';
import { useNavigate } from 'react-router-dom';

function Login() {

	const navigate = useNavigate();

	//회원가입 클릭 시
	const onClickSignIn = () => {
		navigate(`/sign-up-id`);
	};

	return (
		<div>
			{/*Header*/}
			<S.loginHeader>
				<S.loginWrapper>
					<S.loginHeaderText>로그인</S.loginHeaderText>
					<S.loginHeaderDot/>
				</S.loginWrapper>
			</S.loginHeader>
			{/*Main*/}
			<LoginForm/>
			{/*Footer*/}
			<S.LoginFooter>
				<S.LoginFooterWrap>
					<S.findText>아이디 찾기</S.findText>
					<S.findText>비밀번호 찾기</S.findText>
					<S.signInText onClick={onClickSignIn}>회원가입</S.signInText>
				</S.LoginFooterWrap>
			</S.LoginFooter>
		</div>
	);
}

export default Login;
