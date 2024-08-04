import React from "react";
import { useNavigate } from "react-router-dom";
import * as p1 from "../style/styledpwchange1";

const Pwchange1 = () => {
  const navigate = useNavigate();

  const goMain2 = () => {
    navigate(`/Main2`);
  };

  return (
    <p1.Container>
      <p1.Header>
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
      </p1.Header>



      <p1.Kit>
        링크가 전송되었습니다.<br/>
        <p1.Check><span>메일로 이동해 비밀번호 변경을 진행해 주세요!</span></p1.Check>
      </p1.Kit>

      <img
          id="success"
          src={`${process.env.PUBLIC_URL}/logo/success.svg`}
          alt="success"
          style={{
            position: "absolute",  
            top: "300px",           
            left: "85px",         
          }}
        /> 

    </p1.Container>
  );
};

export default Pwchange1;