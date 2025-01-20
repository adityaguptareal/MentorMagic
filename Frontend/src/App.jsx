import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import MentorFind from './screens/MentorFind'
import MyMentors from './screens/MyMentors'
import Resources from './screens/Resources'
import Signin from './screens/Signin'
import Signup from './screens/Signup'
import Navbar from './Components/Navigation'
import Layout from './Layout'

function App() {
  return (
    <>
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentor" element={<MyMentors />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Layout>
      </BrowserRouter>
    </>
  )
}

export default App