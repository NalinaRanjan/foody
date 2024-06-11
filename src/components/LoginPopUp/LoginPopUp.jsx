import React, { useState } from 'react';
import './LoginPopUp.css';
import { assets } from '../../assets/assets';

const LoginPopUp = ({ setShowPopUp }) => {

    const [currState, setCurrState] = useState("Login")

    return (
        <div className='login-popup'>
            <form className='login-popup-container'>
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowPopUp(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Login" ? <></> : <input type="text" placeholder="Your Name " required />}
                    <input type="email" placeholder="Your email" required />
                    <input type="password" placeholder="Your password" required />
                </div>
                <button>{currState == "Sign Up" ? "Create Account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing I agree to the terms of use and privacy policy</p>
                </div>
                {currState === "Login" ? <p>Create a New Account?<span onClick={() => setCurrState("Sign Up")}>Click Here</span></p> : <p>Already have an Account?<span onClick={() => setCurrState("Login")}> Login here</span></p>}


            </form>
        </div>
    );
}

export default LoginPopUp;
