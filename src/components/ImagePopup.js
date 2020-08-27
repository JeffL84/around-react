import React from 'react';

function ImagePopup({props}) {

  return (
    <section className = {`form form_type_${props.name} form-with-button`}>

      <div className = "form__overlay"></div>
      <form className = "form__container">

        <button className = "form__close-button hover"></button>

      </form>

    </section>

  );

}

export default ImagePopup;