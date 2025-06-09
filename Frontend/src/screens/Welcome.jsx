import React from 'react';
import { useUser} from '@clerk/clerk-react';
const WelcomePage = () => {
  const {isSignedIn,user,isLoaded}=useUser()
  return (
    <div className="flex items-center justify-center min-h-screen">
      {isSignedIn && isLoaded ?  <h1 className="text-4xl font-bold">Welcome {user.firstName} to MentorMagic!</h1>:<p>Not available</p>}
     

    </div>
  );
};

export default WelcomePage;
