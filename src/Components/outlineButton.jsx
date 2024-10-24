import React from 'react'
function outlineButton(prop) {
  return (
    <div className='border-2 flex justify-center items-center cursor-pointer border-pinkButton text-pinkButton rounded-full px-5 text-[16px]' >{prop.text}</div>
  )
}

export default outlineButton