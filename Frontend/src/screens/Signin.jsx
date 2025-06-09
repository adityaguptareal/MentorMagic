import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const Signin = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen ">
      <h1 className="text-2xl font-bold mb-4 text-center">Signin for MentorMagic</h1>
      {/* <SignIn routing="path" path="/sign-in" signUpUrl="/sign-up" forceRedirectUrl={"/welcome"}/> */}
      <SignIn forceRedirectUrl={"/welcome"}/>

    </div>
  );
};

export default Signin;
