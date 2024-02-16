import * as S from '../login/Login.style';
import SignUpGoogleForm from '../../components/signUp/signupGoogle/SignupGoogleForm';

function SignUpGoogle(){
    return(
        <div>
            {/*Header*/}
			<S.LoginHeader>
				<S.LoginWrapper>
					<S.LoginHeaderText>회원가입</S.LoginHeaderText>
					<S.LoginHeaderDot/>
				</S.LoginWrapper>
			</S.LoginHeader>
			
            {/*Main*/}
			<SignUpGoogleForm/>
        </div>
    );
}

export default SignUpGoogle;