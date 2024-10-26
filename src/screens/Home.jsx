import React from 'react'
import HeroText from '../Components/HeroText'
import Navbar from '../Components/Navigation.jsx'
import ModelHero from '../Components/modelHero.jsx'
import HeroImage from "../assets/Model.png"
function Home() {
  return (
  <>
   {/* Header */}
   <div id='Hero' className='bg-lightPink  rounded-bl-[8.5rem] font-roboto text-[20px] tracking-wide '>
   <Navbar/>

  <section  id='heroSection' className='flex justify-between items-center px-20 pb-10'>
   <HeroText/> 
  <ModelHero src={HeroImage}/>
  </section>
    </div>

    
  </>
  )
}

export default Home