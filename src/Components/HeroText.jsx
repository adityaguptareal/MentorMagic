import React from 'react'
import Button from './button.jsx'
import OutlineButton from './outlineButton.jsx'

function HeroText(prop) {
  return (
    <div className=''>
        <h1 className='max-w-[500px] text-heroText font-montserrat font-bold text-5xl'>
        Find your perfect <h1 className='inline text-pinkButton'>mentor</h1> and level up your <h1 className='inline text-pinkButton'>career</h1>
        </h1>
        <div className='pt-7 text-[17px]'>MentorMagic: Connect, Learn, Grow</div>
<div className='flex gap-6 pt-4'>
    <Button text="Find a Mentor"></Button>
<OutlineButton text="Become a Mentor"></OutlineButton>
</div>


    </div>
  )
}

export default HeroText