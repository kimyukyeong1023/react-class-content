import React from "react";
//ProductPage.jsx
import Card from "./component/Card";

export default function ProductPage() {
  return (
    <>
    <Card
      path="https://via.placeholder.com/150"
      name="나이키 운동화"
      price="50,000원"
    />
    <Card 
      path="https://via.placeholder.com/150"
      name="아디다스 운동화"
      price="45,000원"
    
    />
    <Card 
      path="https://via.placeholder.com/150"
      name="뉴발란스 운동화"
      price="60,000원"
    />
    <div>
      <h2>오늘의 추천 상품</h2>

    </div>
    </>
  );
}

      // <div className="card">
      //   <img src="https://via.placeholder.com/150" alt="" />
      //   <h3>나이키 운동화</h3>
      //   <p>50,000원</p>
      // </div>

      // <div className="card">
      //   <img src="https://via.placeholder.com/150" alt="" />
      //   <h3>아디다스 운동화</h3>
      //   <p>45,000원</p>
      // </div>

      // <div className="card">
      //   <img src="https://via.placeholder.com/150" alt="" />
      //   <h3>뉴발란스 운동화</h3>
      //   <p>60,000원</p>
      // </div>