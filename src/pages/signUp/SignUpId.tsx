import * as S from '../login/Login.style';
import SignUpForm from '../../components/signUp/SignUpForm';

function SignUpId(){
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
			<SignUpForm/>
        </div>
    );
}

export default SignUpId;