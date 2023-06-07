import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/ForgotPassword.css'

const CreateNewPassword = () => {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState("")

    const handleNewPassword=(e)=>{
        const password = e.target.value;
        setNewPassword(password)
        console.log(password)
    }    

    const handleConfirmPassword=(e)=>{
        const password = e.target.value;
        setConfirmPassword(password)
        console.log(password)
    }   
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        const url = ""

        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d.*\d)[A-Za-z\d]{8,}$/;

        if (!passwordRegex.test(newPassword)) {
          setErrorMessage(
            'Password should contain at least 8 letters and 2 numbers.'
          );
        }else if (newPassword !== confirmPassword){
            setErrorMessage('Passwords do not match try again')
        }else{
            
            axios
            .post(url, {password:newPassword})
            .then(res=> {
                console.log(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
            setErrorMessage("")
            setNewPassword('')
            setConfirmPassword("")
        

        console.log("form has been submitted");
        console.log(`New password: ${newPassword}`);
        console.log(`Name password: ${confirmPassword}`)


    }
}

const navigate = useNavigate()

  return (

        <div className='form'>
            <div className='form-wrapper' >
                <div className='formlink-div'>
                    <Link onClick={()=>navigate(-1)} >x</Link>
                </div>
                <h3 className='form-title'>Create New Password</h3>
                <img className='form-image' src="/images/privacy-policy.png" alt="Privacy Policy" />
                <div className='form-description'>
                    <p>Your password should contain at least 8 characters and a number</p>
                </div>
                <form className='input-form' onSubmit={handleSubmit}>
                    <div>
                        <label>New password</label>
                        <input className='line-input' placeholder='password' type='password' onChange={handleNewPassword} value={newPassword} />
                    </div>


                    <div>
                        <label>Confirm password</label>
                        <input className='line-input' placeholder='password' type='password' onChange={handleConfirmPassword} value={confirmPassword} />
                        {errorMessage && <p className='error-message'>{errorMessage}</p> }
                        
                    </div>
                    <div>
                        <button className='submit-button' type='submit'>Save</button>
                    </div>


                </form>

            </div>

        </div>
                        
  )
}


export default CreateNewPassword
