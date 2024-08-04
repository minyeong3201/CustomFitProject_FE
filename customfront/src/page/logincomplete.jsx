import React from "react";
import { useNavigate } from "react-router-dom";
import * as l3 from "../style/styledlogincomplete";

const Logincomplete = () => {
  const navigate = useNavigate();

  const goLogin2 = () => {
    navigate(`/login2`);
  };

  return (
    <l3.Container>
      <l3.Title>
        <l3.Box>
          <img
            id="lc"
            src={`${process.env.PUBLIC_URL}/logo/lc.svg`}
            alt="lc"
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
            }}
          />
          <l3.Button onClick={goLogin2}>
            <l3.ButtonText>🔥 키워드 선택하기</l3.ButtonText>
          </l3.Button>
        </l3.Box>
      </l3.Title>
    </l3.Container>
  );
};

export default Logincomplete;