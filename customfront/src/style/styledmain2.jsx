import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 1093px;
  margin-top: 0px;
  background: #fff;
  text-align: center;
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

export const Keyword = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const SmallBox = styled.div`
  display: inline-flex;
  margin-top: 15px;
  margin-left: 18px;
  padding: 5px 13px;
  flex-shrink: 0;
  border-radius: 30px;
  background: linear-gradient(180deg, #e1e1e1 0%, #fffba6 100%);
  font-size: 13px;
`;

export const InputBlank = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
  margin-left: 18px;
  width: 356px;
  height: 45px;
  flex-shrink: 0;
  border-radius: 50px;
  background: #fff;
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

export const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 50px;
  height: 400px;
  background: #f2f2f2;
`;

export const SmallBox2 = styled.div`
  display: inline-flex;
  margin-left: 5px;
  margin-bottom: 20px;
  height: 25px;
  width: 79px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 0.5px solid #edd719;
  background: #fffde8;
  font-size: 10px;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const SmallBox0 = styled.div`
  display: inline-flex;
  margin-left: 5px;
  margin-bottom: 20px;
  height: 25px;
  width: 58px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 0.5px solid #edd719;
  background: #fffde8;
  font-size: 10px;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ProductName = styled.div`
  display: inline-flex;
  margin-left: 6px;
  margin-bottom: 20px;
  height: 25px;
  width: 123px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 0.5px solid #edd719;
  background: #fffde8;
  font-size: 10px;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const List2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 0px;
  height: 280px;
  width: 393px;
  background: #f2f2f2;
  overflow-x: auto;
  scrollbar-width: none;
  background-color: none;
  border: none;
`;

export const Keywordd = styled.div`
  margin-left: 20px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

export const SmallBox3 = styled.div`
  display: inline-flex;
  margin-top: -25px;
  margin-left: 3px;
  height: 40px;
  width: 83px;
  flex-shrink: 0;
  background: #fff;
  font-size: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const SmallBox6 = styled.div`
  display: inline-flex;
  margin-top: -25px;
  margin-left: 3px;
  height: 40px;
  width: 60px;
  flex-shrink: 0;
  background: #fff;
  font-size: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ProductName2 = styled.div`
  display: inline-flex;
  margin-top: -25px;
  margin-left: 5px;
  height: 40px;
  width: 128px;
  flex-shrink: 0;
  background: #fff;
  font-size: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const SmallBox4 = styled.div`
  display: inline-flex;
  margin-top: -25px;
  margin-left: 3px;
  height: 40px;
  width: 60px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Checkborder = styled.div`
  position: relative;
  display: inline-block;
  z-index: 1;
  width: 12px;
  height: 12px;
  border: 1px solid #000;
  margin-top: 3px;
  background-color: #fff;
`;

export const Check = styled.div`
  position: absolute;
  display: inline-block;
  width: 12px;
  height: 25px;
  margin-top: -10px;
  margin-left: -5px;
  background-color: none;
`;

export const CheckmarkIcon = styled.div`
  position: relative;
  top: 10px; 
  left: 3px;
  font-size: 12px;
  color: #000; 
  visibility: ${(props) => (props.isChecked ? "visible" : "hidden")};
`;

export const CheckboxWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

export const Checkmark = styled.div`
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px solid #000;
  margin-right: 2px;
`;

export const Kit = styled.div`
  width: 150px;
  height: 10px;
  flex-shrink: 0;
  text-align: left;
  margin-top: 50px;
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
  height: 150px;
`;

export const Box = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 30px;
  width: 85%;
  height: 37px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 4px 4px #f2f2f2;
`;

export const SmallBox5 = styled.div`
  position: relative;
  display: flex;
  width: 100%;  /* 부모 컨테이너의 크기에 맞추기 */
  max-width: 100px;  /* 필요에 따라 크기 조정 */
  height: 30px;  /* 높이 조정 */
  flex-shrink: 0;
  font-size: 13px;
  border-radius: 50px;
  background: #d9d9d9;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 5px;  /* 간격 조정 */
`;

export const Box2 = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;  /* 아이템이 한 줄로 배치되도록 설정 */
  width: 100%;
  max-height: 40px;  /* 높이 조정 */
  gap: 7px;
  margin-left: 10px;
  overflow-x: auto;  /* 수평 스크롤 추가 */
  background-color: none;
  border: none;
`;

export const DelButton = styled.div`
  position: absolute; 
  right: 2px; 
  top: 0.2px;
  cursor: pointer; 
`;

export const Icon = styled.div`
  position: absolute; 
  right: 10px;
  top: 7px; 
  cursor: pointer; 
`;

export const Button = styled.div`
  margin-top: 25px;
  margin-left: 10px;
  width: 95%;
  height: 50px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid #edd719;
  background: #fffde8;
  cursor: pointer;
`;

export const ButtonText = styled.div`
  margin-top: 15px;
  color: #000;
  text-align: center;
  font-family: "Gothic A1";
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const SelectedItemsSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column; /* 세로 방향으로 배치 */
  align-items: flex-start;
  margin-left: 10px;
  width: 370px; /* 설정된 너비 */
  height: 37px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 4px 4px #f2f2f2;
  overflow: hidden; /* 전체 영역의 스크롤 숨기기 */
`;

export const SelectedItemsTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const SelectedItemsList = styled.ul`
  display: flex; /* 가로로 배치 */
  list-style-type: none;
  padding: 0;
  margin: 0; /* 기본 margin 제거 */
  width: 325px; /* 부모 컨테이너의 너비에 맞춤 */
  overflow-x: auto; /* 가로 스크롤 가능 */
  overflow-y: hidden; /* 세로 스크롤 숨기기 */
  scrollbar-width: none; /* Firefox에서 스크롤바 숨기기 */
  
  &::-webkit-scrollbar {
    display: none; /* Webkit 기반 브라우저에서 스크롤바 숨기기 */
  }
`;

export const SelectedItem = styled.li`
  position: relative;
  display: flex;
  width: 100px; /* 아이템의 너비 설정 */
  height: 30px; /* 아이템의 높이 설정 */
  flex-shrink: 0; /* 아이템이 줄어들지 않도록 */
  font-size: 13px;
  border-radius: 50px;
  background: #d9d9d9;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 5px; /* 아이템 간 간격 조정 */
`;

// 드롭다운 메뉴 스타일
export const Backdrop = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  width: 393px;
  height: 1000px;
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

