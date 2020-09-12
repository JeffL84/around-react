import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';



function AddPlacePopup(props) {

  const [newCardName, setNewCardName] = React.useState()
  const [newCardLink, setNewCardLink] = React.useState()

  function handleNewCardNameChange(evt) {
    setNewCardName(evt.target.value)
  }

  function handleNewCardLinkChange(evt) {
    setNewCardLink(evt.target.value)
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onAddPlace({
      title: newCardName,
      url: newCardLink
    })
  }
  

  return (
    
  <PopupWithForm name= "add-card" title= "New Place" submitButtonName= "card-save-button" isOpened = {props.isOpen}  onClose = {props.onClose} onSubmit = {handleSubmit}>
    <input onChange={handleNewCardNameChange} className = "form__name form__name-card form__input" type = "text" id = "title" name = "title" placeholder ="Title" minLength = "1" maxLength = "30" required/>
    <span id ="title-error" className = "form__input-error"></span>
    <input onChange={handleNewCardLinkChange} className = "form__description form__description-card form__input" type = "url" id = "url" name = "url" placeholder = "Image link" required/>
    <span id ="url-error" className = "form__input-error"></span>
  </PopupWithForm>

  );

}

export default AddPlacePopup;