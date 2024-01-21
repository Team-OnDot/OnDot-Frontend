import * as S from './Login.style';
import LoginForm from '../../components/Login/LoginForm';

function Login() {
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
				<S.findText>아이디 찾기</S.findText>
				<S.findText>비밀번호 찾기</S.findText>
				<S.signInText>회원가입</S.signInText>
			</S.LoginFooter>
		</div>
	);
}

export default Login;