import {GoogleLogin} from "@react-oauth/google";
import {GoogleOAuthProvider} from "@react-oauth/google";

const GoogleLoginButton = () => {
    const clientId = '431446731528-ladg0ii81bi2o2vboa00ntda3qaklb5a.apps.googleusercontent.com'
    return (
        <>
            <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin
                    onSuccess={(res:any) => {
                        console.log(res);
                    }}

                />
            </GoogleOAuthProvider>
        </>
    );
};

export default GoogleLoginButton;