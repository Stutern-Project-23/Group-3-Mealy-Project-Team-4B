import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Dropdown = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropDown = ()=>{
        setIsOpen(!isOpen)
    }

  return (
    <div>
        <button className='dropdown-btn' onClick={toggleDropDown} >
          {props.name}<img src= {`images/${props.img}`} alt={props.alt}/>
        </button>
        { isOpen &&(
        <div className= {props.className} >
            <Link  to= {props.droplink1} >{props.item1}</Link><br/>
            <Link  to= {props.droplink2} >{props.item2}</Link><br/>
            <Link  to= {props.droplink3} >{props.item3}</Link><br/>
            <Link  to= {props.droplink4} >{props.item4}</Link>      
        </div>
        )}
        
    </div>
  )
}

export default Dropdown
