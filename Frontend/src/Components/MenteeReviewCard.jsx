import React from 'react'

function MenteeReviewCard(props) {
    return (
        <div className='bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col gap-4 p-4 w-fit'>
            <div id='starRating'>{props.rating}</div>
            <div id='reviewContent' className='font-montserrat'>
                <div id="reviewTitle" className='text-[24px] '>{props.title}</div>
                <div id="review" className='text-[16px] font-roboto'>{props.review}</div>
            </div>
            <div id='userProfile' className='flex gap-2 items-center'>
                <img className='rounded-full w-[61px] h-[61px]' src={props.userImg} alt="" />
                <div id='userDetails' className='font-montserrat'>
                    <h1 className='font-montserrat font-bold text-[17px]'>{props.username}</h1>
                    <p className='text-[17px] font-roboto font-medium text-gray-600'>{props.date}</p>
                </div>
            </div>

        </div>
    )
}

export default MenteeReviewCard