import React from 'react'

function modelHero(props) {
  return (
    <>
      <div className='relative'>

        <div className='max-w-[580px] '>
          <img src={props.src} alt="" />
        </div>
        <div className='border-pinkButton border-[7px] h-16 w-16 absolute left-8 top-40  rounded-full '>
        </div>
       
          <div className='border-pinkButton border-[2px] h-8 w-8 absolute left-28 top-28  rounded-full '>

          </div>
    
      </div>

    </>

  )
}

export default modelHero