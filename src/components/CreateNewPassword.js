import React, { useState } from 'react';
import axios from 'axios';

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
          return;
        }
        

        if (newPassword === confirmPassword){
            axios.post(url, newPassword)
            .then(res=> {
                console.log(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
            setErrorMessage("")
            setNewPassword('')
            setConfirmPassword("")
        }else{
            setErrorMessage('Passwords do not match try again')
        }

        console.log("form has been submitted");
        console.log(`New password: ${newPassword}`);
        console.log(`Name password: ${confirmPassword}`)


    }

  return (
        <div className='form'>
            <div >
                <h3>Create New Password</h3>
                <img src="/images/privacy-policy.png" alt="Privacy Policy" />
                <div className='p'>
                    <p>Your password should contain at least 8 characters and a number</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>New password</label>
                        <input placeholder='password' type='password' onChange={handleNewPassword} value={newPassword} />
                    </div>


                    <div>
                        <label>Confirm password</label>
                        <input placeholder='password' type='password' onChange={handleConfirmPassword} value={confirmPassword} />
                        {errorMessage && <p className='err-mssg'>{errorMessage}</p> }
                        
                    </div>
                    <div>
                        <button type='submit'>Save</button>
                    </div>


                </form>

            </div>

        </div>
                        
      
  )
}

export default CreateNewPassword