import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 852px;
  margin-top: 0px;
  background: #FFFDE7;
  overflow: ${(props) => (props.isMenuOpen ? "hidden" : "auto")};
`;

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  width: 393px;
  height: 50px;
  z-index: 10;

  #back {
    cursor: pointer;
  }
  #logo {
    position: absolute;
    margin-top: 8px;
    margin-left: -20px;
    cursor: pointer;
  }
  #alarm {
    position: absolute;
    margin-top: 3px;
    margin-left: 305px;
    cursor: pointer;
  }
  #menu {
    position: absolute;
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
  margin-top: 48px;
`;

export const Top = styled.div`
  position: absolute;
  top: 106px;
  left: 20px;
  text-align: left;
  color: #000;
  font-family: "Gothic A1";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Keywordd = styled.div`
  margin-left: 20px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  width: 393px;
  height: 110px;
`;

export const Ybox = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: flex-start;
  width: 393px;
  height: 190px;
  flex-shrink: 0;
`;

export const Box = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 50px;
  width: 393px;
  height: 182px;
  flex-shrink: 0;
  background: none;
`;

export const Box2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 370px;
  height: 500px;
  margin-top: 60px;
  overflow-x: auto;
  gap: -50px;
  scrollbar-width: none;
  background-color: none;
  border: none;
`;

export const SmallBox5 = styled.div`
  position: relative;
  display: flex;
  margin-left: -18px;
  margin-top: -10px;
  width: 345px;
  height: 50px;
  flex-shrink: 0;
  font-size: 13px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: flex-start;
  span {
    margin-left: 10px;
  }
`;

export const Button2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  height: 300px;
  width: 393px;
  gap: 15px;
`;

export const Backdrop = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 393px;
  height: 852px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  transform: translate(-50%, -50%);
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