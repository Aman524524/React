import React from 'react'
import profile from './assets/pic.jpg'

function Card() {
  return (
    <div className='card'>
        <img src={profile} alt="Place"/>
    </div>
  )
}

export default Card