import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup';


//import './App.css';

function App() {

const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
const [selectedCard, setSelectedCard] = React.useState(false);

  function handleCardClick(card) {
    setIsImagePopupOpen(!isImagePopupOpen);
    setSelectedCard(card);
    console.log(card);
    //console.log(evt.target.style.backgroundImage);
    //console.log(evt.target.closest(".elements__element"));
    //const taco = evt.target.querySelector("elements__image");
    //console.log("taco" + taco);
    //setSelectedCard(evt.target.closest(".elements__element"));
    //setSelectedCard(evt.target.style.background);
  
  }

  //console.log(selectedCard);
  //console.log(selectedCard.querySelector(".elements__image"));
  //const selectedCardImage = selectedCard.elements__image.style;
function handleProfileClick() {
  setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
}

function handleAddPlaceClick() {
  setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
}

function handleEditAvatarClick() {
  setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
}



  return (
    <div className="page">

      <Header />

      <Main
        onEditProfile = {handleProfileClick} 

        onAddPlace = {handleAddPlaceClick}

        onEditAvatar = {handleEditAvatarClick} 

        onCardClick = {handleCardClick} //might have issue here - used twice...
      
        selectedCard = {selectedCard}
      >

      </Main>
      
      <PopupWithForm name= "edit-profile" title= "Edit Profile" submitButtonName= "save-button" isOpened = {isEditProfilePopupOpen} onClick = {handleProfileClick} >
          <input className = "form__name form__name-profile form__input" type = "text" id = "name" name = "name" placeholder ="Name" minLength = "2" maxLength = "40" required/>
          <span id ="name-error" className = "form__input-error"></span>
          <input className = "form__description form__description-profile form__input" type = "text" id = "description" name = "description" placeholder = "About Me" minLength = "2" maxLength = "200" required/>
          <span id ="description-error" className = "form__input-error"></span>
      </PopupWithForm>

      <PopupWithForm name= "add-card" title= "New Place" submitButtonName= "card-save-button" isOpened = {isAddPlacePopupOpen} onClick = {handleAddPlaceClick}>
          <input className = "form__name form__name-card form__input" type = "text" id = "title" name = "title" placeholder ="Title" minLength = "1" maxLength = "30" required/>
          <span id ="title-error" className = "form__input-error"></span>
          <input className = "form__description form__description-card form__input" type = "url" id = "url" name = "url" placeholder = "Image link" required/>
          <span id ="url-error" className = "form__input-error"></span>
      </PopupWithForm>

      <PopupWithForm name= "delete-card" title= "Are you sure?" submitButtonName= "card-delete-confirm" />

      <PopupWithForm name= "change-avatar" title= "Change profile picture" submitButtonName= "avatar-confirm" isOpened = {isEditAvatarPopupOpen} onClick = {handleEditAvatarClick}>
          <input className = "form__description form__description-card form__input" type = "url" id = "urlAvatar" name = "url" placeholder = "Image link" required/>
          <span id ="urlAvatar-error" className = "form__input-error"></span>
      </PopupWithForm>

      <ImagePopup isOpened = {isImagePopupOpen} image = "" title="Image Caption" card = {selectedCard} onClick = {handleCardClick}/>

      <Footer />

      
   


</div>
  );
}

export default App ;
