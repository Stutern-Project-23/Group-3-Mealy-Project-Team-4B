import React from 'react'
import CategoryCard from '../CategoryCard'

const Category = () => {

    const cards = [
        {
            name: "Chinese",
            src : "chinese.svg"
        },
        {
            name: "African",
            src : "african.svg"
        },
        {
            name: "Breakfast",
            src : "breakfast.svg"
        },
        {
            name: "Lunch",
            src : "lunch.svg"
        },
        {
            name: "Dinner",
            src : "dinner.svg"
        },{
            name: "Combo",
            src : "combo.svg"
        }
    ]

  return (
    <div className='category-container'>
        <h5>Categories</h5>
        <div className='category-div'>
        {cards.map((card, index)=>{
            return(
                <div  >
                    <CategoryCard
                    key= {index}
                    id= {index}
                    name={card.name}
                    src ={card.src}
                />

                </div>
                
            )
        })}
        </div>
       
      
    </div>
  )
}

export default Category
