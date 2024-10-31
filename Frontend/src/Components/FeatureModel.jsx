import React from 'react'
function FeatureModel(props) {
  return (
    <div className='w-570px '>
        <div id='modelBackdrop' className='  w-[492px] h-[492px] relative rounded-full bg-pinkButton'>
    <img src={props.src} className='absolute z-10' alt="" />

        </div>

    </div>
  )
}

export default FeatureModel