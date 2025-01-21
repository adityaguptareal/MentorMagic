import React from 'react'
import { SignIn } from '@clerk/react-router'

export default function Signin() {
  return (
    <div>
      <h1>Sign in or up route</h1>
      <SignIn />
    </div>
  )
}