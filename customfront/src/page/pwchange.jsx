import React from "react";
import { useNavigate } from "react-router-dom";
import * as p from "../style/styledpwchange";

const Pwchange = () => {
  const navigate = useNavigate();

  const goPwchange1 = () => {
    navigate(`/Pwchange1`);
  };

  return (
    <p.Container>
      <p.Header>
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
      </p.Header>
    <p.Body>
      <p.Label>비밀번호 변경하기</p.Label>
      <p.Check>계정 생성시 사용한 E Mail을 입력해주세요.</p.Check>
          <p.InputBlank>
          <input
              type="email"
              name="email"
              placeholder="Email 입력하기"
            />
          </p.InputBlank>
        <p.Button onClick={goPwchange1}>
          <p.ButtonText>E Mail로 비밀번호 변경 링크 보내기</p.ButtonText>
        </p.Button>
      </p.Body>
    </p.Container>
  );
};

export default Pwchange;
