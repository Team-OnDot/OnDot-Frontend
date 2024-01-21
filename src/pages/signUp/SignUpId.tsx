import * as S from '../login/Login.style';
import SignUpForm from '../../components/SignUp/SignUpForm';

function SignUpId(){
    return(
        <div>
            {/*Header*/}
			<S.loginHeader>
				<S.loginWrapper>
					<S.loginHeaderText>회원가입</S.loginHeaderText>
					<S.loginHeaderDot/>
				</S.loginWrapper>
			</S.loginHeader>
            {/*Main*/}
			<SignUpForm/>
        </div>
    );
}

export default SignUpId;