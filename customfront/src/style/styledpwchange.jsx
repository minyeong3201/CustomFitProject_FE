import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 852px;
  margin-top: 0px;
  background: #fff;
`;

export const Header = styled.div`
  position: fixed;
  background: #fff;
  width: 393px;
  height: 50px;
  z-index: 2;
  #back {
    cursor: pointer;
  }
  #logo {
    display: absolute;
    margin-top: 8px;
    cursor: pointer;
  }
  #alarm {
    display: absolute;
    margin-top: 3px;
    margin-left: 305px;
    cursor: pointer;
  }
  #menu {
    display: absolute;
    margin-top: 5px;
    margin-left: 343px;
    cursor: pointer;
  }
`;

export const Border = styled.div`
  position: fixed;
  border-bottom: 1.5px solid black;
  width: 393px;
  padding-bottom: 2px;
`;

export const Name = styled.div`
  text-align: left;
  position: absolute;
  left: 169px;
  top: 121px;
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Kit = styled.div`
  top: 255px;
  left: 38px;
  position: absolute;
  color: #000;
  font-family: "Gothic A1";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
  letter-spacing: -0.22px;
`;

export const Check = styled.div`
  top: 250px;
  left: 38px;
  position: absolute;
  color: #000;
  font-family: "Gothic A1";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.143px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 393px;
  height: 275px;
  flex-shrink: 0;
  background: #fff;
`;

export const Box = styled.div`
  margin-top: 10px;
  margin-left: 30px;
  width: 345px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

export const Button = styled.div`
  margin-top: 15px;
  margin-left: 43px;
  width: 328px;
  height: 45px;
  box-shadow: 0px 0px 4px 2px rgba(76, 75, 75, 0.25);
  cursor: pointer;
  border: none;
  border-radius: 10px;
  background: #fff9c2;
  width: 315px;
  height: 59.009px;
  flex-shrink: 0;
`;

export const ButtonText = styled.div`
  display: flex;
  position: relative;
  color: #000;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top: 18px;
  font-family: "Gothic A1";
  font-size: 15px;
  font-style: normal;
  font-weight: 550;
  line-height: normal;
`;

export const InputBlank = styled.div`
  margin-top: 50px;
  margin-left: 42px;
  margin-bottom: 20px;
  width: 315px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
  input {
    border: none;
    outline: none;
    width: 273px;
    margin-top: 18px;
    margin-left: -15px;
    color: #000;
    font-family: "Gothic A1";
    font-size: 15px;
    font-style: normal;
    font-weight: 250;
    line-height: 150%; /* 19.5px */
    letter-spacing: -0.143px;
    background: none;
  }
`;

export const Label = styled.div`
  display: flex;
  position: relative;
  margin-top: 220px;
  margin-left: 20px;
  color: #000;
  font-size: 18px;
  font-weight: 600;
  padding-left: 20px;
`;
