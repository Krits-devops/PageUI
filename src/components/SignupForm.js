import React, { useState } from 'react'
import toast from 'react-hot-toast'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

function SignupForm({setIsLoggedIn}) {

    const [formData, setFormData] = useState({
        firstname : '', lastname : '' , password : '' , email : '', confirmpassword: ''
    })

    const navigate = useNavigate();

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

        <div>
            <button>
                Student
            </button>
            <button>
                Instructor
            </button>
        </div>

        

        <form onSubmit={submitHandler}>

            <div>
                <label>
                    <p>First Name <sup>*</sup></p>
                    <input
                    required
                    type='text' name='firstname'
                    onChange={changeHandler}
                    placeholder='Enter Your Name'
                    value={formData.firstname}
                    />
                </label>
                <label>
                    <p>Last Name <sup>*</sup></p>
                    <input
                    required
                    type='text' name='lastname'
                    onChange={changeHandler}
                    placeholder='Enter Your Last Name'
                    value={formData.lastname}
                    />
                </label>
            </div>

            <label>
                    <p>Email <sup>*</sup></p>
                    <input
                    required
                    type='email' name='email'
                    onChange={changeHandler}
                    placeholder='Enter Your Email'
                    value={formData.email}
                    />
            </label>

            <div>
            <label>
                    <p>Password <sup>*</sup></p>
                    <input
                    required
                    type= {showPassword ? ('text') : ('password')} 
                    name='password'
                    onChange={changeHandler}
                    placeholder='Enter Your password'
                    value={formData.password}
                    />
                        <span onClick={()=> setShowPassword((prev)=> !prev)}>
                                        {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>) }
                        </span>
                </label>

                <label>

                    <p> ConfirmPassword <sup>*</sup></p>
                        <input
                        required
                        type= {showPassword ? ('text') : ('password')} 
                        name='confirmpassword'
                        onChange={changeHandler}
                        placeholder='Enter Your Password'
                        value={formData.confirmpassword}
                        />
                            <span onClick={()=> setShowPassword((prev)=> !prev)}>
                                            {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>) }
                            </span>
                </label>

            </div>

            <button>
                Create Account
            </button>
            
        </form>

    </div>
  )
}

export default SignupForm