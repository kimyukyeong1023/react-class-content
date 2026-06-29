// DarkMode.jsx

import React, { useState } from "react";

//  웹사이트에서 배경화면이나 테마들을 바꾸면 기억을 해서
// 웹화면에 적용!

export default function DarkMode() {
  let [dark, setDark] = useState(false); // 다크모드 true 기본적으로 라이트모드false
  console.log("현재 값:", dark);
  return (
    <div className={dark ? "darkMode" : "lightMode"}>
      <h2>웹페이지</h2>
      <p>다크 모드 또는 라이트모드 전환 예제!</p>
      <p>한번 누르면 라이트모드 한번 더 누르면 다크모드</p>
      <p>! ~이 아니다! !true - false 결과 뒤집기</p>
      <button
        onClick={() => {
          setDark(!dark);
        }}
      >
        🌙
      </button>

      <h3>{dark ? "🌙 다크모드" : "☀ 라이트모드"}</h3>

    </div>
  );
}