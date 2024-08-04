import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import * as z from "../style/styledmain3";

const Main3 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { recommendedProduct } = location.state || {}; // 추천 상품 정보 가져오기

  const [rating, setRating] = useState(0);
  const [firstName, setFirstName] = useState(""); // 사용자 이름 상태 추가
  const [userInfo, setUserInfo] = useState(null); // 사용자 정보 상태 추가
  const [userError, setUserError] = useState(null); // 사용자 정보 에러 상태 추가
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const goMain0 = () => {
    navigate(`/Main0`);
  };

  const goAlarm1 = () => {
    navigate(`/Alarm1`);
  };

  const goMypage = () => {
    navigate(`/Mypage`);
  };

  const goReview = () => {
    navigate(`/Review`);
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

  const goMain2 = () => {
    navigate(`/Main2`);
  };

  const handleStarClick = (value) => {
    setRating(value);
  };

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

  // 질병 이름 매핑
  const diseaseMapping = {
    diabetes: "당뇨",
    obesity: "비만",
    muscle_loss: "근손실",
    hypertension: "고혈압",
  };

  // 질병에 따른 <z.Stext> 텍스트 매핑
  const diseaseStextMapping = {
    diabetes: "당류함량",
    obesity: "칼로리",
    muscle_loss: "단백질 함량",
    hypertension: "나트륨 함량",
  };

  // 사용자 정보에서 질병 이름을 변환
  const getDiseaseName = (diseaseKey) => {
    return diseaseMapping[diseaseKey] || diseaseKey;
  };

  // 사용자 정보에서 <z.Stext>의 텍스트를 결정
  const getStextLabel = (diseaseKey) => {
    return diseaseStextMapping[diseaseKey] || "정보";
  };

  useEffect(() => {
    fetchUserInfo(); // 컴포넌트가 마운트될 때 사용자 정보를 가져옵니다.
  }, []);


  if (userError) { // 사용자 정보 에러가 있는 경우
    return <div>Error: {userError}</div>;
  }

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  return (
    <z.Container>
      <z.Header>
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
        <z.Border>
          <div></div>
        </z.Border>
      </z.Header>

      {isMenuOpen && (
        <>
          <z.Backdrop onClick={closeMenu} />
          <z.DropdownMenu>
            <z.DropdownItem onClick={goMypage}>
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
            </z.DropdownItem>
            <z.DropdownItem onClick={goReview}>
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
            </z.DropdownItem>
            <z.DropdownItem onClick={goMain0}>
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
            </z.DropdownItem>
            <z.DropdownItem onClick={goLogin}>
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
            </z.DropdownItem>
          </z.DropdownMenu>
        </>
      )}

      <z.Ybox>
        <z.Top>
          {userInfo.first_name}님의 건강 기준에
          <br /> 가장 적합한 제품이에요!
        </z.Top>
        <z.Keyword>
          <z.SmallBox>#{getDiseaseName(userInfo.disease)}</z.SmallBox>
        </z.Keyword>

        <z.Wbox>
          <z.Text>{recommendedProduct?.product_name || "제품명입니다"}</z.Text>
          <z.Stext>{getStextLabel(userInfo.disease)}</z.Stext>
          <z.Ntext>{recommendedProduct?.protein || "N"}g</z.Ntext>
        </z.Wbox>
        <z.Otext>[{getDiseaseName(userInfo.disease)}] 선택한 다른 회원들의 의견이에요!</z.Otext>
      </z.Ybox>

      <z.Sbox>
        <z.Button2>
          <img
            id="ylogo"
            src={`${process.env.PUBLIC_URL}/logo/good10.svg`}
            alt="logo"
            width="65px"
          />
          <img
            id="ylogo"
            src={`${process.env.PUBLIC_URL}/logo/bad10.svg`}
            alt="logo"
            width="65px"
          />
        </z.Button2>
        <z.Otext>맞춤의 추천 서비스에 만족하시나요?</z.Otext>
        <z.Explain>
          만족도를 체크해 주시면, 추천 알고리즘을 정비하는 데 도움이 돼요!
          <br />
          {firstName}님의 만족도에 기반하여
          더 좋은 서비스를 제공할게요!
        </z.Explain>
        <z.Star>
          {[1, 2, 3, 4, 5].map((value) => (
            <img
              key={value}
              className="star"
              src={
                rating >= value
                  ? `${process.env.PUBLIC_URL}/logo/fullstar.svg`
                  : `${process.env.PUBLIC_URL}/logo/star.svg`
              }
              onClick={() => handleStarClick(value)}
              alt={`별 ${value}개`}
              style={{
                cursor: "pointer",
                width: "44px",
                height: "43px",
                margin: "2px",
              }}
            />
          ))}
        </z.Star>
        <z.Button onClick={goMain2}>
          <z.ButtonText>만족도 결과 보내기</z.ButtonText>
        </z.Button>
      </z.Sbox>
    </z.Container>
  );
};

export default Main3;