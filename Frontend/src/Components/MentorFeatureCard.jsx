import React from 'react'

function MentorFeatureCard(props) {
  return (
    <div className='max-w-[633px] bg-white p-4 rounded-xl flex gap-3 mt-6 z-10'>
        <div id="icon">
            <img src={props.src} className='rounded-md w-32 ' alt="" />
        </div>
        <div id="textContent">
            <h1 className='font-montserrat font-bold text-[22px] text-left'>{props.heading}</h1>
            <p className='font-montserrat text-[16px] text-left'>{props.description}</p>
        </div>

    </div>
  )
}

export default MentorFeatureCard