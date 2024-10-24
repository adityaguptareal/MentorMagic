import { useState } from 'react'
import logo from './assets/logo.png'
import viteLogo from '/vite.svg'
import './index.css'
import NavBar from './Components/navbar'
import HeroText from './Components/HeroText'
import ModelHero from './Components/modelHero.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id='Hero' className='bg-lightPink  rounded-bl-[8.5rem] font-roboto text-[20px] tracking-wide '>
   <NavBar/>
  
  <section  id='heroSection' className='flex justify-between items-center px-20'>
   <HeroText/>
<ModelHero></ModelHero>
  </section>
    </div>
    </>
  )
}

export default App
