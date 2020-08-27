import React from 'react';


function PopupWithForm({...name, title, submitButtonName}) {

  return (
    <section className = {`form form_type_${name} form-with-button`}>

      <div className = "form__overlay"></div>
      <form className = "form__container">

        <h2 className = "form__title">{title}</h2>

        <div>{props.children}</div>

        <button className = {`form__save-button form__${submitButtonName} hover hover_type_dark`} type = "submit">Save</button>
        <button className = "form__close-button hover"></button>

      </form>

    </section>

  );

}

export default PopupWithForm;

//         <input className = "form__description form__description-card form__input" type = "url" id = "urlAvatar" name = "url" placeholder = "Image link" required/>
//<span id ="urlAvatar-error" className = "form__input-error"></span>