import React from 'react';
import { SignUp } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const handleComplete = () => {
    alert("Signup Successful!");
    navigate("/welcome"); // Redirect to "Welcome" page.
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center">Sign Up for MentorMagic</h1>
      <SignUp fallbackRedirectUrl={"/welcome"}/>
      {/* <SignUp routing="path" path="/sign-up" signInUrl="/sign-in" forceRedirectUrl={"/welcome"} /> */}
    </div>
  );
};

export default Signup;
