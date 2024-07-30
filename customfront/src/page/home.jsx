import React from "react";
import { useNavigate } from "react-router-dom";
import * as l from "../style/styledhome";

const Home = () => {
  const navigate = useNavigate();

  const goMypage = () => {
    navigate(`/mypage`);
  };


  return (
    <l.Container>
      <l.Header>
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
          onClick={() => navigate(-1)}
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
          onClick={() => navigate(-1)}
        />
        <l.Border>
          <div></div>
        </l.Border>
      </l.Header>


      <l.Top>
        000님에게 맞는 <br />
        식품을 찾아볼까요?
      </l.Top>
      
      <l.Keyword>
        <l.SmallBox>#당뇨</l.SmallBox>
        <l.SmallBox>#체중감소</l.SmallBox>
        <l.SmallBox>#단백질이 좋아</l.SmallBox>
      </l.Keyword>

      <l.InputBlank>
        <img
          id="ylogo"
          src={`${process.env.PUBLIC_URL}/logo/ylogo.svg`}
          alt="logo"
          width="30px"
        />
        <input type="text" placeholder="검색어를 입력하세요." />
        <img
          id="search"
          src={`${process.env.PUBLIC_URL}/logo/search.svg`}
          alt="search button"
          onClick={goMypage}
        />
      </l.InputBlank>

      <l.Kit>
        맞춤 건강 키트
      </l.Kit>

      <l.Body>
        <l.Box>
        </l.Box>
        <l.Button>
          <l.ButtonText>비교하기</l.ButtonText>
        </l.Button>
      </l.Body>
    </l.Container>
  );
};

export default Home;