import React from 'react'
import Template from '../components/Template'
import signup from '../assets/signup.png'

function Signup({setIsLoggedIn}) {
  return (
    <Template
    title= 'Join the millions'
    desc1= 'Build skills today'
    desc2= 'Get hired tomorrow'
    image={signup}
    formtype= 'signup'
    setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup