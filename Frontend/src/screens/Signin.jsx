import React from 'react';
import Navigation from "../Components/Navigation";

function Signin() {
  return (
    <>
      <div className="w-screen h-screen bg-lightPink overflow-hidden">
        <Navigation />
        <div className='flex'>
          <div id="Content" className="w-3/5 h-screen overflow-hidden border-e-red-600 border-2 p-5">
            Hi This is Content Box
          </div>
          <div id='formBox'>
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
