import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import MentorFind from './screens/MentorFind'
import MyMentors from './screens/MyMentors'
import Resources from './screens/Resources'
import SignIn from './screens/Signin'
import SignUp from './screens/Signup'
import Navbar from './Components/Navigation'
import Layout from './Layout'
import WelcomePage from './screens/Welcome'
// import { SignIn,SignUp } from '@clerk/clerk-react';


function App() {
  return (
    <>
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentor" element={<MyMentors />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/sign-in/" element={<SignIn />} />
        <Route path="/sign-up/" element={<SignUp />} />
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
    </Layout>
      </BrowserRouter>
    </>
  )
}

export default App