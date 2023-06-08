import React from 'react'
import RestaurantCard from './RestaurantCard'


const Restaurants = () => {
    const restCard=[
        {
            mealImg: 'breakfast-hub.svg',
            name: 'Breakfast Hub',
            rating: '4.5',
            price: '$4',
            alt: 'breakfast-hub'
        },
        {
            mealImg: "gory's-cafe.svg",
            name:"Gory's Cafe",
            rating: '4.5',
            price: '$4',
            alt: 'gory-cafe'
        },
        {
            mealImg: 'platters-couch.svg',
            name: "Platter's Hub",
            rating: '4.5',
            price: '$4',
            alt: 'platter-couch'
        },
        {
            mealImg: 'golden-tulip.svg',
            name: 'Golden Tulip',
            rating: '4.5',
            price: '$4',
            alt: 'golden-tulip'
        },
        {
            mealImg: 'the-hub.svg',
            name: 'The Hub',
            rating: '4.5',
            price: '$4',
            alt: 'the-hub'
        },
        {
            mealImg: 'iya-moria.svg',
            name: 'Iya Moria',
            rating: '4.5',
            price: '$4',
            alt: 'iya-moria'
        },
        {
            mealImg: 'wingman-pub.svg',
            name: 'Wingman Pub',
            rating: '4.5',
            price: '$4',
            alt: 'wingman'
        },
        {
            mealImg: 'eat-n-go.svg',
            name: 'Eat N Go Hub',
            rating: '4.5',
            price: '$4',
            alt: 'eat'
        },
        {
            mealImg: 'debonnairs.svg',
            name: 'Debonnairs',
            rating: '4.5',
            price: '$4',
            alt: 'debonnair'
        },
]

  return (
    <div className='restaurants-container' >
                <h2>All Restaurants</h2>

                <div className='restaurant-card-container'>
                {restCard.map((rest, index)=>{
                    return(
                        <RestaurantCard
                        
                        key={index}
                        id={index}
                        mealImg = {rest.mealImg}
                        name= {rest.name}
                        // rating = {rest.rating}
                        // price= {rest.price}
                        alt={rest.alt}
                        
                        />
            )
        })}
        
    </div>
    </div>
    
  )
}

export default Restaurants
