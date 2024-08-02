import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as l from "../style/styledmain2";

const Main2 = () => {
  const navigate = useNavigate();

  const [box2Items, setBox2Items] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [list2Items, setList2Items] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8000/",
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
      "X-CSRFToken": localStorage.getItem("csrftoken") || "",
    },
  });

  useEffect(() => {
    const checkCartStatus = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get("customFit/cart/");
        console.log("현재 카트 상태:", response.data);
        if (response.data.length === 0) {
          console.log("카트가 비어 있습니다.");
        } else {
          console.log("카트에 상품이 있습니다.");
        }
      } catch (error) {
        console.error("빈 상태 확인 중 오류 발생:", error.message);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    checkCartStatus();
  }, []);

  const toggleCheckbox = async (item) => {
    const isSelected = selectedItems.some(
      (selectedItem) => selectedItem.product_id === item.product_id
    );

    if (isSelected) {
      setSelectedItems((prevSelectedItems) =>
        prevSelectedItems.filter((i) => i.product_id !== item.product_id)
      );

      try {
        await removeFromCart(item.product_id);
        console.log(`상품 ID ${item.product_id}이(가) 카트에서 삭제되었습니다.`);
      } catch (error) {
        console.error("카트에서 삭제 중 오류 발생:", error.message);
        setError(error);
      }
    } else {
      setSelectedItems((prevSelectedItems) => [...prevSelectedItems, item]);

      try {
        await addToCart(item.product_id);
        console.log(`상품 ID ${item.product_id}이(가) 카트에 추가되었습니다.`);
      } catch (error) {
        console.error("카트 추가 중 오류 발생:", error.message);
        setError(error);
      }
    }
  };

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get("customFit/search/", {
        params: { product_name: searchQuery },
      });
      setList2Items(response.data);
    } catch (error) {
      console.error("검색 중 오류 발생:", error.message);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const addToCart = async (product_id) => {
    try {
      const response = await axiosInstance.post(
        `customFit/add_cart/${product_id}/`,
        {},
        {
          headers: {
            "X-CSRFToken": localStorage.getItem("csrftoken") || "",
          },
        }
      );
      console.log("API 응답:", response.data);
      console.log(`상품 ID ${product_id}이(가) 카트에 추가되었습니다.`);
    } catch (error) {
      console.error("카트 추가 중 오류 발생:", error.message);
      setError(error);
    }
  };

  const removeFromCart = async (product_id) => {
    try {
      const response = await axiosInstance.delete(
        `customFit/cart/delete_item/${product_id}/`,
        {
          headers: {
            "X-CSRFToken": localStorage.getItem("csrftoken") || "",
          },
        }
      );
      console.log("API 응답:", response.data);
      console.log(`상품 ID ${product_id}이(가) 카트에서 제거되었습니다.`);
    } catch (error) {
      console.error("카트에서 제거 중 오류 발생:", error.message);
      setError(error);
    }
  };

  const addToBox2Items = async () => {
    if (selectedItems.length === 0) {
      console.log("선택된 상품이 없습니다.");
      return;
    }

    const newItems = selectedItems.map((item) => ({
      product_id: item.product_id,
      product_name: item.product_name,
    }));

    const uniqueItems = newItems.filter(
      (newItem) => !box2Items.some((boxItem) => boxItem.product_id === newItem.product_id)
    );

    try {
      for (const item of uniqueItems) {
        await addToCart(item.product_id);
      }
      setBox2Items((prevItems) => [...prevItems, ...uniqueItems]);
      console.log("Box2에 추가된 상품:", uniqueItems);
    } catch (error) {
      console.error("상품 추가 중 오류 발생:", error.message);
      setError(error);
    } finally {
      setSelectedItems([]);
    }
  };

  const deleteItemFromBox2 = (id) => {
    setBox2Items((prevItems) => prevItems.filter((item) => item.product_id !== id));
  };

  const clearBox2Items = async () => {
    try {
      const itemIds = box2Items.map((item) => item.product_id);
      if (itemIds.length > 0) {
        await axiosInstance.post("customFit/cart/clear/", {
          item_ids: itemIds,
        }, {
          headers: {
            "X-CSRFToken": localStorage.getItem("csrftoken") || "",
          },
        });
      }
      setBox2Items([]);
      console.log("Box2의 모든 상품이 카트에서 제거되었습니다.");
    } catch (error) {
      console.error("Box2 항목 삭제 중 오류 발생:", error.message);
      setError(error);
    }
  };

  const deleteSelectedItem = async (id) => {
    setSelectedItems((prevItems) =>
      prevItems.filter((item) => item.product_id !== id)
    );

    try {
      await removeFromCart(id);
      console.log(`상품 ID ${id}이(가) 카트에서 삭제되었습니다.`);
    } catch (error) {
      console.error("선택된 항목 삭제 중 오류 발생:", error.message);
      setError(error);
    }
  };

  const clearSelectedItems = async () => {
    try {
      for (const item of selectedItems) {
        await removeFromCart(item.product_id);
      }
      setSelectedItems([]);
      console.log("선택된 모든 상품이 카트에서 제거되었습니다.");
    } catch (error) {
      console.error("선택된 항목 모두 삭제 중 오류 발생:", error.message);
      setError(error);
    }
  };

  const handleCompare = async () => {
    setLoading(true);
    try {
      const cartResponse = await axiosInstance.get("customFit/cart/");
      if (cartResponse.data.length === 0) {
        setError(
          new Error("카트에 상품이 없습니다. 상품을 추가한 후 비교해 주세요.")
        );
        return;
      }

      const response = await axiosInstance.get("customFit/compare/");
      const recommendedProduct = response.data.recommended_product;

      navigate("/main3", { state: { recommendedProduct } });

      await clearBox2Items();
      console.log("비교 후 카트가 비워졌습니다.");
    } catch (error) {
      console.error("비교하기 중 오류 발생:", error.message);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <l.Container>
      <l.Header>
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
        <img
          id="logo"
          src={`${process.env.PUBLIC_URL}/logo/ylogo.svg`}
          alt="logo"
          width="40px"
          onClick={() => navigate("/")}
        />
        <img
          id="alarm"
          src={`${process.env.PUBLIC_URL}/logo/alarm.svg`}
          alt="alarm button"
          style={{
            position: "absolute",
            top: "8px",
            left: "8px",
            cursor: "pointer",
          }}
          onClick={() => navigate(-1)}
        />
        <img
          id="menu"
          src={`${process.env.PUBLIC_URL}/logo/menu.svg`}
          alt="menu button"
          style={{
            position: "absolute",
            top: "8px",
            left: "8px",
            cursor: "pointer",
          }}
          onClick={() => navigate(-1)}
        />
        <l.Border>
          <div></div>
        </l.Border>
      </l.Header>

      <l.Top>
        000님에게 맞는 <br />
        식품을 찾아볼까요?
      </l.Top>

      <l.Keyword>
        <l.SmallBox>#당뇨</l.SmallBox>
        <l.SmallBox>#체중감소</l.SmallBox>
        <l.SmallBox>#단백질이 좋아</l.SmallBox>
      </l.Keyword>

      <l.InputBlank>
        <img
          id="ylogo"
          src={`${process.env.PUBLIC_URL}/logo/ylogo.svg`}
          alt="로고"
          width="30px"
        />
        <input
          type="text"
          placeholder="검색어를 입력하세요."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <img
          id="search"
          src={`${process.env.PUBLIC_URL}/logo/search.svg`}
          alt="검색 버튼"
          onClick={handleSearch}
        />
      </l.InputBlank>

      <l.List>
        <l.Keywordd>
          <l.ProductName>상품명</l.ProductName>
          <l.SmallBox2>제조사</l.SmallBox2>
          <l.SmallBox0>용량</l.SmallBox0>
          <l.SmallBox0>선택하기</l.SmallBox0>
        </l.Keywordd>

        <l.List2>
          {list2Items.map((item) => (
            <l.Keywordd key={item.product_id}>
              <l.ProductName2>{item.product_name}</l.ProductName2>
              <l.SmallBox3>{item.manufacturer}</l.SmallBox3>
              <l.SmallBox6>{item.Capacity}g</l.SmallBox6>
              <l.SmallBox4>
                <l.Checkborder>
                  <l.Check
                    isChecked={selectedItems.some(
                      (selectedItem) =>
                        selectedItem.product_id === item.product_id
                    )}
                    onClick={() => toggleCheckbox(item)}
                  >
                    {selectedItems.some(
                      (selectedItem) =>
                        selectedItem.product_id === item.product_id
                    ) && "\u2714"}
                  </l.Check>
                </l.Checkborder>
              </l.SmallBox4>
            </l.Keywordd>
          ))}
        </l.List2>
      </l.List>

      <l.Kit>맞춤 건강 키트</l.Kit>

      <l.Body>
        <l.SelectedItemsSection>
          <l.SelectedItemsList>
            {selectedItems.map((item) => (
              <l.SelectedItem key={item.product_id}>
                {item.product_name}
                <l.DelButton>
                  <img
                    id="del"
                    src={`${process.env.PUBLIC_URL}/logo/delbtn.svg`}
                    alt="삭제 버튼"
                    width="20px"
                    height="20px"
                    onClick={() => deleteSelectedItem(item.product_id)}
                  />
                </l.DelButton>
              </l.SelectedItem>
            ))}
          </l.SelectedItemsList>
          <l.Icon>
            <img
              id="trash"
              src={`${process.env.PUBLIC_URL}/logo/trash.svg`}
              alt="휴지통"
              width="21px"
              height="22"
              onClick={clearSelectedItems}
            />
          </l.Icon>
        </l.SelectedItemsSection>
        <l.Button onClick={handleCompare}>
          <l.ButtonText>비교하기</l.ButtonText>
        </l.Button>
      </l.Body>
    </l.Container>
  );
};

export default Main2;