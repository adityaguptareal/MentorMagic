import React from 'react'
import Image1 from "../assets/ReviewImages/Reviewer.png"
import Image2 from "../assets/ReviewImages/Reviewer1.png"
import Image3 from "../assets/ReviewImages/Reviewer2.png"
import Image4 from "../assets/ReviewImages/Reviewer3.png"
import plus from "../assets/ReviewImages/Plus.svg"

function ModelHappyCard() {
  return (
    <div className='bg-white w-[250px] h-[100px] shadow-lg flex flex-col justify-center rounded-[14px] items-center px-3 py-7 gap-3 absolute z-30 xl:right-0 xl:top-72 right-[-195px] xl:scale-100 md:scale-75 scale-[0.7] top-36'>
<div className='text-center font-montserrat font-medium text-sm'>Our Happy Mentee</div>
<div className='flex justify-between items-center text-xs '>
  <div id="ratingBar" className='flex justify-items-center items-center gap-3'>
  <div id='starRating' className='flex gap-1 text-xs'>⭐⭐⭐ 100+</div>
  <div id="peoples" className='flex max-w-[130px]'>
    <img src={Image2}  className='w-8 h-8 relative left-[-1px] ' alt="" />
    <img src={Image1}  className='w-8 h-8 relative left-[-10px] ' alt="" />
    <img src={Image3}  className='w-8 h-8 relative left-[-20px] ' alt="" />
    <img src={Image4}  className='w-8 h-8 relative left-[-30px] ' alt="" />
    <img src={plus}  className=' relative left-[-40px] ' alt="" />
  </div>
  </div>
</div>
    </div>
  )
}

export default ModelHappyCard