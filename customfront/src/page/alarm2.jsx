import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as y from "../style/styledalarm2";

const Alarm2 = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const goMain = () => {
    navigate(`/`);
  };

  const goChangeinfo = () => {
    navigate(`/changeinfo`);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <y.Container>
      <y.Header>
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
          onClick={goMain}
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
            right: "8px",
            cursor: "pointer",
          }}
          onClick={toggleMenu}
        />
        <y.Border>
          <div></div>
        </y.Border>
      </y.Header>

      <y.Ybox>
        <y.Top>
          <img
            id="alarm2"
            src={`${process.env.PUBLIC_URL}/logo/alarm2.svg`}
            alt="alarm2"
            style={{
              height: "750px"

            }}
          />
        </y.Top>
      </y.Ybox>

      <y.Body>
          <y.Button>
            <y.ButtonText onClick={goChangeinfo}>키워드 변경하러 가기</y.ButtonText>
          </y.Button>
      </y.Body>

      {isMenuOpen && (
        <>
          <y.Backdrop onClick={closeMenu} />
          <y.DropdownMenu>
            <y.DropdownItem onClick={() => navigate("/mypage")}>
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
            </y.DropdownItem>
            <y.DropdownItem onClick={() => navigate("/myreview")}>
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
            </y.DropdownItem>
            <y.DropdownItem onClick={goMain}>
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
            </y.DropdownItem>
          </y.DropdownMenu>
        </>
      )}
    </y.Container>
  );
};

export default Alarm2;
