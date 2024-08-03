import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as a3 from "../style/styledalarm3";

const Alarm3 = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const goMain = () => {
    navigate(`/`);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <a3.Container>
      <a3.Header>
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
        <a3.Border>
          <div></div>
        </a3.Border>
      </a3.Header>

      <a3.Ybox>
        <a3.Top>
          <img
            id="alarm3"
            src={`${process.env.PUBLIC_URL}/logo/alarm3.svg`}
            alt="alarm3"
            style={{
              height: "750px"

            }}
          />
        </a3.Top>
      </a3.Ybox>

      {isMenuOpen && (
        <>
          <a3.Backdrop onClick={closeMenu} />
          <a3.DropdownMenu>
            <a3.DropdownItem onClick={() => navigate("/mypage")}>
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
            </a3.DropdownItem>
            <a3.DropdownItem onClick={() => navigate("/myreview")}>
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
            </a3.DropdownItem>
            <a3.DropdownItem onClick={goMain}>
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
            </a3.DropdownItem>
          </a3.DropdownMenu>
        </>
      )}
    </a3.Container>
  );
};

export default Alarm3;
