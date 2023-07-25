import React, { useState } from 'react'
import './Loginpage.css'
import Registation from './Registation';



function Login() {
    const [signin,SetSignIn] = useState(false);


    const showSignin = (e)=>{
        e.preventDefault();
        SetSignIn(true);
    }
  return (
    <div className='login'>
        <div className='login_hed'>
            <img src='https://pngimg.com/uploads/netflix/netflix_PNG25.png' alt='logo' className='logo'/>
            <select id="country-selector" className='lang'>
                  <option value="earth">&#127758; IND</option>
                  <option value="usa">&#127758; USA</option>
                  <option value="canada">&#127758; Canada</option>
                  <option value="uk">&#127758; UK</option>
                  <option value="france">&#127758; France</option>
           </select>
            <button className='login_button'onClick={showSignin}>Sign Up</button>
        </div>
        <div className='login_body'>
          {
            signin ? (<Registation />) : (
                <>
                <h1>Unlimited movies, TV shows and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <h3>Watch anywhere. Cancel anytime.Ready to watch? Enter your email to create or restart your membership.</h3>

                <form className='login_form' >
                <input type='text' placeholder='Email Address'/>
                <button onClick={showSignin}>Get Stated &raquo;</button>
                </form>
                </>
            )
          }

        </div>
        <div className='gani'></div>
    </div>
    
  )
}

export default Login;