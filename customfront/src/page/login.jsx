import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as h from "../style/styledlogin";

const Login = () => {
  const navigate = useNavigate();

  const LottiePlayer = () => {
    useEffect(() => {
      // 외부 스크립트 로드
      const script = document.createElement("script");
      script.src =
        "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
      script.type = "module";
      document.body.appendChild(script);

      // 스크립트 로드 후 정리
      return () => {
        document.body.removeChild(script);
      };
    }, []);

    return (
      <dotlottie-player
        src="https://lottie.host/8a90597c-f6df-4de5-a72b-a7e8cfb6d37e/lN0eGr8bK9.json"
        background="transparent"
        speed="1"
        style={{ position: "absolute", width: "300px", height: "300px", top: "200px", left: "50px"}}
        loop
        autoplay
      ></dotlottie-player>
    );
  };

  const goMain = () => {
    navigate(`/main`);
  };

  const goMembership = () => {
    navigate(`/membership`);
  };

  return (
    <h.Container>
       <h.Title>
         <h.Box>
         </h.Box>
       </h.Title>
      <img
            id="logintitle"
            src={`${process.env.PUBLIC_URL}/logo/logintitle.svg`}
            alt="logintitle"
            style={{
              position: "absolute",
              top: "8px",
              left: "8px",
              cursor: "pointer",
            }}
            onClick={() => navigate(-1)}
          />
      <LottiePlayer />

      <h.InsertA>
        <input
          type="text"
          id="Id"
          placeholder="ID"
          style={{ outline: "none" }}
        ></input>
      </h.InsertA>
      <h.InsertB>
        <input
          type="text"
          id="Pw"
          placeholder="PASSWORD"
          style={{ outline: "none" }}
        ></input>
      </h.InsertB>

      <h.LoginBox onClick={goMain}>
        <div id="LoginText" style={{ cursor: "pointer" }}>
          로그인
        </div>
      </h.LoginBox>

      <h.MembershipBox onClick={goMembership}>
        <div id="MembershipText" style={{ cursor: "pointer" }}>
          회원가입
        </div>
      </h.MembershipBox>
    </h.Container>
  );
};

export default Login;
