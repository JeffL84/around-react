import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';


//import './App.css';

function App() {

console.log("start APP");


const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  return (
    <div className="page">

      <Header />

      <Main 
      onEditProfile = {() => { 
        console.log("clicked");
        setIsEditProfilePopupOpen(true);
        
      }}

      onAddPlace =  {() => {
        setIsAddPlacePopupOpen(true);
        const addCardReact = document.querySelector(".form_type_add-card");
        addCardReact.classList.add("form_is-opened"); }}

      onEditAvatar = {() => {
        setIsEditAvatarPopupOpen(true);
        const editAvatarReact = document.querySelector(".form_type_change-avatar");
        editAvatarReact.classList.add("form_is-opened");} }
      
      />

      <Footer />

      
    <template class = "elements__template">
      <li class = "elements__element">
        <button class = "elements__trash-icon hover"></button>
        <div class = "elements__image"></div>
        <div class = "elements__bar">
          <p class = "elements__name"></p>
          <div class = "elements__like-section">
          <button class = "elements__heart-icon hover"></button>
          <p class = "elements__like-count"></p>
        </div>
        </div>
      </li>
    </template>


</div>
  );
}

export { App, isEditProfilePopupOpen, isAddPlacePopupOpen, isEditAvatarPopupOpen } ;
