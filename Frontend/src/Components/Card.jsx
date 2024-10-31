import React from 'react'

function Card(props) {
  return (
    <div className='max-w-[332px] max-h-[355px] flex flex-col gap-6 text-left py-[47px] px-[46px] bg-white rounded-3xl shadow-md border-gray-500 text-gray-700 scale-[0.9] md:scale-100'>
        <img src={props.src} className='w-[105px] h-[105px]' alt="" />
        <h2 className=' font-montserrat font-extrabold text-xl'>{props.heading}</h2>
        <p className='text-sm font-montserrat text-left '>{props.content}</p>

    </div>
  )
}

export default Card