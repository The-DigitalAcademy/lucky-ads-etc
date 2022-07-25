import React from 'react'
import CardItem from './CardItem';
import './Cards.css';


function cards() {
  return (
    <div className='cards'>
    <h1>Check out these EPIC Destinaions</h1>
    <div className="cards__container">
    <div className='cards__wrapper'>
    <ul className="cards__items">
            <cardsItem  
            src="images/img-9.jpg"
            text="Explore the hidden waterfall deep indside the Amazon Jungle"
            label='Adventure'
            path='/services'
            />
        </ul>
    </div>

        
    </div>

    </div>
  )
}

export default cards