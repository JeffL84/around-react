import React from 'react';

function ImagePopup(props) {

  return (
    <section className = {props.isOpened ?  "form form_type_image form_is-opened" : "form form_type_image" }>

      <div className = "form__overlay form__overlay_type_dark"></div>
      <form className = "form__container form__container_type_image">

        <figure className = "big-image">

          <img className = "big-image__picture" alt = "card pic" id = "bigImage" src = {props.image}/>
          <figcaption className = "big-image__caption" id = "caption">{props.title}</figcaption>
            
        </figure>

        <button className = "form__close-button form__close-button_type_image hover" onClick = {props.onClick}></button>

      </form>

    </section>

  );

}

export default ImagePopup;