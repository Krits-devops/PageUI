import React from 'react'
import frame from '../assets/frame.png'

function template({title, desc1, desc2, image, formtype, setIsLoggedIn}) {
  return (
    <div>

         <div>
                <h1>{title}</h1>

                <p>
                <span>{desc1}</span>
                <span>{desc2}</span>
            </p>

            {formtype === 'signup' ? 
            (<SignupForm/>) : 
            (<LoginForm/>)
            }

            <div>
                <div></div>
                <p>OR</p>
                <div></div>
            </div>

            <button>
                <p>Sign Up With Google</p>
            </button>

        </div>

        <div>
            <img src= {frame} width={558} height={504} loading='lazy'></img>
            <img src= {image} width={550} height={500} loading='lazy'></img>
        </div>                          
           
    </div>
  )
}

export default template