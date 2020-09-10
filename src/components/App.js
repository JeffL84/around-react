import React from 'react';
import Header from './Header';
import Main from './Main';
import {api} from '../utils/api.js';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import EditProfilePopup from './EditProfilePopup.js';

//import './App.css';

function App() {

const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
const [selectedCard, setSelectedCard] = React.useState(false);

const [currentUser, setCurrentUser] = React.useState({});

React.useEffect(() => {
  api.getUserInfo()
  .then(res => {
    setCurrentUser(res);
  });
}, [])

  function handleCardClick(card) {
    setIsImagePopupOpen(!isImagePopupOpen);
    setSelectedCard(card);
    //console.log(card);
  }

  //console.log(selectedCard);

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
    <CurrentUserContext.Provider value = {currentUser}>
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
      
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onEditProfile = {handleProfileClick} />

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
</CurrentUserContext.Provider>
  );
}

export default App ;
