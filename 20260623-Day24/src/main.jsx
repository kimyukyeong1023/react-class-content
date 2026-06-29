import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TestPage from './pages/TestPage'
import PostPage from './pages/PostPage'
// import TestPage from './pages/TestPage'
// import App5 from './App5'
// import App4 from './App4'
// import App3 from './App3'
// import App2 from './App2'
// import App from './App.jsx'
// import HotTopic from './pages/HotTopic'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PostPage />
    <TestPage/>
  </StrictMode>,
)
