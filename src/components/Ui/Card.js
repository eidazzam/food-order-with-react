import React from 'react'
import classes from './Card.module.css'
const Card = props => {
  return (
    <>
    <div className={classes.meals}>
    {props.children} 
    </div>
    
    </>
  )
}

export default Card
