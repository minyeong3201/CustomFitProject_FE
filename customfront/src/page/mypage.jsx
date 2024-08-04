import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import * as m from "../style/styledmypage";

const Mypage = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const goMain0 = () => {
    navigate(`/Main0`);
  };

  const goReviewcheck1 = () => {
    navigate(`/Reviewcheck1`);
  };

  const goAlarm1 = () => {
    navigate(`/Alarm1`);
  };

  const goAlarm2 = () => {
    navigate(`/Alarm2`);
  };

  const goAlarm3 = () => {
    navigate(`/Alarm3`);
  };

  const goMain2 = () => {
    navigate(`/`);
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

  // 사용자 정보를 가져오는 함수
  const fetchUserInfo = async () => {
    try {
      const token = localStorage.getItem('token'); // 로그인 후 저장된 토큰을 가져옵니다.
      const response = await axios.get('http://127.0.0.1:8000/myPage/profile', {
        headers: {
          'Authorization': `Token ${token}`  // Authorization 헤더에 토큰을 포함합니다.
        }
      });
      setUserInfo(response.data);
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };

  // 컴포넌트가 마운트될 때 사용자 정보를 가져옵니다.
  useEffect(() => {
    fetchUserInfo();
  }, []);

  const goPwchange = () => {
    navigate(`/pwchange`);
  };

  const goChangeInfo = () => {
    navigate(`/ChangeInfo`);
  };

  const diseaseMapping = {
    diabetes: "당뇨",
    obesity: "비만",
    muscle_loss: "근손실",
    hypertension: "고혈압",
  };

  const getDiseaseName = (diseaseKey) => {
    return diseaseMapping[diseaseKey] || diseaseKey;
  };

  const ageMapping = {
    under_19: "19세 이하",
    "20-29": "20~29세",
    "30-39": "30~39세",
    "40-49": "40~49세",
    "50-59": "50~59세",
    "60-69": "60~69세",
    over_70: "70 이상",
  };

  const genderMapping = {
    Male: "남성",
    Female: "여성",
  };

  const heightMapping = {
    under_149: "149cm 이하",
    "150-154": "150~154cm",
    "155-159": "155~159cm",
    "160-164": "160~164cm",
    "165-169": "165~169cm",
    "170-174": "170~174cm",
    "175-179": "175~179cm",
    over_180: "180cm 이상",
  };

  const weightMapping = {
    under_39: "39kg 이하",
    "40-44": "40~44kg",
    "45-49": "45~49kg",
    "50-54": "50~54kg",
    "55-59": "55~59kg",
    "60-64": "60~64kg",
    "65-69": "65~69kg",
    "70-74": "70~74kg",
    "75-79": "75~79kg",
    "80-84": "80~84kg",
    "85-89": "85~89kg",
    "90-94": "90~94kg",
    "95-99": "95~99kg",
    over_100: "100kg 이상",
  };

  const getDisplayValue = (mapping, key) => {
    return mapping[key] || key;
  };

  // userInfo가 로드되지 않았거나 에러가 발생한 경우 로딩 상태 표시
  if (!userInfo) {
    return <div>Loading...</div>;
  }

  return (
    <m.Container>
      <m.Header>
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
        <m.Border>
          <div></div>
        </m.Border>
      </m.Header>

      {isMenuOpen && (
        <>
          <m.Backdrop onClick={closeMenu} />
          <m.DropdownMenu>
            <m.DropdownItem onClick={goMypage}>
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
            </m.DropdownItem>
            <m.DropdownItem onClick={goReview}>
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
            </m.DropdownItem>
            <m.DropdownItem onClick={goMain0}>
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
            </m.DropdownItem>
            <m.DropdownItem onClick={goLogin}>
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
            </m.DropdownItem>
          </m.DropdownMenu>
        </>
      )}

      <img
        id="profile"
        src={`${process.env.PUBLIC_URL}/logo/profile.svg`}
        alt="profile"
        style={{
          position: "absolute",
          top: "97px",
          left: "48px",
          cursor: "pointer",
          zIndex: "8"
        }}
      />

      <m.Top></m.Top>

      <m.Name>
        {userInfo.first_name} 님
      </m.Name>

      <m.Keyword>
        <m.Wrap>
          <m.SmallOne>#{getDisplayValue(ageMapping, userInfo.age)}</m.SmallOne>
          <m.SmallTwo>#{getDisplayValue(genderMapping, userInfo.gender)}</m.SmallTwo>
        </m.Wrap>
        <m.Wrap2>
          <m.SmallThree>#{getDiseaseName(userInfo.disease)}</m.SmallThree>
          <m.SmallFour>#{getDisplayValue(heightMapping, userInfo.height)}</m.SmallFour>
          <m.SmallFive>#{getDisplayValue(weightMapping, userInfo.weight)}</m.SmallFive>
        </m.Wrap2>
      </m.Keyword>

      <img
        id="pwchange"
        src={`${process.env.PUBLIC_URL}/logo/pwchange.svg`}
        alt="pwchange button"
        style={{
          position: "absolute",
          top: "308px",
          left: "18px",
          cursor: "pointer",
        }}
        onClick={goPwchange}
      />

      <img
        id="keychange"
        src={`${process.env.PUBLIC_URL}/logo/keychange.svg`}
        alt="keychange button"
        style={{
          position: "absolute",
          top: "308px",
          left: "210px",
          cursor: "pointer",
        }}
        onClick={goChangeInfo}
      />

      <m.Kit>
        🔥 후기를 작성하고, 키워드를 강화해요!
      </m.Kit>

      <m.Check onClick={goReviewcheck1}>나의 리뷰 확인하기</m.Check>
      <m.Write onClick={goReview}>리뷰 작성하기</m.Write>

      <m.Body>
        <m.Text>🔔 최근 알림을 확인해 주세요!</m.Text>
        <m.Box onClick={goAlarm2}>키워드를 업데이트 해주세요!</m.Box>
        <m.Box onClick={goAlarm3}>회원 가입을 환영합니다!</m.Box>

        <m.Button onClick={goAlarm1}>
          <m.ButtonImage onClick={goAlarm1}>
            <img src={`${process.env.PUBLIC_URL}/logo/plus.svg`} alt="icon" />
          </m.ButtonImage>
          <m.ButtonText onClick={goAlarm1}>더 많은 알림 확인하기</m.ButtonText>
        </m.Button>
      </m.Body>
    </m.Container>
  );
};

export default Mypage;
