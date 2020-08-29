import React from 'react';


function PopupWithForm(props) {
  {/*removed this from arguments: {name, title, submitButtonName, ...rest}

  and removed this when creating individual 
  const [isOpened, setIsOpened] = React.useState(false);

  function handleClick() {
    setIsOpened(true);
  }

  */}

  return (
    <section className = {props.isOpened ? (`form form_type_${props.name} form-with-button form_is-opened`) : (`form form_type_${props.name} form-with-button`)}>

      <div className = "form__overlay"></div>
      <form className = "form__container">

        <h2 className = "form__title">{props.title}</h2>

        <div>{props.children}</div>

        <button className = {`form__save-button form__${props.submitButtonName} hover hover_type_dark`} type = "submit" onClick = {props.onClick}>Save</button>
        <button className = "form__close-button hover"></button>

      </form>

    </section>

  );

}

export default PopupWithForm;

//         <input className = "form__description form__description-card form__input" type = "url" id = "urlAvatar" name = "url" placeholder = "Image link" required/>
//<span id ="urlAvatar-error" className = "form__input-error"></span>