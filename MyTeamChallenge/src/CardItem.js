import React from 'react'
import './index.css'

function CardItem(props) {
    return (
        <>
        <div className='oneMember'>
            <div className= {props.member.className}>
               <img src ={props.member.src} />
               <p className ='name'> {props.member.name} </p> 
               <p className ='job'>{props.member.job}</p> 
               </div>
        </div>
            
        </>
    )
}

export default CardItem
