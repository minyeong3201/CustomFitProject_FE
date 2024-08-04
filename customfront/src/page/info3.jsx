import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as dd from "../style/styledinfo3";

const Info3 = () => {
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

  // 질병 정보를 업데이트하는 함수
  const updateDisease = async (disease) => {
    setLoading(true); // 로딩 시작
    try {
      const token = localStorage.getItem('token'); // 로그인 후 저장된 토큰을 가져옵니다.
      if (!token) {
        throw new Error('로그인 토큰이 없습니다.');
      }

      const response = await axios.put('http://127.0.0.1:8000/myPage/update/disease/', 
      { disease: disease },
      {
        headers: {
          'Authorization': `Token ${token}`,  // Authorization 헤더에 토큰을 포함합니다.
          'Content-Type': 'application/json'
        }
      });

      console.log('질병 업데이트 성공:', response.data); // 디버그 로그 추가
      // 여기서 추가적인 상태 업데이트나 화면 전환을 수행할 수 있습니다.
    } catch (error) {
      console.error('질병 업데이트 오류:', error.message);
      setApiError(error.message); // 에러 메시지 설정
    } finally {
      setLoading(false); // 로딩 종료
    }
  };

  // 클릭된 박스의 상태를 업데이트하는 함수
  const handleBoxClick = (index) => {
    setSelectedBox(index); // 클릭된 박스의 인덱스를 상태로 저장
    const diseases = ["diabetes", "muscle_loss", "obesity", "hypertension"];
    updateDisease(diseases[index]); // 선택된 질병으로 업데이트
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

  const goInfo4 = () => {
    navigate(`/info4`);
  };

  return (
    <dd.Container>
      <dd.Header>
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
      </dd.Header>

      
      <dd.Ybox>
        <dd.Top>
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
        </dd.Top>

        <dd.Text>
          <br />
          <br />
          🟡 <span>관리가 필요한 부분을 선택해 주세요.</span>
        </dd.Text>
      </dd.Ybox>

      <dd.Body>
        <dd.Box>
          <dd.Box2>
            {[
              { name: "당뇨", position: { top: "50px", left: "9px" } },
              { name: "근손실", position: { top: "50px", left: "190px" } },
              { name: "비만", position: { top: "250px", left: "9px" } },
              { name: "고혈압", position: { top: "250px", left: "190px" } },
            ].map((item, index) => (
              <dd.Keywordd key={index}>
                <dd.SmallBox5
                  isClicked={selectedBox === index}
                  onClick={() => handleBoxClick(index)}
                  style={{
                    position: "absolute",
                    top: item.position.top,
                    left: item.position.left,
                  }}
                >
                  <span style={{ fontWeight: "bold", fontSize: "15px" }}>
                    {item.name}
                  </span>
                </dd.SmallBox5>
              </dd.Keywordd>
            ))}
          </dd.Box2>
        </dd.Box>

        <dd.Button>
          <img
            id="next"
            src={`${process.env.PUBLIC_URL}/logo/next.svg`}
            alt="next"
            onClick={goInfo4}
          />
        </dd.Button>
      </dd.Body>
    </dd.Container>
  );
};

export default Info3;