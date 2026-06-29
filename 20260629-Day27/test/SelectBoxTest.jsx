// SelectBoxTest.jsx
// SelectBoxTest.jsx 파일 생성후 기본설정해줘
import React, { useState } from "react";

// 리액트 -> 자바스크립트 안에 HTML이 들어갔다!
//  불필요한 코드들 없애려고!
export default function SelectBoxTest() {
  // select 버튼
  //  - 여러개의 항목중에 하나를 선택하는 태그!

  let [과일, set과일] = useState("");

  let [food, setFood] = useState("");
  let [paymentMethod, setPaymentMethod] = useState("");
  return (
    <div>
      <h2>드롭다운 메뉴 selectBox</h2>
      <h3>음식선택</h3>
      <select onChange={(이벤트정보)=>{
        setFood(이벤트정보.target.value);

      }}>
        <option value="">선택하세요</option>
        <option value="피자">피자</option>
        <option value="치킨">치킨</option>
        <option value="햄버거">햄버거</option>
      </select>

      <h3>선택한 음식:{food} </h3>
      


      <br /><br /><br />
      <hr />

      <h3>과일 선택</h3>
      <select
        onChange={(이벤트정보) => {
          set과일(이벤트정보.target.value);
        }}
      >
        <option value="">선택하세요</option>
        <option value="사과">🍎</option>
        <option value="포도">🍇</option>
      </select>

      <h3>내가 선택한 과일: {과일}</h3>

      <br /><br /><br />
      <hr />

      <h3>결제 방법 선택</h3>
      <select
        onChange={(이벤트정보) => {
          setPaymentMethod(이벤트정보.target.value);
        }}
      >
        <option value="">선택하세요</option>
        <option value="카드결제">카드결제</option>
        <option value="계좌이체">계좌이체</option>
        <option value="카카오페이">카카오페이</option>
        <option value="네이버페이">네이버페이</option>
      </select>

      <h3>선택한 결제 방법: {paymentMethod}</h3>
    </div>
  );
}

// 1. 현재 selectBoxTest.jsx 파일에 코드 추가하기
// 2. select태그를 이용해서 결제메뉴를 만든다.
// 3. 결제방법은 카드결제, 계좌이체, 카카오페이,네이버페이로 만든다
// 4. 선택한 결제 방법을 useState저장한다.
// 5. 선택한 결제방법을 화면에 보여준다.


// 현재 폴더에 새로운 리액트 파일 
// 날짜 태그를 보는 파일 DateTest.jsx 
// 기본 태그만 h2로 만들어줘