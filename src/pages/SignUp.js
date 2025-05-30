import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const SignUp = () => {
  return (
    <>
    <Meta title="SignUp" />
    <BreadCrumb title="SignUp" />
    <Container class1="login-wrapper py-5 home-wrapper-2">
            
                <div className="row">
                    <div className="col-12">
                    <div className="auth-card">
                        <h3 className='text-center mb-3'>Create Account</h3>
                        <form action="" className='d-flex flex-column gap-15'>
                        <CustomInput type="text" name='name' placeholder='FirstName' />
                        <CustomInput type="tel" name='mobile' placeholder='Mobile Number' />
                        <CustomInput type="email" name='email' placeholder='Email' />
                        <CustomInput type="password" name='password' placeholder='Password'/>
                            <div>   
                           <div className='d-flex mt-3 justify-content-center gap-15 align-items-center'>
                            <button className="button border-0">Sign Up</button>
                           
                           </div>
                            </div>
                        </form>
                    </div>
    
                    </div>
                </div>
            
        </Container>
    </>
  )
}

export default SignUp