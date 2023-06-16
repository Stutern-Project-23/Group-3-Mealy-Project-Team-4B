import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const EditName = () => {
    const [inputField, setInputField] = useState({
        name : "",
        email : ""
    })

    const handleNameChange =(e)=>{
        setInputField(e.target.value)
        console.log(e.target.value)
    }

    const handleEmailChange =(e)=>{
        setInputField(e.target.value)
        console.log(e.target.value)

    }

    



  return (
   <div>
        <div>
            <div>
                <Link>x</Link>
            </div>
            <div>
                <h3>Your detail </h3>
            </div>
            <form>
                <div>
                    <label htmlFor='name' >Name</label>
                    <img src='images/edit-name.svg' alt='edit-name'/>
                    <input onChange={handleNameChange} type='text' placeholder='Account holder name' value={inputField.name}/>
                </div>
                <div>
                    <label htmlFor='email' >Email</label>
                    <img src='images/email.svg' alt='email'/>
                    <input onChange={handleEmailChange} type='email' placeholder='Account holder email'value={inputField.email}/>
                </div>
                <div>
                    <button>Save</button>
                </div>
            </form>
        </div>      
   </div>
  )
}

export default EditName
