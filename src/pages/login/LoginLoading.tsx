import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const LoginLoading = () => {
    const navigate = useNavigate();
  
    // 이미 가입한 유저일 시 : 메인 페이지로 이동
    const handleHome = () => {
      navigate("/home");
      window.location.reload();
    };
  
    // 처음 가입한 유저일 시 : 닉네임 설정 페이지로 이동
    const handleNickName = () => {
      navigate("/signup");
      window.location.reload();
    };
  
    // 현재 url에서 code 부분 추출
    const code = new URL(window.location.href).searchParams.get("code");
    
    const handleLoginPost = async (code:string) => {
      const data = {
        code: code,
      };
      try {
        const res = await axios.post(
          "/api/v1/oauth2/google",
          data,
        );
         // 토큰 localstorage에 저장
         const accessToken = res.data.accessToken;
         localStorage.setItem("bagtoken", accessToken);
         // 신규/기존 회원 여부에 따라 페이지 이동
         res.data.isExistingMember ? handleHome() : handleNickName();
      } catch (error) {
        console.log(error);
      }
    };
    
  
    useEffect(() => {
      if (code) {
        handleLoginPost(code);
      } else {
        console.log("로그인 재시도하세요.");
      }
    }, [code, navigate]);
  
    return (
      <div>
        <div>로그인중입니다...</div>
      </div>
    );
  };

export default LoginLoading;