import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as q from "../style/styledalarm1";

const Alarm1 = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const goMain0 = () => {
    navigate(`/Main0`);
  };

  const goMain2 = () => {
    navigate(`/Main2`);
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

  const goAlarm2 = () => {
    navigate(`/Alarm2`);
  };

  const goAlarm3 = () => {
    navigate(`/Alarm3`);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Box2의 아이템 상태 관리
  const box2Items = [
    { id: 1, text: "공지 제목입니다."},
    { id: 2, text: "공지 제목입니다."},
  ];

  // 아이템 클릭 시 이동할 페이지를 결정하는 함수
  const handleItemClick = (id) => {
    if (id === 1) {
      goAlarm2();
    } else if (id === 2) {
      goAlarm3();
    }
  };

  return (
    <q.Container>
      <q.Header>
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
            right: "8px",
            cursor: "pointer",
          }}
          onClick={toggleMenu}
        />
        <q.Border>
          <div></div>
        </q.Border>
      </q.Header>

      {isMenuOpen && (
        <>
          <q.Backdrop onClick={closeMenu} />
          <q.DropdownMenu>
            <q.DropdownItem onClick={goMypage}>
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
            </q.DropdownItem>
            <q.DropdownItem onClick={goReview}>
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
            </q.DropdownItem>
            <q.DropdownItem onClick={goMain0}>
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
            </q.DropdownItem>
            <q.DropdownItem onClick={goLogin}>
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
            </q.DropdownItem>
          </q.DropdownMenu>
        </>
      )}

      <q.Ybox>
        <q.Top>알림 확인하기</q.Top>
      </q.Ybox>

      <q.Body>
        <q.Box>
          <q.Box2>
            {box2Items.map((item) => (
              <q.Keywordd key={item.id} onClick={() => handleItemClick(item.id)}>
                <q.SmallBox5>
                  <span style={{ fontSize: "13px" }}>{item.text}</span>
                </q.SmallBox5>
              </q.Keywordd>
            ))}
          </q.Box2>
        </q.Box>
      </q.Body>
    </q.Container>
  );
};

export default Alarm1;
