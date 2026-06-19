// 리액트는 css파일을 link태그로 가져오지 않고
// import 가져온다.
// App라는 태그를 사용할때 App.css파일을 포함해서
// 디자인 적용해라!

import './App.css'
// 신입 개발자들 면접에서 리액트를 사용한 이유?

function App() {  
  return (
    <>
      <h1>Jsx 리액트 문법</h1>
      <h2>JSX?</h2>
      <p>JS + HTML을 섞어서 쓰는 문법</p>
      <img src="https://png.pngtree.com/png-clipart/20240304/original/pngtree-cute-cat-illustration-wearing-a-bag-vector-png-image_14505847.png" 
            alt="" />
      <img src="https://cdn.crowdpic.net/detail-thumb/thumb_d_8B1AFADFDBA9E21DCE52EE0FE6B7A7C5.png" 
            alt="" />
      <img src="https://i.crepe.land/https://crepe.land/portfolio/y/ye/yesqek4dqn9479gdq31qm4v6nmcmwi5a_%ED%81%AC%EB%A0%88%ED%8E%98.A%ED%83%80%EC%9E%85%282%29.jpg?q=100&t=i&v=3a&w=800" 
            alt="" />



      <h2>리액트 실행하는 순서!</h2>
      <ol>
       <li>고객이 url을 입력한다. </li>
       <li>index.html 파일이 크롬(브라우저)읽는다</li>
       <li>script태그를 만난다. 그래서 리액트 파일로 넘어간다</li>
       <li>main이라는 리액트가 App이라는 리액트 파일 읽는다.</li>
       <li>안에서 태그를 만든고 하나로 묶어서 main으로 보낸다.</li>
       <li>main이 app한테 받아서 index.html로 내용을 갈아끼운다.</li>
      </ol>
    </>
  )
}

export default App