import React, { useState } from "react";

export default function DateTest() {
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <div>
      <h2>DateTest</h2>
      <input
        type="date"
        onChange={(event) => {
          setSelectedDate(event.target.value);
        }}
      />
      <h3>선택한 날짜: {selectedDate}</h3>
    </div>
  );
}

// 현재 DateTest.jsx파일에 input태그의 date이용해서
// 오늘 날짜 선택해서 h3태그에 선택한 날짜 보여주는
// 코드 작성해줘.


// src 폴더 안에 새로운 리액트 파일 만들어줘
// 파일이름은 signup.jsx 
// 기본 세팅만 해줘 h2 회원가입이라고!
// main.jsx에 import signup.jsx 해줘