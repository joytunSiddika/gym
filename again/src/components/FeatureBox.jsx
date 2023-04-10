import React from 'react'

function FeatureBox(props) {
  return (
    <div className='a-box'>   
      <div class='a-b-img'>
        <img src={props.image} alt=''/>

      </div>
      <div className='a-b-text'>
        <h2> {props.title}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi at error incidunt, pariatur quos a sed maiores molestias quod! Alias saepe magnam, dolor ab ullam ad repellat non eveniet. Debitis.</p>

      </div>
    </div>
  )
}

export default FeatureBox

