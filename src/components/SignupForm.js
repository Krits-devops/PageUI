import React, { useState } from 'react'
import toast from 'react-hot-toast'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

function SignupForm({setIsLoggedIn}) {

    const [formData, setFormData] = useState({
        firstname : '', lastname : '' , password : '' , email : '', confirmpassword: ''
    })

    const navigate = useNavigate();

    const [accountType, setAccountType] = useState('student')

    const [showPassword, setShowPassword] = useState(false)

    function changeHandler(event) {
        setFormData((prevData)=>(
            {
                ...prevData,
                [event.target.name] : event.target.value
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault()

        if(formData.password != formData.confirmpassword){
            toast.error('Password Do Not Match')
            return
        }
        setIsLoggedIn(true)
        toast.success('Account Created')
        const account = {
            ...formData
        }
        console.log(account);

        navigate('/dashboard')
    }

  return (
    <div>

        {/* student- instructor tab */}

        <div className='flex bg-richblack-800 p-1 gap-x-2 my-6 rounded-full max-w-max'>
            <button 
            className={`${accountType=== 'student' 
                ? 'bg-richblack-900 text-richblack-5'
                : 'bg-transparent text-richblack-200'} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={()=> setAccountType('student')}>
                Student
            </button>
            <button 
                        className={`${accountType=== 'instructor' 
                            ? 'bg-richblack-900 text-richblack-5'
                            : 'bg-transparent text-richblack-200'} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={()=> setAccountType('instructor')}>
                Instructor
            </button>
        </div>

        

        <form onSubmit={submitHandler}>

            <div className='w-full h-full flex justify-between'>
                <label>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name <sup className='text-pink-200'>*</sup></p>
                    <input
                    required
                      className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    type='text' name='firstname'
                    onChange={changeHandler}
                    placeholder='Enter Your Name'
                    value={formData.firstname}
                    />
                </label>
                <label>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name <sup className='text-pink-200'>*</sup></p>
                    <input
                      className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    required
                    type='text' name='lastname'
                    onChange={changeHandler}
                    placeholder='Enter Your Last Name'
                    value={formData.lastname}
                    />
                </label>
            </div>

            <label>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email <sup className='text-pink-200'>*</sup></p>
                    <input
                      className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    required
                    type='email' name='email'
                    onChange={changeHandler}
                    placeholder='Enter Your Email'
                    value={formData.email}
                    />
            </label>

            <div className='flex gap-x-4'>
            <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Password <sup className='text-pink-200'>*</sup></p>
                    <input
                      className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    required
                    type= {showPassword ? ('text') : ('password')} 
                    name='password'
                    onChange={changeHandler}
                    placeholder='Enter Your password'
                    value={formData.password}
                    />
                        <span className='absolute right-3 top-[40px] cursor-pointer'
                         onClick={()=> setShowPassword((prev)=> !prev)}>
                                        {showPassword ? (<AiOutlineEyeInvisible fontSize={20} fill='#AFB2BF'/>) 
                                        : (<AiOutlineEye fontSize={20} fill='#AFB2BF'/>) }
                        </span>
                </label>

                <label className='w-full relative'>

                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'> ConfirmPassword <sup className='text-pink-200'>*</sup></p>
                        <input
                        required
                          className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        type= {showPassword ? ('text') : ('password')} 
                        name='confirmpassword'
                        onChange={changeHandler}
                        placeholder='Enter Your Password'
                        value={formData.confirmpassword}
                        />
                            <span className='absolute right-3 top-[40px] cursor-pointer'
                             onClick={()=> setShowPassword((prev)=> !prev)}>
                                            {showPassword ? (<AiOutlineEyeInvisible  fontSize={20} fill='#AFB2BF'/>) 
                                            : (<AiOutlineEye  fontSize={20} fill='#AFB2BF'/>) }
                            </span>
                </label>

            </div>

            <button className='w-full flex justify-center items-center bg-yellow-50 font-medium 
        rounded-[8px] px-[12px] py-[8px] mt-5'>
                Create Account
            </button>
            
        </form>

    </div>
  )
}

export default SignupForm