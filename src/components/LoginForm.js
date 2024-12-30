import React, { useState } from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';

function LoginForm({setIsLoggedIn}) {

    const navigate = useNavigate(); 

    const [formData, setFormData] = useState({
        email : '' , password : ''
    })

    const [showPassword , setShowPassword] = useState(false)

    function changeHandler(event) {
        setFormData((prevData)=>(
            {
                ...prevData,
                [event.target.name] : event.target.value
            }
        ))
    }

    function submitHandler(event) {
        event.preventDefault();
        
        setIsLoggedIn(true);
        toast.success('Logged In');
        navigate('/dashboard')
    }

  return (
    
     <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-4'>

        <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Email Address <sup className='text-pink-200'>*</sup>
            </p>
            <input 
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            type="email" name="email" required 
            value = {formData.email} 
            onChange={changeHandler}
            placeholder='Enter Your Email Id'
            />
        </label>

        <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Password <sub  className='text-pink-200'>*</sub>
            </p>
            <input 
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            type= {showPassword ? ('text') : ('password')} 
            name="password" required 
            value = {formData.password} 
            onChange={changeHandler}
            placeholder='Enter Your Password'
            />

            <span className='absolute right-3 top-[42px] cursor-pointer'
            onClick={()=> setShowPassword((prev)=> !prev)}>
                {showPassword ? (<AiOutlineEyeInvisible 
                fontSize={20} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={20} fill='#AFB2BF'/>) }
            </span>

            <Link to= '#'>
            <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>
               Forgot Password 
            </p>
            </Link>

        </label>

        <button className='w-full flex justify-center items-center bg-yellow-50 font-medium 
        rounded-[8px] px-[12px] py-[8px] mt-5'>
            Sign In
        </button>

     </form>
  )
}

export default LoginForm