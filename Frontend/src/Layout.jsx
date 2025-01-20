import React from 'react'
import Navbar from './Components/Navigation'

function Layout({ children }) {
    return (
        <div id='Hero' className='  rounded-bl-[8.5rem]  '>

            <Navbar />
            {children}
        </div>
    )
}

export default Layout
