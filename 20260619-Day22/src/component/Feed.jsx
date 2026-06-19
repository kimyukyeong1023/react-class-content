// Feed.jsx

import React from "react";

export default function Feed({ path, content }) {
  return (
    <div>
      <h3>작성자 이름</h3>
      <img src={path} alt="" />
      <p>{content}</p>
      <p>헤시태그</p>
      <button>좋아요</button>
    </div>
  );
}