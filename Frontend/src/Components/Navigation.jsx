import React, { useState } from 'react'
import Logo from '../assets/Logo.png'
import Button from './button'
import OutlineButton from './outlineButton'
import Signin from '../screens/Signin'
import Signup from '../screens/Signup'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';



function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <>
      <header className='w-full py-8 md:px-20 px-8 flex items-center justify-between'>
        <img src={Logo} className='w-[250px] cursor-pointer' alt="" />

        {/* Menu With Buttons */}
        <div className='flex gap-8 items-center text-[18px]'>
          <ul className='xl:flex gap-7 items-center hidden '>
            <li className='hover:text-gray-600 hover:scale-[1.09] transition-all'>
              <Link to="/">Home</Link></li>
            <li className='hover:text-gray-600 hover:scale-[1.09] transition-all'>
              <Link to="/mentors">Find a Mentor</Link></li>
            <li className='hover:text-gray-600 hover:scale-[1.09] transition-all'>
              <Link to="/mentor">My Mentor</Link></li>
            <li className='hover:text-gray-600 hover:scale-[1.09] transition-all'>
              <Link to="/resources">Resources</Link></li>
          </ul>
        </div>
        <div className='xl:flex hidden gap-6 items-center justify-center'>
          <Link to='/signup'><Button text="Sign up"></Button></Link>
          <Link to='/signin'><OutlineButton text="Sign in"></OutlineButton></Link>
        </div>

        <button className='xl:hidden cursor-pointer absolute top-10 md:right-20 right-10' onClick={() => {
          setIsMenuOpen(!isMenuOpen)
        }}>
          <FontAwesomeIcon icon={faBars} className='cursor-pointer' />
        </button>
        {/* Moble Menu */}
        <div className={`absolute xl:hidden z-50 left-0 top-24 py-7 w-full bg-white text-center flex-col items-center justify-center text-gray-800 ${isMenuOpen ? "opacity-100" : "opacity-0"} transition-all`}>

          <ul className='flex flex-col gap-5 hover:text-pinkButton'>

            <li className=''><a href="">Home</a></li>
            <li className=''><a href="">Find a Mentor</a></li>
            <li className=''><a href="">My Mentor</a></li>
            <li className=''><a href="">Resources</a></li>
          </ul>


        </div>
      </header>
    </>
  )
}

export default Navbar

