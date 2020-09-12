import React from 'react';
import Header from './Header';
import Main from './Main';
import {api} from '../utils/api.js';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';

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

function closeAllPopups() {
  setIsEditProfilePopupOpen(false);
  setIsAddPlacePopupOpen(false);
  setIsEditAvatarPopupOpen(false);
  setIsImagePopupOpen(false);
}

  function handleCardClick(card) {
    setIsImagePopupOpen(!isImagePopupOpen);
    setSelectedCard(card);
    //console.log(card);
  }

  //console.log(selectedCard);
  function handleProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
    //console.log("clicked");
  }


function handleAddPlaceClick() {
  setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
}

function handleEditAvatarClick() {
  setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
}

function handleUpdateUser(name, about, ...rest) {
  setCurrentUser({
    name: name,
    about: about,
    avatar: currentUser.avatar
  });
  console.log("handleUpdateUser");
  //console.log([name, about, currentUser.avatar]);
  api.setUserInfo([name, about, currentUser.avatar]);
 

}

//console.log("App.js currentUser", currentUser);

function handleUpdateAvatar(avatar) {
  setCurrentUser({
    name: currentUser.name,
    about: currentUser.about,
    avatar: avatar
  });
  api.setUserAvatar(avatar);
}

//CARD section stats here

const [cards, setCards] = React.useState([]);

  function handleCardLike(card) {
    // Check one more time if this card was already liked
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Send a request to the API and getting the updated card data
    api.changeLikeCardStatus(card._id, !isLiked)
    
    .then((newCard) => {
        // Create a new array based on the existing one and putting a new card into it
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      // Update the state
      setCards(newCards);
    });
}

function handleCardDelete(card) {
  console.log(cards);
  // check if the card has been deleted? not sure there is an analog to the isliked above...

  //send api request 
  api.removeCard(card._id)
  .then((remainingCard) => {
    console.log(remainingCard);
    //create new arrayas done above
    const remainingCards = cards.filter((item) => item._id !== card._id);
    //update the state
      setCards(remainingCards)
  })
}



React.useEffect(() => {
    
  api.getCardList()
  .then(res => {
  
    setCards(res.map(card => ({
      key: card._id,
      name: card.name,
      image: card.link,
      likes: card.likes,
      owner: card.owner, 
      _id: card._id
    
    })));
  })

}, [])

//console.log(cards);

function handleAddPlaceSubmit(newCard) { //possible trouble since my api call expects an ovject { title, url }
  api.addCard(newCard);
  //setCards([...cards, newCard]);
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

        cards = {cards}

        onCardLike = {handleCardLike}

        onCardDelete = {handleCardDelete}
      >

      </Main>
      
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onUpdateUser={handleUpdateUser} handleEditAvatarClick= {handleEditAvatarClick} onClose= {closeAllPopups}/>

      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onUpdateAvatar = {handleUpdateAvatar} onClose= {closeAllPopups}/>

      <AddPlacePopup isOpen = {isAddPlacePopupOpen} onAddPlace = {handleAddPlaceSubmit} onClose = {closeAllPopups}/>

      <PopupWithForm name= "delete-card" title= "Are you sure?" submitButtonName= "card-delete-confirm" />

      <ImagePopup isOpened = {isImagePopupOpen} image = "" title="Image Caption" card = {selectedCard} onClick = {handleCardClick}/>

      <Footer />

</div>
</CurrentUserContext.Provider>
  );
}

export default App ;
