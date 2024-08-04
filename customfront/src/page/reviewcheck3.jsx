import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import * as i from "../style/styledreviewcheck3";

const Reviewcheck3 = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { product, review } = location.state || {};
  const [newReview, setNewReview] = useState(review);
  const [selectedImage, setSelectedImage] = useState(null); // 선택된 이미지 상태 추가

  const goMain2 = () => {
    navigate(`/`);
  };

  const goMain0 = () => {
    navigate(`/Main0`);
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

  const goReviewcheck2 = () => {
    // reviewcheck2로 이동하며 현재 제품 정보와 수정된 리뷰를 전달
    if (product && newReview) {
      navigate(`/Reviewcheck2`, { state: { product, review: newReview, selectedImage } });
    } else {
      alert("제품 정보나 리뷰가 없습니다.");
    }
  };

  const handleReviewChange = (e) => {
    setNewReview(e.target.value);
  };

  const handleImageSelect = (image) => {
    setSelectedImage(image); // 이미지 선택 핸들러
  };

  const saveReview = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error("No token found");
      }

      const csrfTokenMatch = document.cookie.match(/csrftoken=([^;]*)/);
      const csrfToken = csrfTokenMatch ? csrfTokenMatch[1] : '';

      const config = {
        headers: {
          'Authorization': `Token ${token}`,
          'X-CSRFToken': csrfToken,
        }
      };

      const body = {
        "GNB": "G",
        "review": newReview,
        "selectedImage": selectedImage // 선택된 이미지 저장
      };

      await axios.patch(`http://127.0.0.1:8000/myPage/recommended-products/${product.id}/edit/`, body, config);

      // 리뷰 저장 후 Reviewcheck1으로 이동하며 수정된 리뷰를 전달
      navigate(`/Reviewcheck1`, { state: { product, review: newReview, selectedImage } });
    } catch (err) {
      if (err.message === "No token found") {
        alert("토큰이 없습니다. 로그인이 필요합니다.");
        navigate("/login");
      } else {
        console.error("An error occurred:", err.message);
      }
    }
  };

  return (
    <i.Container>
      <i.Header>
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
          onClick={toggleMenu}
        />
        <i.Border>
          <div></div>
        </i.Border>
      </i.Header>

      {isMenuOpen && (
        <>
          <i.Backdrop onClick={closeMenu} />
          <i.DropdownMenu>
            <i.DropdownItem onClick={goMypage}>
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
            </i.DropdownItem>
            <i.DropdownItem onClick={goReview}>
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
            </i.DropdownItem>
            <i.DropdownItem onClick={goMain0}>
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
            </i.DropdownItem>
            <i.DropdownItem onClick={goLogin}>
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
            </i.DropdownItem>
          </i.DropdownMenu>
        </>
      )}

      <i.Top>리뷰 수정하기</i.Top>

      <i.Body>
        <i.Under>
          김세모님! <br />
          [{product.name}]은 어떠셨어요?
        </i.Under>

        <i.Button2>
          <i.ReviewImage
            type='good'
            src={`${process.env.PUBLIC_URL}/logo/good.svg`}
            alt="good"
            onClick={() => handleImageSelect('good')}
            style={{ cursor: 'pointer', border: selectedImage === 'good' ? '2px solid blue' : 'none' }}
          />
          <i.ReviewImage
            type='bad'
            src={`${process.env.PUBLIC_URL}/logo/bad.svg`}
            alt="bad"
            onClick={() => handleImageSelect('bad')}
            style={{ cursor: 'pointer', border: selectedImage === 'bad' ? '2px solid blue' : 'none' }}
          />
        </i.Button2>

        <i.InputBlank>
          <input
            type="text"
            value={newReview}
            onChange={handleReviewChange}
            placeholder="텍스트 리뷰를 작성해 주세요."
          />
        </i.InputBlank>

        <i.Button onClick={saveReview}>
          <i.ButtonText>저장하기</i.ButtonText>
        </i.Button>

        <i.ButtonTwo onClick={goReviewcheck2}>
          <i.ButtonText>수정 취소하기</i.ButtonText>
        </i.ButtonTwo>
      </i.Body>
    </i.Container>
  );
};

export default Reviewcheck3;