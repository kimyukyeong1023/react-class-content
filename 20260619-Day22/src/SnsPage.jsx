// SnsPage.jsx
// 자동으로 함수 틀을 만들어주는 단축키 rfc
import React from "react";
import Feed from "./component/Feed";

//SnsPage를 만들어서 중복되는 태그들을 Feed새로운 태그를 만들어서
// 중복 제거 했는데 문제가 발생 Feed의 내용들이 다 똑같아
export default function SnsPage() {
  return (
    <div>
              {/* Feed라는 게시글 틀을 만들 건데 사진과 내용을 밖에서
      받아온다.  */}
      <Feed 
            content="cat1"
            path="https://png.pngtree.com/png-clipart/20240304/original/pngtree-cute-cat-illustration-wearing-a-bag-vector-png-image_14505847.png"/>
      <Feed 
            content="cat2"
            path="https://cdn.crowdpic.net/detail-thumb/thumb_d_8B1AFADFDBA9E21DCE52EE0FE6B7A7C5.png"
      />
      <Feed 
            content="cat3"
            path="https://i.crepe.land/https://crepe.land/portfolio/y/ye/yesqek4dqn9479gdq31qm4v6nmcmwi5a_%ED%81%AC%EB%A0%88%ED%8E%98.A%ED%83%80%EC%9E%85%282%29.jpg?q=100&t=i&v=3a&w=800"
      />
    </div>
  );
}