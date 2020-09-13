import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function EditAvatarPopup(props) {

  const avatarInput = React.useRef(); //removed avatar as per David's suggestion

  function handleSubmit(e) {
    // Prevent the browser from navigating to the form address
    e.preventDefault();
    // Pass the values of the managed components to the external handler
    props.onUpdateAvatar(avatarInput.current.value);
  }

  return (

    <PopupWithForm name="change-avatar" title="Change profile picture" submitButtonName="avatar-confirm" isOpened={props.isOpen} onClick={props.handleEditAvatarClick} onClose={props.onClose} onSubmit={handleSubmit}>
      <input ref={avatarInput} className="form__description form__description-card form__input" type="url" id="urlAvatar" name="url" placeholder="Image link" required />
      <span id="urlAvatar-error" className="form__input-error"></span>
    </PopupWithForm>

  );

}

export default EditAvatarPopup;