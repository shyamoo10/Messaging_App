import React from 'react'
import  {FaComment} from 'react-icons/fa';

function  LoginForm() {
  return (
    <div  className='register_main'>
        <div className='left_sec'>
              <div className='upper'>
                <div className='icon'>
                <FaComment/>
                <h1>Odin</h1>
                </div>
               
                <p>Messagig app</p>
              </div>
              <div className='image'>
                <img src="../public/images/auth-img.9302755e73810f6c27d2.png" alt="" />
              </div>
        </div>
        <div className='right_sec'>
            <div className='reg_form_main'>
                <div className='reg_form'>
                      <div className='upper'>
                      <h1>Welcome Back !</h1>
                      <p>Sign in to continue to Odin.</p>
                      </div>
                      <div className='lower'>
                        <form action="">
                           
                            
                            <label htmlFor="username">Username</label>
                            <br />
                            <input type="text" id='username' />
                            <br />
                            <label htmlFor="password">Password</label>
                            <br />
                            <input type="password"  id='password'/>
                            
                            <button type='submit'>Log In</button>
                        </form>
                         <p>Don't have an account  ? <a href="">Register</a></p>
                      </div>
                      

                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginForm