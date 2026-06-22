// FoodPage.jsx 
// 페이지를 만들때도 리액트 파일이기때문에
// jsx 확장자를 사용한다.

import React from 'react'
import "./App.css";
import Food from './component/Food';
import NavBar from './component/NavBar';

export default function FoodPage() {
  return (
    <>
    <NavBar />
    <Food />


    <div className="food-menus">
        <img src="https://www.ediya.com/files/menu/IMG_1781506976892.png" alt="" />
        <p>바스크치즈케이크</p>
    </div>

    <div className="food-menus">
        <img src="https://www.ediya.com/files/menu/IMG_1774920189102.png" alt="" />
        <p>현미 소불고기볶음밥</p>
    </div>

    <div className="food-menus">
        <img src="	https://www.ediya.com/files/menu/IMG_1774920059295.png" alt="" />
        <p>크림 퐁듀 김치볶음밥</p>
    </div>

    <div className="food-menus">
        <img src="https://www.ediya.com/files/menu/IMG_1774920418522.png" alt="" />
        <p>저당 오리지널 떡볶이</p>
    </div>
    </>


  )
}