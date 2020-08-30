import React from 'react';


function Main(props) {
  
console.log("main");

  return (
    <main>

    <section className="profile section-width"> 

      <div className = "profile__section">
       
        <div className = "avatar">        
        <img className = "profile__avatar" alt = "My avatar" onClick = {props.onEditAvatar} />
        <img className = "hover_type_edit" src = "images/EditAvatarIcon.png" alt = "edit icon"/>
      </div>
        <div className = "profile__info">
    
          <h1 className = "profile__name">Name</h1>
          <button className = "profile__edit-button hover" onClick = {props.onEditProfile}></button>
          <p className = "profile__description">Description</p>

        </div>
            
      </div>

      <button className = "profile__add-button hover" onClick = {props.onAddPlace}></button>

    </section>

    <section className="section-width">

      <ul className = "elements"></ul>
    
    </section>

    

    {/*<section className = "form form_type_edit-profile form-with-button">
       
      <div className = "form__overlay"></div>
      <form className = "form__container" name = "profileForm" novalidate>

        <h2 className = "form__title">Edit profile</h2>
        <input className = "form__name form__name-profile form__input" type = "text" id = "name" name = "name" placeholder ="Name" minlength = "2" maxlength = "40" required/>
        <span id ="name-error" className = "form__input-error"></span>
        <input className = "form__description form__description-profile form__input" type = "text" id = "description" name = "description" placeholder = "About Me" minlength = "2" maxlength = "200" required/>
        <span id ="description-error" className = "form__input-error"></span>
        <button className = "form__save-button hover hover_type_dark" type = "submit">Save</button>
        <button className = "form__close-button hover"></button>

      </form>

    </section>*/}

  

    {/*<section className = "form form_type_add-card form-with-button">

      <div className = "form__overlay"></div>
      <form className = "form__container">

        <h2 className = "form__title">New Place</h2>
        <input className = "form__name form__name-card form__input" type = "text" id = "title" name = "title" placeholder ="Title" minlength = "1" maxlength = "30" required/>
        <span id ="title-error" className = "form__input-error"></span>
        <input className = "form__description form__description-card form__input" type = "url" id = "url" name = "url" placeholder = "Image link" required/>
        <span id ="url-error" className = "form__input-error"></span>
        <button className = "form__save-button form__card-save-button hover hover_type_dark" type = "submit">Create</button>
        <button className = "form__close-button hover"></button>

      </form>

  </section> */}



    {/*<section className = "form form_type_delete-card form-with-button">

      <div className = "form__overlay"></div>
      <form className = "form__container">

        <h2 className = "form__title">Are you sure?</h2>
        <button className = "form__save-button form__card-delete-confirm hover hover_type_dark" type = "submit">Yes</button>
        <button className = "form__close-button hover"></button>

      </form>

</section>*/}



    {/*<section className = "form form_type_change-avatar form-with-button">

      <div className = "form__overlay"></div>
      <form className = "form__container">

        <h2 className = "form__title">Change profile picture</h2>
        <input className = "form__description form__description-card form__input" type = "url" id = "urlAvatar" name = "url" placeholder = "Image link" required/>
        <span id ="urlAvatar-error" className = "form__input-error"></span>
        <button className = "form__save-button form__avatar-confirm hover hover_type_dark" type = "submit">Save</button>
        <button className = "form__close-button hover"></button>

      </form>

</section>*/}

  
    {/*<section className = "form form_type_image">

      <div className = "form__overlay form__overlay_type_dark"></div>
      <form className = "form__container form__container_type_image">

        <figure className = "big-image">

          <img className = "big-image__picture" alt = "card image" id = "bigImage"/>
          <figcaption className = "big-image__caption" id = "caption"></figcaption>
            
        </figure>

        <button className = "form__close-button form__close-button_type_image hover"></button>

      </form>

</section>*/}

  </main>

  );

}

export default Main;