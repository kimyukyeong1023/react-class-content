import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Hobbies from './Hobbies.jsx'
// import RadioButtonTest from './RadioButtonTest.jsx'
// import SelectBoxTest from './SelectBoxTest.jsx'
// import DateTest from './test/DateTest.jsx'
// import Signup from './signup.jsx'
// import UseStateRouter from './UseStateRouter.jsx'
// import UseStateRouter2 from '../test/UseStateRouter2.jsx'
import Kiosk from './Kiosk.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Kiosk />
  </StrictMode>,
)
// src안에 새로운 폴더 만들기 
// 새로운폴더명 test 하고 그 안에 src폴더에
// 있는 DateTest,Hobbies,RadioTest,SelectBoxTest.jsx 파일을 이동시켜줘