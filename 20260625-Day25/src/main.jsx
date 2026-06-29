import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import MinimalPage from './pages/MinimalPage'
// import ControlTest from './ControlTest'
// import ControlTest2 from './ControlTest2'
// import StartPage from './pages/balanceGame/StartPage'
// import BalanceMain from './pages/balanceGame/BalanceMain'
// import UseStateTest from './UseStateTest'
// import UseStateTest2 from './UseStateTest2'
// import AdminPage from './pages/AdminPage'
// import App from './App.jsx'
import Ex from './pages/ex/Ex.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Ex/>
  </StrictMode>,
)
