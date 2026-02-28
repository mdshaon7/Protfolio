import { useState } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About'
import Whatdo from './components/Whatdo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="bg-[#0b0f19] min-h-screen">
      <Header></Header>
      <Banner />
      <About/>
      <Whatdo/>

    </div>
    </>
  )
}

export default App
