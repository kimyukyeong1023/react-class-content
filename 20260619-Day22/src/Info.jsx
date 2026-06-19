// Into.jsx
// 매번 
//  우리가 만든 페이지를 다른 곳에서도 또 사용할 수있다.
import Member from "./component/Member";
import "./Info.css";

let Kim_yk ={
    img: "https://cdn.crowdpic.net/detail-thumb/thumb_d_8B1AFADFDBA9E21DCE52EE0FE6B7A7C5.png",
    mane: "Kim_yk",
    job: "full-stack"

}
let cat3 ={
    img: "https://i.crepe.land/https://crepe.land/portfolio/y/ye/yesqek4dqn9479gdq31qm4v6nmcmwi5a_%ED%81%AC%EB%A0%88%ED%8E%98.A%ED%83%80%EC%9E%85%282%29.jpg?q=100&t=i&v=3a&w=800",
    name: "cat3",
    job: "full-stack"

}


function Info(){
  //페이지 만들면 main에게 보내줘야된다. 
  // return 현재 페이지를 보낸다!
  //       여러개를 한꺼번에 묶어서 그룹을 지어서!
  return (
    <>
        <Member />
        <Member />
        <Member />

    </>
  )

}
// 메인한테 위에서 만든 return 값을 내보내기 하겠다.
// 위에서 만든 페이지 태그들을 내보내기 하겠다.
export default Info;


/*
<div className="profiles">
      <div className="profile">
        <div></div>
        <img src="https://png.pngtree.com/png-clipart/20240304/original/pngtree-cute-cat-illustration-wearing-a-bag-vector-png-image_14505847.png" 
            alt="" />
        <h2>cat1</h2>
        <p>back-end</p>
      </div>
      <div className="profile">
        <img src="https://cdn.crowdpic.net/detail-thumb/thumb_d_8B1AFADFDBA9E21DCE52EE0FE6B7A7C5.png" 
            alt="" />
        <h2>Kim yk</h2>
        <p>full-stack</p>
      </div>
      <div className="profile">
        <img src="https://i.crepe.land/https://crepe.land/portfolio/y/ye/yesqek4dqn9479gdq31qm4v6nmcmwi5a_%ED%81%AC%EB%A0%88%ED%8E%98.A%ED%83%80%EC%9E%85%282%29.jpg?q=100&t=i&v=3a&w=800" 
            alt="" />
        <h2>cat3</h2>
        <p>front-end</p>
      </div>
      <div className="profile">
        <img src="https://mblogthumb-phinf.pstatic.net/MjAyMTA5MDRfMjg4/MDAxNjMwNzY1NzcyMjIy.jfOF2LOM3zynZ3e_x2tJvUHLu_9r6WxLtA7lT1Y0LIUg.qFEpp3PUnZ9Jtnf1pXXpfbkvRdU02LgcqrU-tHuu82Mg.JPEG.gkfngkfn414/%EA%B3%A0%EC%96%91%EC%9D%B4%EB%8C%80%EC%A7%80_10.jpg?type=w800" 
            alt="" />
        <h2>cat4</h2>
        <p>full-stack</p>
        <p className="new-tag">New</p>
      </div>
    </div>
*/ 