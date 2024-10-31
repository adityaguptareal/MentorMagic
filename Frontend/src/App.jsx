import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './screens/Home'
import MentorFind from './screens/MentorFind'
import MyMentors from './screens/MyMentors'
import Resources from './screens/Resources'
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
    <MentorFind />
  </div>
},
{
  path: "/mentor",
  element: <div>
    <MyMentors />
  </div>
},
{
  path: "/resources",
  element: <div>
    <Resources />
  </div>
},
])

function App() {
  return (
    <RouterProvider router={Routes}></RouterProvider>
  )
}

export default App