import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 852px;
  background: none;
`;


export const Title = styled.div`
  positon: relative;
  width: 333px;
  height: 347px;
  flex-shrink: 0;
  padding-top: 100px;
  border-radius: 347px;
  margin-left: 30px;
  margin-top: 100px;
`;

export const Box= styled.div`=
  padding-top: 100px;
  margin-top: 100px;
  width: 333px;
  height: 347px;
  flex-shrink: 0;
  z-index: 900;
`;

export const Button = styled.button`
  display: flex;
  position: absolute;
  z-index: 10; 
  margin-top: 450px;
  width: 334px;
  height: 45px;
  flex-shrink: 0;
  border-radius: 10px;
  background: linear-gradient(90deg, #edd719 0%, #a7faf0 100%);
  box-shadow: 0px 0px 4px 2px rgba(76, 75, 75, 0.25);
  cursor: pointer;
  border: none;
`;

export const ButtonText = styled.div`
  display: flex;
  position: relative;
  margin-left: 80px;
  margin-top: 9px;
  color: #000;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-family: "Gothic A1";
  font-size: 18px;
  font-style: normal;
  font-weight: 550;
  line-height: normal;
`;

export const Image = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
`;