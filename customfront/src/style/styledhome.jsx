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
  #logo {
    display: absolute;
    margin-top: 2px;
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
  margin-bottom: 60px;
  border-bottom: 1.5px solid black;
  width: 100%;
  padding-bottom: 5px;
`;

export const Top = styled.div`
  text-align: left;
  padding-left: 25px;
  padding-top: 100px;
  color: none;
  font-family: "Gothic A1";
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Keyword = styled.div`
  display: flex;
  justify-content: flex-start; 
  align-items: flex-start; 
`;

export const SmallBox = styled.div`
  display: inline-flex;
  margin-top: 20px;
  margin-left: 18px;
  padding: 5px 13px; 
  flex-shrink: 0;
  border-radius: 30px;
  background: linear-gradient(180deg, #E1E1E1 0%, #FFFBA6 100%);
  font-size: 13px;
`;

export const InputBlank = styled.div`
  display: flex; 
  align-items: center; 
  margin-top: 20px;
  margin-left: 18px;
  width: 356px;
  height: 45px;
  flex-shrink: 0;
  border-radius: 30px;
  background: none;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
  
  input {
    background: none;
    border: none;
    outline: none;
    width: 273px;
    margin-left: 5px;
    color: #000;
    font-family: "Gothic A1";
    font-size: 15px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
  
  #ylogo {
    margin-left: 10px;
  }
`;

export const Kit = styled.div`
  width: 150px;
  height: 10px;
  flex-shrink: 0;
  text-align: left;
  margin-top: 400px;
  margin-left: 30px;
  margin-bottom: -5px;
  font-family: "Gothic A1";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 393px;
  height: 300px;
`;

export const Box = styled.div`
  margin-left: 30px;
  width: 85%;
  height: 37px;
  flex-shrink: 0;
  border-radius: 10px;
  background: none;
  box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

export const Button = styled.div`
  margin-top: 25px;
  margin-left: 30px;
  width: 85%;
  height: 30px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid #EDD719;
  background: #FFFDE8;
  cursor: pointer;
  &:hover {
    background-color: #dadada;
  }
`;

export const ButtonText = styled.div`
  margin-top: 5px;
  color: #000;
  text-align: center;
  font-family: "Gothic A1";
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
