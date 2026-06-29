// src/BgChange.jsx
import React, { useState } from 'react'

export default function BgChange() {
    let [bgcolor,setBgcolor]=useState(false);
  return (
    <div className={bgcolor ? "my-bg" : "box"}>
        <button onClick={()=>{
            setBgcolor(!bgcolor);

        }}>배경색 변경</button>

    </div>
  )
}
