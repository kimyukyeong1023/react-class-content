import React from 'react'

export default function SecondP({setPage}) {
  return (
    <div>
        <div className="secondP box">
            <h2>2단계. 정보입력</h2>
            <input type="text" placeholder="이름" /><br />
            <input type="text" placeholder="아이디" /><br />
            <input type="password" placeholder="비밀번호" /><br />
            <button onClick={()=>{
                setPage("third");
            }}>가입하기</button>

            </div>
    </div>
  )
}
