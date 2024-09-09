import React, { useState } from 'react'
import { FaUserTie } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

import './Login.css'
import SignIn from './SignIn';

function SignUp() {

    const [signup, setSignUp] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        IsAccepted: false,
    });

    // const changeHandler = (event) => {
    //     if (event.target.name === "IsAccepted") {
    //       setSignUp({ ...signup, [event.target.name]: event.target.checked });
    //     } else {
    //       setSignUp({ ...signup, [event.target.name]: event.target.value });
    //     }
    //   };

    const handleSignUp =() =>{
        setSignUp(true)
        if(signup === " "){
            alert("Please fill the form");
        }
         else{
            alert("Successfully Login")
        }
     }
   
return (
    <>
    
    <div className="container">
      <div className="content">
     <div className="form-box login" >
                <form action="#">
                    <h1>Create An Account </h1>
                    <h6 className=''>Create a Account To Login Query Form</h6>

                  
                    <div className="input-box">
                        <span className="icon"><FaUserTie /></span>
                        <input type="text" required/>
                        <label htmlFor="">Name</label>
                    </div>
                 
                    <div className="input-box">
                        <span className="icon"><MdAttachEmail /></span>
                        <input type="email" required/>
                        <label htmlFor="">Email</label>
                    </div>
                    <div className="input-box">
                        <span className="icon"><RiLockPasswordLine /></span>
                        <input type="password" required/>
                        <label htmlFor="">Password</label>
                    </div>
                    <div className="input-box">
                        <span className="icon"><RiLockPasswordLine /></span>
                        <input type="password" required/>
                        <label htmlFor="">Confirm Password</label>
                    </div>
                    <div className="remember-forgot">
                        <label htmlFor=""><input type="checkbox"/>I agree to the terms & conditions</label>
                    </div>
                    
                    <button type="submit" className="btn" onClick={ handleSignUp}> <a href="#" ><Link to='/query-form'> Sign Up </Link> </a></button>

                    <div className="login-register">
                        <p>Already have an account ? <a href="#" className="login-link"> <Link to='/sign-in'> Sign In </Link> </a></p>
                    </div>
                </form>
        </div>
      </div>  
  </div>   

 </>
  )
}

export default SignUp
