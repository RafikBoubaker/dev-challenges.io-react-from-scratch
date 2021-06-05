import React from 'react'
import CardItem from './CardItem'

function Cards(props) {
    return (
       <div className="middle">
            {props.members.map(member =>
                <CardItem member={member} />
            )}
        </div>
    )
}

export default Cards
