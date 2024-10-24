import React from 'react'
import Logo from '../assets/Logo.png'
import Button from './button'
import OutlineButton from './outlineButton'


function navbar() {
  return (
<div className='flex justify-between items-center px-14 py-5'>
    {/* logo */}
    <img src={Logo} alt="" className='w-[200px]' />
    {/* Menu Ites */}
    <ul className='flex gap-6 text-greyText text-[17px] '>
        <li><a href="">Home</a></li>
        <li><a href="">Find a Mentor</a></li>
        <li><a href="">My Mentors </a></li>
        <li><a href="">Resources</a></li>
        <li><a href="">Blog</a></li>
    </ul>
    {/* buttons */}
<div className='flex gap-4'>
<Button text="Sign in"></Button>
<OutlineButton text="Sign up"></OutlineButton>
</div>
</div>
)
}

export default navbar