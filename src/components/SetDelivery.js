import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const SetDelivery = () => {
    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    const navigate = useNavigate()

  return (
      <div className='form'>
            <div >
            <div className='formlink-div'>
                    <Link onClick={()=>navigate(-1)} >x</Link>
                </div>
                <h3>Set a delivery address</h3>
                <img src="/images/delivery-address.png" alt="delivery-address" />
                <div className='p'>
                    <p>Tell us where you are and we'll bring the to you</p>
                </div>
                <form className='input-form' onSubmit={handleSubmit}>
                    <div>
                        <button className='pop-up-btn' type='submit'>Use current location</button>
                    </div>
                </form>

            </div>

        </div>
      
  )
}

export default SetDelivery
