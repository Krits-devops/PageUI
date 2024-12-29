import React from 'react'
import Template from '../components/Template'
import login from '../assets/login.png'

function Login({setIsLoggedIn}) {
  return (
     <Template
      title= 'Welcome Back'
      desc1= 'Build Your skill'
      desc2= 'Learn from the best'
      image= {login}
      formtype= 'login'
      setIsLoggedIn={setIsLoggedIn}
     />
  )
}

export default Login