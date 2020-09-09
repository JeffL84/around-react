import React from 'react';
import {api} from '../utils/api.js';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';


function Main(props) {

  const currentUser = React.useContext(CurrentUserContext);

//console.log(currentUser);

  // const [userName, setUserName] = React.useState("Name Placeholder");
  // const [userDescription, setUserDescription] = React.useState("Description Placeholder");
  // const [userAvatar, setUserAvatar] = React.useState("(.././images/blackheart.svg)");
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

  React.useEffect(() => {
    
    api.getCardList()
    .then(res => {
      console.log(res);
      setCards(res.map(card => ({
        key: card._id,
        name: card.name,
        image: card.link,
        likes: card.likes,
        owner: card.owner
      })));
    })

  }, [])

//console.log(cards);

  return (
    <main>

    <section className="profile section-width"> 

      <div className = "profile__section">
       
        <div className = "avatar">        
        <img className = "profile__avatar" alt = "My avatar" onClick = {props.onEditAvatar} src = {currentUser.avatar} />
        <img className = "hover_type_edit" src = "images/EditAvatarIcon.png" alt = "edit icon"/>
      </div>
        <div className = "profile__info">
    
          <h1 className = "profile__name">{currentUser.name}</h1>
          <button className = "profile__edit-button hover" onClick = {props.onEditProfile}></button>
          <p className = "profile__description">{currentUser.about}</p>

        </div>
            
      </div>

      <button className = "profile__add-button hover" onClick = {props.onAddPlace}></button>

    </section>

    <section className="section-width">

      <ul className = "elements">
        {
          cards.map((card, i) => 
          <Card
            key = {i}
            name = {card.name}
            image = {card.image}
            likes = {card.likes}
            card = {card}
            onCardClick = {props.onCardClick} 
            onCardLike = {handleCardLike}
            />)
        }
      </ul>
    
    </section>

  


  </main>

  );

}

export default Main;