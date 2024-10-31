import React from 'react'
function outlineButton(prop) {
  return (
    <div className='border-2 flex justify-center items-center cursor-pointer border-pinkButton text-pinkButton rounded-full px-5 py-[0.4rem] text-[16px] hover:scale-110 transition-all' >{prop.text}</div>
  )
}

export default outlineButton