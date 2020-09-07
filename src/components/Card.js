import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Card(props) {

  const currentUser = React.useContext(CurrentUserContext);

  function handleClick() {
    props.onCardClick(props.card);
  } 

  console.log(props.card);

  // Checking if you are the owner of the current card
const isOwn = props.card.owner._id === currentUser._id;

// Creating a variable which you'll then set in `className` for the delete button
const cardDeleteButtonClassName = (
  `elements__trash-icon hover ${isOwn ? ' ' : 'elements__trash-icon_is-hidden'}`
);

// Check if the card was liked by the current user
const isLiked = props.card.likes.some(i => i._id === currentUser._id);

// Create a variable which you then set in `className` for the like button
const cardLikeButtonClassName = (
  `elements__heart-icon hover ${isLiked ? ' ' : 'elements__heart-icon_theme_dark'}`
);


  return (
    <div className = "elements__template" key = {props.card.key}>
    <li className = "elements__element" >
      <button className = {cardDeleteButtonClassName}></button>
      <div className = "elements__image" style={{ backgroundImage: `url(${props.image})`}} onClick = {handleClick} ></div>
      <div className = "elements__bar">
        <p className = "elements__name">{props.title}</p>
        <div className = "elements__like-section">
        <button className = {cardLikeButtonClassName}></button>
        <p className = "elements__like-count">{props.likes}</p>
      </div>
      </div>
    </li>
   </div>
  );

}

export default Card;


 