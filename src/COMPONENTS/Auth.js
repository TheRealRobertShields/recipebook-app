import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'

const Auth = () => {

    const [showPassword, setShowPassword] = useState(false);

    const isSignup = true;

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)

    const handleSubmit = () => {

    };

    const handleChange = () => {

    };

    return (
        <div className='auth-container flex-center-col'>
            <div className='auth-form'>
                {isSignup ? 
                <>
                    <FontAwesomeIcon className='auth-icon' icon='id-card-alt'/>
                    <h1>Sign Up</h1>
                </> :
                <>
                    <FontAwesomeIcon className='auth-icon' icon='user-alt'/>
                    <h1>Sign In</h1>
                </>}
                <form onSubmit={handleSubmit} >
                    {isSignup ? 
                    <>
                        <div className='input-text flex-center'>
                            <input autoComplete='new' type='text' placeholder='First Name' onChange={handleChange}/>
                            <input autoComplete='new' type='text' placeholder='Last Name' onChange={handleChange}/>
                        </div>
                        <div className='input-text flex-center'>
                            <input autoComplete='new' type='email' placeholder='Email' onChange={handleChange}/>
                        </div>
                        <div className='input-text flex-center'>
                            <input autoComplete='new' type={showPassword ? 'text' : 'password'} placeholder='Password' onChange={handleChange}/>
                            <FontAwesomeIcon onClick={handleShowPassword} icon={showPassword ? 'eye' : 'eye-slash'}/>
                        </div>
                        <div className='input-text flex-center'>
                            <input autoComplete='new' type={showPassword ? 'text' : 'password'} placeholder='Confirm Password' onChange={handleChange}/>
                        </div>
                        <div className='input-submit flex-center'>
                            <input type='submit' value='Sign up'/>
                        </div> 
                    </> :
                    <>
                        <div className='input-text flex-center'>
                            <input autoComplete='new' type='text' placeholder='Email' onChange={handleChange}/>
                        </div>
                        <div className='input-text flex-center'>
                            <input autoComplete='new' type={showPassword ? 'text' : 'password'} placeholder='Password' onChange={handleChange}/>
                            <FontAwesomeIcon onClick={handleShowPassword} icon={showPassword ? 'eye' : 'eye-slash'}/>
                        </div>                      
                        <div className='input-submit flex-center'>
                            <input type='submit' value='Sign in'/>
                        </div> 
                    </>}
                </form>
            </div>
        </div>
    )
}

export default Auth
