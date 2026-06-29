import React from 'react'

export default function FirstP({setfunc}) {
  return (
    <div>
         <div className="firstP box">
            <h2>1단계. 약관동의</h2>
            <p>회원가입을 위한 약관에 동의해 주세요</p>
            <button onClick={()=>{
                setfunc("second");
            }}>동의하고 다음</button>

        </div>
    </div>
  )
}
