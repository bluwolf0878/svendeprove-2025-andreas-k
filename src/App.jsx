import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header } from './components/Header/Header.jsx'
import { Footer } from './components/Footer/Footer.jsx'
import { Body } from './components/Body/Body.jsx'
import { AppRouter } from "./router/AppRouter.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>

    <Body className="relative">
      <AppRouter></AppRouter>
    </Body>
    
    <Footer/>
    </>
  )
}

export default App
