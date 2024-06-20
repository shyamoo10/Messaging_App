import React from 'react'
import  {FaComment} from 'react-icons/fa';

function  RegisterForm() {
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
                      <h1>Register Account</h1>
                      <p>Get your free Odin account now</p>
                      </div>
                      <div className='lower'>
                        <form action="">
                            <label htmlFor="email">Email</label>  <br />
                            <input type="email"  id='email' />
                            <br />
                            <label htmlFor="username">Username</label>
                            <br />
                            <input type="text" id='username' />
                            <br />
                            <label htmlFor="password">Password</label>
                            <br />
                            <input type="password"  id='password'/>
                            <p>By registering you agree to the Odin Terms of Use</p>
                            <button type='submit'>Register</button>
                        </form>
                         <p>Already have an account ? <a href="">Log in</a></p>
                      </div>
                      

                </div>
            </div>
        </div>
    </div>
  )
}

export default RegisterForm