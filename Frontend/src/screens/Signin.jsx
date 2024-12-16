import React from 'react';

function Signin() {
  return (
    <>
      <div className="w-screen h-screen  overflow-hidden">
     
        <div className='flex'>
          <div id="Content" className="w-[70%] h-screen overflow-hidden bg-pink-600 text-white  p-5">
            <div id='ctaHeading' className='text-4xl text-center my-24 font-bold font-montserrat'>Join, and Get Start your Career</div>
          </div>
          <div id='formBox'>
            <div id='formHeading' className='text-center'>Fill the Form</div>
            <form action="" className='flex flex-col justify-center items-center border border-red-50 p-6'>
              
            <label htmlFor="name">Enter Your Name :</label>
            <input type="text" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
