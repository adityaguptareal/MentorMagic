import React from 'react';

const PopularMentorCard = ({ name, position, src, description, bgColor }) => (
  <div className={`w-[300px] h-[300px] ${bgColor} relative rounded-2xl`}>
    <div id="name" className='font-montserrat font-medium text-[18px] relative top-[40%] left-[30%]'>
      {name}
    </div>
    <div id="position" className='font-montserrat font-medium text-[13px] relative top-[40%] left-[30%] text-gray-800'>
      {position}
    </div>
    <div id='image' className='relative left-[-40%]'>
      <img src={src} alt="" />
    </div>
    <div id="description" className=' rounded-xl bg-white font-montserrat text-left p-4 text-[16px] absolute left-[-50px] bottom-[-20px] shadow-xl'>
      {description}
    </div>
  </div>
);

export default PopularMentorCard;
