import React from 'react';

function ImagePopup(props) {

  return (
    <section className = "form form_type_image">

      <div className = "form__overlay form__overlay_type_dark"></div>
      <form className = "form__container form__container_type_image">

        <figure className = "big-image">

          <img className = "big-image__picture" alt = "card image" id = "bigImage"/>
          <figcaption className = "big-image__caption" id = "caption"></figcaption>
            
        </figure>

        <button className = "form__close-button form__close-button_type_image hover"></button>

      </form>

    </section>

  );

}

export default ImagePopup;