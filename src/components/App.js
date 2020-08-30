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

function handleProfileClick() {
  console.log(isEditProfilePopupOpen);
  setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
}

function handleAddPlaceClick() {
  console.log(isAddPlacePopupOpen);
  setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
}

function handleEditAvatarClick() {
  console.log(isEditAvatarPopupOpen);
  setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
}

  return (
    <div className="page">

      <Header />

      <Main
        onEditProfile = {handleProfileClick} 

        onAddPlace = {handleAddPlaceClick}
        
        /*{() => {
          setIsAddPlacePopupOpen(true);
          console.log("clicked plus");
          {/*const addCardReact = document.querySelector(".form_type_add-card");
        addCardReact.classList.add("form_is-opened");  }} </div> */

        onEditAvatar = {handleEditAvatarClick} 
         
          /*const editAvatarReact = document.querySelector(".form_type_change-avatar");
        editAvatarReact.classList.add("form_is-opened");}*/
          >
    
      </Main>
      
      <PopupWithForm name= "edit-profile" title= "Edit Profile" submitButtonName= "save-button" isOpened = {isEditProfilePopupOpen} >
        {console.log("later of app " + isEditProfilePopupOpen)}
          <input className = "form__name form__name-profile form__input" type = "text" id = "name" name = "name" placeholder ="Name" minlength = "2" maxlength = "40" required/>
          <span id ="name-error" className = "form__input-error"></span>
          <input className = "form__description form__description-profile form__input" type = "text" id = "description" name = "description" placeholder = "About Me" minLength = "2" maxLength = "200" required/>
          <span id ="description-error" className = "form__input-error"></span>
        </PopupWithForm>

        <PopupWithForm name= "add-card" title= "New Place" submitButtonName= "card-save-button" isOpened = {isAddPlacePopupOpen}>
          <input className = "form__name form__name-card form__input" type = "text" id = "title" name = "title" placeholder ="Title" minLength = "1" maxLength = "30" required/>
          <span id ="title-error" className = "form__input-error"></span>
          <input className = "form__description form__description-card form__input" type = "url" id = "url" name = "url" placeholder = "Image link" required/>
          <span id ="url-error" className = "form__input-error"></span>
        </PopupWithForm>

        <PopupWithForm name= "delete-card" title= "Are you sure?" submitButtonName= "card-delete-confirm" />

        <PopupWithForm name= "change-avatar" title= "Change profile picture" submitButtonName= "avatar-confirm" isOpened = {isEditAvatarPopupOpen}>
          <input className = "form__description form__description-card form__input" type = "url" id = "urlAvatar" name = "url" placeholder = "Image link" required/>
          <span id ="urlAvatar-error" className = "form__input-error"></span>
        </PopupWithForm>

        <ImagePopup />

      <Footer />

      
    <template className = "elements__template">
      <li className = "elements__element">
        <button className = "elements__trash-icon hover"></button>
        <div className = "elements__image"></div>
        <div className = "elements__bar">
          <p className = "elements__name"></p>
          <div className = "elements__like-section">
          <button className = "elements__heart-icon hover"></button>
          <p className = "elements__like-count"></p>
        </div>
        </div>
      </li>
    </template>


</div>
  );
}

export default App ;
