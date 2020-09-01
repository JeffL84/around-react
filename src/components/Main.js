import React from 'react';
import {api} from '../utils/api.js';
import Card from './Card';


function Main(props) {

  const [userName, setUserName] = React.useState("Name Placeholder");
  const [userDescription, setUserDescription] = React.useState("Description Placeholder");
  const [userAvatar, setUserAvatar] = React.useState("(.././images/blackheart.svg)");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
    .then(res => {
      setUserName(res.name);
      setUserDescription(res.job);
      setUserAvatar(res.avatar);
    });

    api.getCardList()
    .then(res => {
      //console.log(res);
      setCards(res.map(card => ({
        key: card._id,
        title: card.name,
        image: card.link,
        likes: card.likes.length
      })));
    })

  }, [])


  return (
    <main>

    <section className="profile section-width"> 

      <div className = "profile__section">
       
        <div className = "avatar">        
        <img className = "profile__avatar" alt = "My avatar" onClick = {props.onEditAvatar} src = {userAvatar} />
        <img className = "hover_type_edit" src = "images/EditAvatarIcon.png" alt = "edit icon"/>
      </div>
        <div className = "profile__info">
    
          <h1 className = "profile__name">{userName}</h1>
          <button className = "profile__edit-button hover" onClick = {props.onEditProfile}></button>
          <p className = "profile__description">{userDescription}</p>

        </div>
            
      </div>

      <button className = "profile__add-button hover" onClick = {props.onAddPlace}></button>

    </section>

    <section className="section-width">

      <ul className = "elements">
        {
          cards.map((card) => <Card
            key = {card.key}
            title = {card.title}
            image = {card.image}
            likes = {card.likes}
            card = {card}
            onCardClick = {props.onCardClick}
            />)
        }
      </ul>
    
    </section>

  


  </main>

  );

}

export default Main;