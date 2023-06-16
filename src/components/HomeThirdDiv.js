import React from 'react'

const HomeThirdDiv = () => {

    const cards = [
        {
            name: 'Breakfast Hub',
            icon: 'images/homepage/card/left-icon.svg',
            image: 'images/homepage/card/left-image.svg'
        },
        {
            name: 'Gory Home',
            icon: 'images/homepage/card/mid-icon.svg',
            image: 'images/homepage/card/mid-image.svg'
        },
        {
            name: 'Breakfast Hub',
            icon: 'images/homepage/card/right-icon.svg',
            image: 'images/homepage/card/right-image.svg'
        }
    ]
  return (
    <div className='third-div-container'>
        <div>
            <h3>Most Popular <span>Restaurants</span></h3>
        </div>
        <div className='third-div-wrapper'>
             {cards.map((card, index)=>{
                    return(
                        <div className='third-card-wrapper'>
                            <div key={index} id= {index} >
                                <div className='img-h3' >
                                    <img src={card.icon}/>
                                    <h4>{card.name}</h4>
                                </div>
                                <div>
                                    <img className='main-image' src={card.image}/>
                                </div> 
                            </div>
                        </div>
                        
                        
                    )
                })}
        </div>
        
    </div>
  )
}

export default HomeThirdDiv