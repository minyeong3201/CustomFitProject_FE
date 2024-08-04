import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import * as k from "../style/styledmain0";

const Main0 = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const goAlarm1 = () => {
    navigate(`/Alarm1`);
  };

  const goMain2 = () => {
    navigate(`/Main2`);
  };

  const goReview = () => {
    navigate(`/Review`);
  };

  const goMypage = () => {
    navigate(`/Mypage`);
  };

  const goLogin = () => {
    navigate(`/Login`);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const [firstName, setFirstName] = useState(""); // 사용자 이름 상태 추가
  const [userInfo, setUserInfo] = useState(null); // 사용자 정보 상태 추가
  const [userError, setUserError] = useState(null); // 사용자 정보 에러 상태 추가

  useEffect(() => {
    // 로컬 스토리지에서 first_name 가져오기
    const storedFirstName = localStorage.getItem("first_name");
    console.log("로컬 스토리지에서 가져온 first_name:", storedFirstName); // 콘솔 로그 추가
    if (storedFirstName) {
      setFirstName(storedFirstName);
    }
  }, []);

  // 사용자 정보를 가져오는 함수
  const fetchUserInfo = async () => {
    try {
      const token = localStorage.getItem("token"); // 로그인 후 저장된 토큰을 가져옵니다.
      if (!token) {
        throw new Error("로그인 토큰이 없습니다.");
      }

      const response = await axios.get("http://127.0.0.1:8000/myPage/profile", {
        headers: {
          Authorization: `Token ${token}`, // Authorization 헤더에 토큰을 포함합니다.
        },
      });

      console.log("사용자 정보:", response.data); // 디버그 로그 추가
      setUserInfo(response.data);
    } catch (error) {
      console.error("사용자 정보 가져오기 오류:", error.message);
      setUserError(error.message); // 에러 메시지 설정
    }
  };

  useEffect(() => {
    fetchUserInfo(); // 컴포넌트가 마운트될 때 사용자 정보를 가져옵니다.
  }, []);

  const diseaseMapping = {
    diabetes: "당뇨",
    obesity: "비만",
    muscle_loss: "근손실",
    hypertension: "고혈압",
  };

  // 사용자 정보에서 질병 이름을 변환
  const getDiseaseName = (diseaseKey) => {
    return diseaseMapping[diseaseKey] || diseaseKey;
  };

  if (userError) { // 사용자 정보 에러가 있는 경우
    return <div>Error: {userError}</div>;
  }

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  return (
    <k.Container>
      <k.Header>
        <img
          id="back"
          src={`${process.env.PUBLIC_URL}/logo/backbtn.svg`}
          alt="back button"
          style={{
            position: "absolute",
            top: "8px",
            left: "8px",
            cursor: "pointer",
          }}
          onClick={() => navigate(-1)}
        />
        <img
          id="logo"
          src={`${process.env.PUBLIC_URL}/logo/ylogo.svg`}
          alt="logo"
          width="40px"
          onClick={goMain2}
        />
        <img
          id="alarm"
          src={`${process.env.PUBLIC_URL}/logo/alarm.svg`}
          alt="alarm button"
          style={{
            position: "absolute",
            top: "8px",
            left: "8px",
            cursor: "pointer",
          }}
          onClick={goAlarm1}
        />
        <img
          id="menu"
          src={`${process.env.PUBLIC_URL}/logo/menu.svg`}
          alt="menu button"
          style={{
            position: "absolute",
            top: "8px",
            left: "8px",
            cursor: "pointer",
          }}
          onClick={toggleMenu}
        />
        <k.Border>
          <div></div>
        </k.Border>
      </k.Header>

      {isMenuOpen && (
        <>
          <k.Backdrop onClick={closeMenu} />
          <k.DropdownMenu>
            <k.DropdownItem onClick={goMypage}>
              <img
                id="mypage"
                src={`${process.env.PUBLIC_URL}/logo/mypage.svg`}
                alt="mypage"
                style={{
                  position: "absolute",
                  top: "8px",
                  right: "8px",
                  cursor: "pointer",
                }}
                onClick={toggleMenu}
              />
            </k.DropdownItem>
            <k.DropdownItem onClick={goReview}>
              <img
                id="myreview"
                src={`${process.env.PUBLIC_URL}/logo/myreview.svg`}
                alt="myreview"
                style={{
                  position: "absolute",
                  top: "8px",
                  right: "8px",
                  cursor: "pointer",
                }}
                onClick={toggleMenu}
              />
            </k.DropdownItem>
            <k.DropdownItem onClick={goMain2}>
              <img
                id="mainpage"
                src={`${process.env.PUBLIC_URL}/logo/mainpage.svg`}
                alt="mainpage"
                style={{
                  position: "absolute",
                  top: "8px",
                  right: "8px",
                  cursor: "pointer",
                }}
                onClick={toggleMenu}
              />
            </k.DropdownItem>
            <k.DropdownItem onClick={goLogin}>
              <img
                id="logout"
                src={`${process.env.PUBLIC_URL}/logo/logout.svg`}
                alt="logout"
                style={{
                  position: "absolute",
                  right: "8px",
                  cursor: "pointer",
                }}
                onClick={toggleMenu}
              />
            </k.DropdownItem>
          </k.DropdownMenu>
        </>
      )}


      <k.Top>
      {userInfo.first_name}님에게 맞는 <br />
        식품을 찾아볼까요?
      </k.Top>

      <k.Keyword>
        <k.SmallBox>#{getDiseaseName(userInfo.disease)}</k.SmallBox>
      </k.Keyword>

      <k.Button onClick={goMain2}>
          <img
            id="next"
            src={`${process.env.PUBLIC_URL}/logo/search3.svg`}
            alt="next"
          />
        </k.Button>

      <k.Body>
        <k.Box2>
        <k.News>
          <k.Card>
            <img
              id="card"
              src={`${process.env.PUBLIC_URL}/logo/card1.svg`}
              alt="card"
            />
            <img
              id="card"
              src={`${process.env.PUBLIC_URL}/logo/card2.svg`}
              alt="card"
            />
            <img
              id="card"
              src={`${process.env.PUBLIC_URL}/logo/card3.svg`}
              alt="card"
            />
            <img
              id="card"
              src={`${process.env.PUBLIC_URL}/logo/card4.svg`}
              alt="card"
            />
          </k.Card>
        </k.News>
        </k.Box2>
    </k.Body>

        <k.Button2>
           <img
            id="myreview"
            src={`${process.env.PUBLIC_URL}/logo/myreviewbtn.svg`}
            alt="myreview"
            onClick={goReview}
          />
        </k.Button2>

        <k.Buttontwo>
           <img
            id="mypage"
            src={`${process.env.PUBLIC_URL}/logo/mypagebtn.svg`}
            alt="mypage"
            onClick={goMypage}
          />
        </k.Buttontwo>

    </k.Container>
  );
};

export default Main0;