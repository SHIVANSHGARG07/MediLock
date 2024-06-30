import React, { useState } from 'react';
import "./Login.css";

const Login = ({ setShowLogin }) => {
    const [currstate, setCurrState] = useState("Login");

    return (
            <div className="login-popup">
                <form action="" className="login-popup-container">
                    <div className="login-popup-title">
                        <h2>{currstate}</h2>
                        <img onClick={() => setShowLogin(false)} src="https://t3.ftcdn.net/jpg/03/40/25/18/360_F_340251800_LCwH7U3LFo7DUnGNbpEKX5frMJJD8a6J.jpg" alt="Cross" />
                    </div>
                <div className="login-inputs">
                    {currstate==="Login"?<></>:<input type="text" placeholder="Your Name" required />}

                    <input type="email" placeholder="Your Email" required />
                    <input type="padssword" placeholder="Enter Password" required/>
                </div>
                <button>{currstate==="Sign Up"?"Create Account":"Login"}</button>
                <div className="login-condition">
                    <input type="checkbox" required />
                    <p>By continuing, i agrre to the terma of use & privacy</p>
                </div>
                {currstate==="Login"
                ?<p>Create a new account ?<span onClick={()=>setCurrState("Sign Up")} className="down">Click here</span></p>
                :<p>Already have an Account?<span onClick={()=>setCurrState("Login")} className="down">Login Here</span></p>

                }
                </form>
            </div>
    );
};

export default Login;
