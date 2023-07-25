import React from 'react'
import './Loginpage.css';
import { useNavigate } from 'react-router-dom';



const Registation = () => {
  const navigate = useNavigate();

  return (
    <div className='registation'>
   
          <form >
            <h6>Sign Up Here.!</h6>
            <input type="tel" placeholder="Enter Mobile Number" />
            <input type='email' placeholder='Enter Email'  />
            <input type='password' placeholder='Enter password'  />
            <input type='password' placeholder='Enter Confirm  password'  />
            <button onClick={()=>navigate('./home')}>Sign In</button>
        </form>
      </div >
       
   
  )
}

export default Registation;