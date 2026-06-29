// ClassNameTest

import React, { useState } from 'react'



export default function ClassNameTest() {
  let [red,setRed]=  useState(false);
  return (
    <div>
        <h2>useState이용한 css디자인 설정하기</h2>
        <h3 className={red ? "red" : "title"} >안녕하세요 이거 변경할것</h3>

        <button onClick={()=>{
            setRed(!red);
        }}>색 변경</button>
    </div>
  )
}
