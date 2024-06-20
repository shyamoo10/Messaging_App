import React from 'react'
import  {FaComment,FaUser} from 'react-icons/fa';

function  LogOutForm() {
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
                    <div className='main_sec'>
                      <div className='upper_class'>
                           <FaUser/>
                      </div>
                      <div className='middle_class'>
                         <h4>You are Logged Out</h4>
                         <p>Thank you for using Odin</p>
                           
                            
                          
                          
                      </div>
                      <div className='lower_class'>
                        <button><a href="#">Sign In</a></button>
                      </div>
                      </div> 

                </div>
            </div>
        </div>
    </div>
  )
}

export default LogOutForm