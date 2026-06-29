// GameCharList.jsx
import React, { useState } from "react";
// import CharCard from "./component/CharCard";
// let total=0;
// function sum(char){
//     total+=char.price;
    

// }



export default function GameCharList() {


    let [char,setChar]=useState([]);
  return (
    <div>
      <h2>귀여운 캐릭터 저장하기</h2>
      <div className="chars">


        <div className="char-card">
            <img className="char-card-img"
            src="/ap.webp" alt="" 
            onClick={()=>{
                setChar([...char, 
                    {name: "ap",
                    image: "/ap.webp",
                    price: 10000
                    }])
                setCart([...cart, char.length ])
   
            }}/>
            <p>ap</p>
            <p>10,000</p>
        </div>

        <div className="char-card">
            <img className="char-card-img"
            src="/mu.webp" alt="" 
            onClick={()=>{
                setChar([...char, 
                    {name: "mu",
                    image: "/mu.webp",
                    price: 15000
                    }])
   
            }}/>
            <p>mu</p>
            <p>15,000</p>
        </div>

        <div className="char-card">
            <img className="char-card-img"
            src="/ryan.png" alt="" 
            onClick={()=>{
                setChar([...char, 
                    {name: "ryan",
                    image: "/ryan.png",
                    price: 17000
                    }])
   
            }}/>
            <p>ryan</p>
            <p>17,000</p>
        </div>

      </div>
      <h3>선택한 캐릭터</h3>
      <p>{JSON.stringify(char)}</p>

      <hr />
      {char.map((c,index)=>{
        return <p key={index}>{c.name}  -   {c.price}</p>

      })}
      {/* <p>총금액은:{char.map((c,index)=>{
        
      })} {total}</p> */}
    </div>
  );
}