import React, { useState } from 'react'

function LoginForm() {

    const [formData, setFormData] = useState({
        email : '' , password : ''
    })

    function changeHandler(event) {
        setFormData((prevData)=>(
            {
                ...prevData,
                [event.target.name] : event.target.value
            }
        ))
    }

  return (
     <form>
        <label>
            <p>
                Email Address <sub>*</sub>
            </p>
            <input 
            type="email" name="email" required 
            value = {formData.email} 
            onChange={changeHandler}
            placeholder='Enter Your Email Id'
            />
        </label>
     </form>
  )
}

export default LoginForm