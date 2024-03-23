import React, { useState } from 'react'
import "./LoginScreen.css";
import SignupScreen from './SignupScreen';

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className='loginScreen'>
      <div className="loginScreen_background">
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png'
          alt=""
          className="loginScreen_logo"
        />
        <button className='loginScreen_button'>Sign In</button>
        <div className="loginScreen_gradient" />
        <div className="loginScreen_body">
          {signIn ? (
            <SignupScreen />
          ) : <>
            <h1>Enjoy big movies, hit series and more from ₹149.</h1>
            <h2>Join today. Cancel anytime.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

            <div className="loginScreen_input">
              <form>
                <input type="email" placeholder='Email Address' />
                <button onClick={() => setSignIn(true)} className="loginScreen_getStarted">GET STARTED</button>
              </form>
            </div>
          </>
          }

        </div>
      </div>
    </div>
  )
}

export default LoginScreen
