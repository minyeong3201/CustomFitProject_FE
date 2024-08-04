import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as e from "../style/styledreviewcheck1";

const Reviewcheck1 = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { product, review, selectedImage } = location.state || {};
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // 로컬 스토리지에서 리뷰를 가져오기
    const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews(storedReviews);
  }, []);

  useEffect(() => {
    if (product && review && selectedImage) {
      // 기존 리뷰를 업데이트
      setReviews((prevReviews) => {
        const updatedReviews = prevReviews.map((r) =>
          r.product.id === product.id ? { product, review, selectedImage } : r
        );
        localStorage.setItem("reviews", JSON.stringify(updatedReviews));
        return updatedReviews;
      });
    }
  }, [product, review, selectedImage]);

  const goMain0 = () => {
    navigate(`/Main0`);
  };

    const goMain2 = () => {
    navigate(`/Main2`);
  };

  const goReview = () => {
    navigate(`/Review`);
  };

  const goReviewcheck2 = (review) => {
    navigate(`/Reviewcheck2`, { state: review });
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





  return (
    <e.Container>
      <e.Header>
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
        <e.Border>
          <div></div>
        </e.Border>
      </e.Header>

      {isMenuOpen && (
        <>
          <e.Backdrop onClick={closeMenu} />
          <e.DropdownMenu>
            <e.DropdownItem onClick={goMypage}>
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
            </e.DropdownItem>
            <e.DropdownItem onClick={goReview}>
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
            </e.DropdownItem>
            <e.DropdownItem onClick={goMain0}>
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
            </e.DropdownItem>
            <e.DropdownItem onClick={goLogin}>
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
            </e.DropdownItem>
          </e.DropdownMenu>
        </>
      )}

      <e.Ybox>
        <e.Top>나의 리뷰 확인하기</e.Top>
      </e.Ybox>

      <e.Body>
        {reviews.map((review, index) => (
          <e.Box key={index}>
            <e.Box2>
              <e.Keywordd
                onClick={() => goReviewcheck2(review)}
                style={{ cursor: "pointer" }}
              >
                <e.SmallBox5>
                  <span style={{ fontWeight: "bold", fontSize: "15px" }}>
                    [{review.product.name}]
                  </span>
                  <span style={{ fontSize: "13px" }}>{review.review}</span>
                  <e.Click type={review.selectedImage}>
                    <img
                      id="review-image"
                      src={
                        review.selectedImage === "good"
                          ? `${process.env.PUBLIC_URL}/logo/good2.png`
                          : review.selectedImage === "bad"
                          ? `${process.env.PUBLIC_URL}/logo/bad2.png`
                          : `${process.env.PUBLIC_URL}/logo/default.png`
                      }
                      alt={review.selectedImage || "default"}
                    />
                  </e.Click>
                </e.SmallBox5>
              </e.Keywordd>
            </e.Box2>
          </e.Box>
        ))}

        <e.Button onClick={goReview}>
          <e.ButtonText>새로운 리뷰 작성하기</e.ButtonText>
        </e.Button>
      </e.Body>
    </e.Container>
  );
};

export default Reviewcheck1;