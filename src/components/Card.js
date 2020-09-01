import React from 'react';

function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  } 

  return (
    <div className = "elements__template">
    <li className = "elements__element" >
      <button className = "elements__trash-icon hover"></button>
      <div className = "elements__image" style={{ backgroundImage: `url(${props.image})`}} onClick = {handleClick} ></div>
      <div className = "elements__bar">
        <p className = "elements__name">{props.title}</p>
        <div className = "elements__like-section">
        <button className = "elements__heart-icon hover"></button>
        <p className = "elements__like-count">{props.likes}</p>
      </div>
      </div>
    </li>
   </div>
  );

}

export default Card;


 