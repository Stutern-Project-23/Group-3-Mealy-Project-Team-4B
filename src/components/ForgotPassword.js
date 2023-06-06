import React, {useState} from 'react'
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("")

    const handleEmail=(e)=>{
        const mail = e.target.value;
        setEmail(mail)
        console.log(email)
    } 
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        const url = "https://mealyapp-bdev.onrender.com/api/v1/user/forgotPassword"
        

        
        axios.post(url, email)
        .then(res=> {
            console.log(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
        setErrorMessage("")
        setEmail('')
        
        

        console.log("your mail has been submitted");
        console.log(`email address: ${email}`);
        


    }
    

   
    const navigate = useNavigate()

  return (

        <div className='form'>
            <div >
            <div className='formlink-div'>
                    <Link onClick={()=>navigate(-1)}>x</Link>
                </div>
                <h3>Forgot password</h3>
                <img src="/images/forgot-password.png" alt="Privacy Policy" />
                <div className='p'>
                    <p>Please enter your email address to receive a verification code</p>
                </div>
                <form className='input-form' onSubmit={handleSubmit}>
                    <div>
                        <input className='line-input' placeholder='email address' type='email' onChange={handleEmail} value={email} />
                        {errorMessage && <p className='err-mssg'>{errorMessage}</p> }
                    </div>

                    <div>
                        <button className='pop-up-btn' type='submit'>Send</button>
                    </div>


                </form>

            </div>

        </div>
      
  )
}

export default ForgotPassword
