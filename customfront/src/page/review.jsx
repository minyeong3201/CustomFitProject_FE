import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import * as r from "../style/styledreview";

const Review = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [box2Items, setBox2Items] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [reviewText, setReviewText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const goMain2 = () => {
    navigate(`/Main2`);
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

  // 사용자 정보를 가져오는 함수
  const fetchUserInfo = async () => {
    try {
      const token = localStorage.getItem("token"); // 로그인 후 저장된 토큰을 가져옵니다.
      const response = await axios.get("http://127.0.0.1:8000/myPage/profile", {
        headers: {
          Authorization: `Token ${token}`, // Authorization 헤더에 토큰을 포함합니다.
        },
      });
      setUserInfo(response.data);
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  // 사용자 정보를 가져오는 useEffect
  useEffect(() => {
    fetchUserInfo();
  }, []);

  // 추천 제품을 가져오는 useEffect
  useEffect(() => {
    const fetchRecommendedProducts = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found");
        }

        const config = {
          headers: {
            Authorization: `Token ${token}`,
          },
        };

        const response = await axios.get(
          "http://127.0.0.1:8000/myPage/recommended-products/",
          config
        );
        const products = response.data.map((product) => ({
          id: product.recommendedProduct_id,
          name: product.product_name,
        }));
        setBox2Items(products);
        setLoading(false);
      } catch (err) {
        if (err.message === "No token found") {
          alert("토큰이 없습니다. 로그인이 필요합니다.");
          navigate("/login");
        } else if (err.response && err.response.status === 401) {
          console.error("Authentication error: Unauthorized");
          setError(new Error("인증 오류: 로그인이 필요합니다."));
        } else {
          console.error("An error occurred:", err.message);
          setError(err);
        }
        setLoading(false);
      }
    };

    fetchRecommendedProducts();
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const goReviewcheck1 = () => {
    if (selectedProduct && reviewText && selectedImage) {
      navigate(`/Reviewcheck1`, {
        state: { product: selectedProduct, review: reviewText, selectedImage },
      });
    } else {
      alert("제품을 선택 후 버튼을 누르고 리뷰를 작성해주세요.");
    }
  };

  const handleImageClick = (imageType) => {
    setSelectedImage(imageType);
  };

  return (
    <r.Container>
      <r.Header>
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
        <r.Border>
          <div></div>
        </r.Border>
      </r.Header>

      {isMenuOpen && (
        <>
          <r.Backdrop onClick={closeMenu} />
          <r.DropdownMenu>
            <r.DropdownItem onClick={goMypage}>
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
            </r.DropdownItem>
            <r.DropdownItem onClick={goReview}>
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
            </r.DropdownItem>
            <r.DropdownItem onClick={goMain0}>
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
            </r.DropdownItem>
            <r.DropdownItem onClick={goLogin}>
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
            </r.DropdownItem>
          </r.DropdownMenu>
        </>
      )}

      <r.Top>리뷰 작성하기</r.Top>

      <r.Body>
        <r.Box>
          <r.Kit>후기를 작성할 제품을 선택해 주세요.</r.Kit>
          <r.Box2>
            {box2Items.map((item) => (
              <r.Keywordd
                key={item.id}
                onClick={() => setSelectedProduct(item)}
              >
                <r.SmallBox5>
                  <span>{item.name}</span>
                </r.SmallBox5>
              </r.Keywordd>
            ))}
          </r.Box2>
        </r.Box>

        <r.Under>
          {userInfo ? (
            `${userInfo.first_name}님!`
          ) : (
            "Loading user information..."
          )}
          <br />
          {selectedProduct
            ? `[${selectedProduct.name}]은 어떠셨어요?`
            : "[제품명]은 어떠셨어요?"}
        </r.Under>

        <r.Button2>
          <img
            id="good"
            src={`${process.env.PUBLIC_URL}/logo/good.svg`}
            alt="good"
            width="65px"
            style={{
              border: selectedImage === "good" ? "2px solid blue" : "none",
            }}
            onClick={() => handleImageClick("good")}
          />
          <img
            id="bad"
            src={`${process.env.PUBLIC_URL}/logo/bad.svg`}
            alt="bad"
            width="65px"
            style={{
              border: selectedImage === "bad" ? "2px solid blue" : "none",
            }}
            onClick={() => handleImageClick("bad")}
          />
        </r.Button2>

        <r.InputBlank>
          <input
            type="text"
            placeholder="텍스트 리뷰를 작성해 주세요."
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
        </r.InputBlank>

        <r.Button onClick={goReviewcheck1}>
          <r.ButtonText>저장하기</r.ButtonText>
        </r.Button>
      </r.Body>
    </r.Container>
  );
};

export default Review;