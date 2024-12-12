import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './screens/Home'
import MentorFind from './screens/MentorFind'
import MyMentors from './screens/MyMentors'
import Resources from './screens/Resources'
import Signin from './screens/Signin'
import Signup from './screens/Signup'
import Navbar from './Components/Navigation'

const Routes = createBrowserRouter([{
  path: "/",
  element: <div>
    <Home />
  </div>
},
{
  path: "/mentors",
  element: <div>
    <Navbar/>
    <MentorFind />
  </div>
},
{
  path: "/mentor",
  element: <div>
    <Navbar/>
    <MyMentors />
  </div>
},
{
  path: "/resources",
  element: <div>
    <Navbar/>
    <Resources />
  </div>
},
{
  path: "/signin",
  element: <div>
    <Navbar/>
    <Signin />
  </div>
},
{
  path: "/signup",
  element: <div>
    <Navbar/>
    <Signup />
  </div>
},
])

function App() {
  return (
    <RouterProvider router={Routes}></RouterProvider>
  )
}

export default App