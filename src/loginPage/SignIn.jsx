import React, { useState } from 'react'
import { MdOutlineMailLock } from "react-icons/md";
import { TbPasswordUser } from "react-icons/tb";
import { Link } from 'react-router-dom';



function SignIn() {

  const [signin, setSignIn] = useState(false);

    const handleSignIn =() =>{
        setSignIn(true)
        if(signin == ''){
            alert("Please fill the form");
        }
         else{
            alert("Successfull Login")
        }
     }
    
   
  return (
    <>
      <div className='Signin-container'>
        <div className="content">
            <div className="logreg-box">
                <div className="form-box register ">
                    <form action="#">
                        <h1>Sign In</h1>

                        <div className="input-box">
                            <span className='icon'><MdOutlineMailLock/></span>
                            <input type="email" required />
                            <label htmlFor="">Email </label>
                        </div>
                        <div className="input-box">
                            <span className="icon"><TbPasswordUser /></span>
                            <input type="password" required />
                            <label htmlFor="">Password</label>
                        </div>
                       <div className="remember-forgot">
                        <label htmlFor=""><input type="checkbox" />Remember me</label>
                        <a href="#">Forgot Password</a>
                       </div>

                       <button type='submit' className='btn' ><Link to='/query-form' onClick={handleSignIn}>Sign In</Link> </button>    

                    </form>
                    
                </div>
            </div>
        </div>
      </div>

    </>
  )
}

export default SignIn
