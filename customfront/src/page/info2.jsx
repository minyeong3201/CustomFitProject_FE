import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as cc from "../style/styledchangeinfo2";

const Info2 = () => {
  const navigate = useNavigate();
  const [selectedBox, setSelectedBox] = useState(null); // 클릭된 박스의 인덱스를 관리
  const [userInfo, setUserInfo] = useState(null); // 사용자 정보를 관리
  const [userError, setUserError] = useState(null); // 사용자 정보 에러를 관리
  const [loading, setLoading] = useState(false); // 로딩 상태를 관리
  const [apiError, setApiError] = useState(null); // API 에러를 관리

  useEffect(() => {
    fetchUserInfo(); // 컴포넌트가 마운트될 때 사용자 정보를 가져오는 함수 호출
  }, []);

  // 사용자 정보를 가져오는 함수
  const fetchUserInfo = async () => {
    setLoading(true); // 로딩 시작
    try {
      const token = localStorage.getItem('token'); // 로그인 후 저장된 토큰을 가져옵니다.
      if (!token) {
        throw new Error('로그인 토큰이 없습니다.');
      }

      const response = await axios.get('http://127.0.0.1:8000/myPage/profile', {
        headers: {
          'Authorization': `Token ${token}`  // Authorization 헤더에 토큰을 포함합니다.
        }
      });

      console.log('사용자 정보:', response.data); // 디버그 로그 추가
      setUserInfo(response.data); // 사용자 정보 저장
    } catch (error) {
      console.error('사용자 정보 가져오기 오류:', error.message);
      setUserError(error.message); // 에러 메시지 설정
    } finally {
      setLoading(false); // 로딩 종료
    }
  };

  const goInfo3 = () => {
    navigate(`/info3`);
  };

  // 성별을 업데이트하는 함수
  const updateGender = async (gender) => {
    setLoading(true); // 로딩 시작
    try {
      const token = localStorage.getItem('token'); // 로그인 후 저장된 토큰을 가져옵니다.
      if (!token) {
        throw new Error('로그인 토큰이 없습니다.');
      }
  
      const response = await axios.put(
        'http://127.0.0.1:8000/myPage/update/gender/', // API 엔드포인트
        { gender: gender }, // 요청 데이터: { gender: "여성" } (문자열)
        {
          headers: {
            'Authorization': `Token ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );
  
      console.log('성별 변경 응답:', response.data); // 디버그 로그 추가
      setUserInfo({ ...userInfo, gender }); // 사용자 정보 업데이트
    } catch (error) {
      console.error('성별 변경 오류:', error.message);
      console.error('응답 데이터:', error.response?.data); // 서버에서 반환하는 에러 메시지
      setApiError(error.message); // 에러 메시지 설정
    } finally {
      setLoading(false); // 로딩 종료
    }
  };

  // 클릭된 박스의 상태를 업데이트하는 함수
  const handleBoxClick = (index) => {
    setSelectedBox(index); // 클릭된 박스의 인덱스를 상태로 저장
    const genderRanges = [
      "Female",  // <- 서버가 인식하는 형식에 맞추어야 함
      "Male",
    ];
    updateGender(genderRanges[index]); // 선택된 성별로 업데이트
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (userError) { // 사용자 정보 에러가 있는 경우
    return <div>Error: {userError}</div>;
  }

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  if (apiError) { // API 에러가 있는 경우
    return <div>Error: {apiError}</div>;
  }

  return (
    <cc.Container>
      <cc.Header>
        <img
          id="back"
          src={`${process.env.PUBLIC_URL}/logo/backbtn2.svg`}
          alt="back button"
          style={{
            position: "absolute",
            top: "8px",
            left: "8px",
            cursor: "pointer",
          }}
          onClick={() => navigate(-1)}
        />
      </cc.Header>

      <cc.Ybox>
        <cc.Top>
          나에게{" "}
          <span style={{ fontWeight: "bold", fontSize: "20px" }}>
            딱 맞는 맞춤 비교
          </span>
          를 위해
          <br />
          <span style={{ fontWeight: "bold", fontSize: "20px" }}>
            키워드 선택
          </span>
          을 진행해 주세요!
        </cc.Top>

        <cc.Text>
          <br />
          <br />
          🟠 <span>성별</span>을 선택해 주세요.
        </cc.Text>
      </cc.Ybox>

      <cc.Body>
        <cc.Box>
          <cc.Box2>
            {["여성", "남성"].map((gender, index) => (
              <cc.Keywordd key={index}>
                <cc.SmallBox5
                  isClicked={selectedBox === index} // 클릭 상태에 따라 스타일 적용
                  onClick={() => handleBoxClick(index)} // 클릭 시 상태 업데이트
                >
                  <span style={{ fontWeight: "bold", fontSize: "15px" }}>
                    {gender}
                  </span>
                </cc.SmallBox5>
              </cc.Keywordd>
            ))}
          </cc.Box2>
        </cc.Box>

        <cc.Button>
          <img
            id="next"
            src={`${process.env.PUBLIC_URL}/logo/next.svg`}
            alt="next"
            onClick={goInfo3}
          />
        </cc.Button>
      </cc.Body>
    </cc.Container>
  );
};

export default Info2;