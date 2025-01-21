import React from 'react';
import { SignUp } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom'; 
const Signup = () => {


  const navigate = useNavigate(); 

  const handleOnSignUp = (signUpResponse) => {
    // This will be triggered when signup is successful.
    // You can check signUpResponse to ensure it's successful if needed.
    
    alert("Signup successful!");  // Show a success alert.
    navigate('/welcome');  // Redirect to the '/welcome' page.
  }
  return (
    <div className="flex flex-col justify-center items-center min-h-screen ">
        <h1 className="text-2xl font-bold mb-4 text-center">Sign Up for MentorMagic</h1>
        <SignUp routing="path" path="/sign-up" onSignUp={handleOnSignUp}   />
    </div>
  );
};

export default Signup;
`g`