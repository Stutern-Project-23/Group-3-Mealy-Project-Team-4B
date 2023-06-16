import React from 'react'

const HomeForthDiv = () => {
    const cards = [
        {
            icon: 'images/homepage/bottom-icons/left.svg',
            head: 'Fast Delivery',
            text: 'Enjoy fast and reliable delivery to every location'
        },
        {
          icon: 'images/homepage/bottom-icons/mid.svg',
          head: '24/7 Delivery Services',
          text: 'Craving a delicious meal at any hour? Mealy has got you covered!'
      },
      {
        icon: 'images/homepage/bottom-icons/right.svg',
        head: 'Quality Food',
        text: 'Good Food, good Mood we take this as a top priority'
    },
    ]
  return (
    <div className='forth-div-container' >
      <div>
        <h3>Why <span>Choose</span> Us</h3>
      </div>
      <div className='forth-div-cards'>
        {cards.map((card, index)=>{
            return(
              <div className='card-wrap'>
                  <div className='card'  key={index} id={index} >
                    <div>
                        <img src={card.icon} />
                    </div>
                    <div>
                        <h4>{card.head}</h4>
                    </div>
                    <div>
                        <p>{card.text}</p>
                    </div>
                </div>
              </div>
              
            )
          })}
      </div>
        
    </div>
  )
}

export default HomeForthDiv