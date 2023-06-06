import React from 'react'

const CategoryCard = (props) => {
  return (
    <div  >
        <img src={`images/dishes/${props.src}`} alt={props.alt} />
        <p>{props.name}</p> 
    </div>
  )
}

export default CategoryCard
