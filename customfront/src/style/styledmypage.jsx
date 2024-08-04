import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 885px;
  margin-top: 0px;
  background: #fff;
  overflow: ${(props) => (props.isMenuOpen ? "hidden" : "auto")};
`;

export const Header = styled.div`
  position: fixed;
  background: #fff;
  width: 393px;
  height: 50px;
  z-index: 999;
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

export const Top = styled.div`
  text-align: left;
  padding-left: 25px;
  padding-top: 80px;
  color: #000;
  font-family: "Gothic A1";
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
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

export const Keyword = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start; 
  width: 343px;
  height: 105px;
  top: 156px;
  left: 15px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #FFF9C2;
  position: absolute;
  padding: 10px;
`;

// 공통 스타일
export const Small = styled.div`
  padding: 5px 13px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 1px solid #EDD719;
  background: #FFF;
  font-size: 13px;
  z-index: 2;
`;

// 개별 위치 스타일
export const SmallOne = styled(Small)`
  position: absolute;
  top: 1px;  
  left: 156px; 
`;

export const SmallTwo = styled(Small)`
  position: absolute;
  width: 45px;
  top: 1px;  
  left: 260px;
`;

export const SmallThree = styled(Small)`
  position: absolute;
  top: 50px; 
  left: 20px; 
`;

export const SmallFour = styled(Small)`
  position: absolute;
  top: 50px; 
  left: 120px; 
`;

export const SmallFive = styled(Small)`
  position: absolute;
  top: 50px; 
  left: 250px; 
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: flex-start; 
  align-items: flex-start; 
  width: 300px;
  height: 40px;
  top: 20px;
  left: 5px;
  flex-shrink: 0;
  border-radius: 10px;
  position: absolute;
`;

export const Wrap2 = styled.div`
  display: flex;
  justify-content: flex-start; 
  align-items: flex-start; 
  width: 343px;
  height: 40px;
  top: 20px;
  left: 5px;
  flex-shrink: 0;
  border-radius: 10px;
  position: absolute;
`;

export const Kit = styled.div`
  height: 10px;
  flex-shrink: 0;
  text-align: left;
  margin-top: 400px;
  margin-left: 30px;
  font-family: "Gothic A1";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Check = styled.div`
  width: 165px;
  height: 25px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #F2F2F2;
  padding: 20px 0px 20px 0px;
  text-align: center;
  margin-top: 25px;
  margin-left: 20px;
  font-family: "Gothic A1";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Write = styled.div`
  width: 165px;
  height: 25px;
  flex-shrink: 0;
  border-radius: 10px;
  background: linear-gradient(90deg, rgba(190, 255, 224, 0.45) 0%, #FFF9C2 100%);
  padding: 20px 0px 20px 0px;
  text-align: center;
  top: 515px;
  left: 210px;
  position: absolute;
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
  height: 275px;
  flex-shrink: 0;
  background: #FFF9C2;
`;

export const Text = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: -18px;
  width: 308px;
  height: 20px;
  flex-shrink: 0;
  color: #000;
  font-family: "Gothic A1";
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; 
  letter-spacing: -0.165px;
`;

export const Box = styled.div`
  margin-top: 10px;
  margin-left: 15px;
  width: 345px;
  height: 50px; 
  flex-shrink: 0;
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.25);
  text-align: left;
  display: flex; 
  align-items: center; 
  padding-left: 15px;
  cursor: pointer;
`;

export const Button = styled.div``;

export const ButtonImage = styled.div`
  position: absolute;
  top: 800px;
  left: 113px;
`;

export const ButtonText = styled.div`
  position: absolute;
  top: 805px;
  left: 142px;
  color: #000;
  text-align: center;
  font-family: "Gothic A1";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 22.5px */
  letter-spacing: -0.165px;
  cursor: pointer;
`;

export const Backdrop = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 393px;
  height: 910px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  transform: translate(-50%, -50%);
  scrollbar-width: none;
  background-color: none;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 80px;
  left: 80%;
  transform: translateX(-50%);
  width: 50px;
  height: 314px;
  border-radius: 50px;
  background: #fff;
  box-shadow: 0px 0px 8px 8px #544c4c;
  padding: 20px;
  z-index: 11;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  #mypage {
    margin-top: 15px;
    margin-right: 7px;
  }
  #myreview {
    margin-top: 107px;
    margin-right: 7px;
  }
  #mainpage {
    margin-top: 200px;
    margin-right: 7px;
  }
  #logout {
    margin-top: 2px;
    margin-right: 2px;
  }
`;

export const DropdownItem = styled.button`
  background: none;
  border: none;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  color: #333;
  width: 100%;
  text-align: center;
  border-radius: 50%;
  transition: background-color 0.3s ease;
`;