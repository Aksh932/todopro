import React from 'react'
import './card.css'
const Card = (props) => {
   
  return (
    <div className='card' style={{"background":`${props.color}` }} >
      <h4>{props.name} {props.lastname}</h4>
     {props.isCompleted === false ? <button onClick={()=>props.completedHp(props.id)}>Completed</button> : <></>} 
      <button onClick={()=>props.deleteHp(props.id)}>Delete</button>
     
    
    </div>
  )
}

export default Card
