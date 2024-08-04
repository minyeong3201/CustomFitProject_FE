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

export const Top = styled.div`
  text-align: center;
  padding-top: 90px;
  color: #000;
  font-family: "Gothic A1";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const InputBlank = styled.div`
  display: flex;
  margin-top: 60px;
  margin-left: 18px;
  width: 356px;
  height: 120px;
  flex-shrink: 0;
  outline: 1.5px dotted #000;
  border-radius: 7px;
  background: #fff;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
  input {
    background: none;
    border: none;
    outline: none;
    width: 273px;
    margin-left: 10px;
    margin-top: -75px;
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

export const Keywordd = styled.div`
  margin-left: 20px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;


export const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  width: 393px;
  height: 150px;
`;


export const Under = styled.div`
  text-align: center;
  padding-top: 60px;
  color: #000;
  font-family: "Gothic A1";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
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

export const Button = styled.div`
  margin-top: 100px;
  margin-left: 50px;
  width: 298px;
  height: 39px;
  flex-shrink: 0;
  flex-shrink: 0;
  border-radius: 10px;
  border: 0.5px solid #fff9c2;
  background: #fff9c2;
  box-shadow: 0px 0px 2px 2px rgba(173, 170, 170, 0.25);
  cursor: pointer;
`;

export const ButtonText = styled.div`
  margin-top: 9px;
  color: #000;
  text-align: center;
  font-family: "Gothic A1";
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const ButtonTwo = styled.div`
  margin-top: 20px;
  margin-left: 50px;
  width: 298px;
  height: 39px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 0.5px solid #fff9c2;
  background: #F2F2F2;
  box-shadow: 0px 0px 2px 2px rgba(173, 170, 170, 0.25);
  cursor: pointer;
`;

export const ReviewImage = styled.img`
  width: ${({ type }) => (type === 'bad' ? '58px' : '60px')}; /* 'bad' 이미지 크기 조절 */
  cursor: pointer;
  border: ${({ selected }) => (selected ? '2px solid blue' : 'none')}; /* 선택된 이미지에 테두리 추가 */
`;

//메뉴바 스타일
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