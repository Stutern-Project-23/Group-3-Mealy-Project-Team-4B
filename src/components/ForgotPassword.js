import React, {useState} from 'react'
import axios from "axios"

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
        const url = ""
        

        
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
    

   
    

  return (
    <div>
        <div className='form'>
            <div >
                <h3>Forgot password</h3>
                <img src="/images/forgot-password.png" alt="Privacy Policy" />
                <div className='p'>
                    <p>Please enter your email address to receive a verification code</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input className='line-input' placeholder='email address' type='email' onChange={handleEmail} value={email} />
                        {errorMessage && <p className='err-mssg'>{errorMessage}</p> }
                    </div>

                    <div>
                        <button type='submit'>Send</button>
                    </div>


                </form>

            </div>

        </div>
      
    </div>
  )
}

export default ForgotPassword
