import React from 'react'

const SetDelivery = () => {
    const handleSubmit = (e)=>{
        e.preventDefault();
    }
  return (
    <div>
      <div className='form'>
            <div >
                <h3>Set a delivery address</h3>
                <img src="/images/delivery-address.png" alt="delivery-address" />
                <div className='p'>
                    <p>Tell us where you are and we'll bring the to you</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <button type='submit'>Use current location</button>
                    </div>
                </form>

            </div>

        </div>
      
    </div>
  )
}

export default SetDelivery
