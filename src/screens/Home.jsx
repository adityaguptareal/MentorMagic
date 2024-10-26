import React from 'react'
import Navbar from '../Components/Navigation.jsx'
import ModelHero from '../Components/modelHero.jsx'
import HeroImage from "../assets/Model.png"
import Button from '../Components/button.jsx'
import OutlineButton from '../Components/outlineButton.jsx'
import ModelImage from "../assets/Model.png"
function Home() {
  return (
  <>
   {/* Header */}
   <div id='Hero' className='bg-lightPink  rounded-bl-[8.5rem] font-roboto text-[20px] tracking-wide '>
   <Navbar/>
   {/* Hero Section */}

  <section  id='heroSection' className='flex md:pt-0 pt-8 gap-6 md:gap-0 md:flex-row flex-col justify-between items-center md:px-20 px-10 pb-10 '>
  <div className=''>
        <h1 className='xl:w-[500px] text-center md:text-left md:w-[350px] text-heroText font-montserrat font-bold text-4xl xl:text-5xl'>
        Find your perfect <h1 className='inline text-pinkButton'>mentor</h1> and level up your <h1 className='inline text-pinkButton'>career</h1>
        </h1>
        <div className='pt-7 text-[17px] text-center md:text-left'>MentorMagic: Connect, Learn, Grow</div>
<div className='flex flex-col xl:flex-row gap-3 xl:gap-6 md:pt-4 pt-7'>
    <Button text="Find a Mentor"></Button>
<OutlineButton text="Become a Mentor"></OutlineButton>
</div>
</div>
  {/* <ModelHero src={HeroImage}/> */}

  {/* Character Image */}
  <div className='relative'>

        <div className='xl:w-[580px] w-[350px] '>
          <img src={ModelImage} alt="" />
        </div>
        <div className='border-pinkButton xl:border-[7px] xl:h-16 xl:w-16 border-[5px]  h-10 w-10 absolute left-5 top-28 xl:left-8 xl:top-40  rounded-full '>
        </div>
       
          <div className='border-pinkButton xl:border-[2px] xl:h-8 xl:w-8  border-[2px] h-7 w-7 left-14 top-16 absolute xl:left-28 xl:top-28  rounded-full '>

          </div>
    
      </div>
  </section>
    </div>

    {/*  */}

    
  </>
  )
}

export default Home