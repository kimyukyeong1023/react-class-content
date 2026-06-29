import React, { useState } from 'react'

export default function FriendList() {
    let [friend,setFriend] =useState([]);
  return (
    <div>
        <h2>친구추가하기</h2>
        <p>버튼클릭하면 각각 영희, 철수, 지민 ,영수 ,민수</p>
        <button onClick={()=>{
            setFriend([...friend, "영희"])
        }}>영희</button>
        <button onClick={()=>{
            setFriend([...friend, "철수"])
        }}>철수</button>
        <button onClick={()=>{
            setFriend([...friend, "지민"])
        }}>지민</button>
        <button onClick={()=>{
            setFriend([...friend, "영수"])
        }}>영수</button>
        <button onClick={()=>{
            setFriend([...friend, "민수"])
        }}>민수</button>


        <h3>친구목록 :{friend}</h3>
    </div>
  )
}
