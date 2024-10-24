import React from 'react'
function button(prop) {
  return (
    <div className='bg-pinkButton flex justify-center items-center text-[16px] text-white rounded-full py-[8px] px-[15px] cursor-pointer ' >{prop.text}</div>
  )
}

export default button