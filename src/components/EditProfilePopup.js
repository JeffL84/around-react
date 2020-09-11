import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';


function EditProfilePopup(props) {


  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

// Subscription to the context
const currentUser = React.useContext(CurrentUserContext);

//console.log("current user", currentUser);
// After loading the current user from the API
// their data will be used in managed components.
React.useEffect(() => {
  setName(currentUser.name);
  setDescription(currentUser.about);
}, [currentUser]);

//console.log(name);
//console.log(description);

function handleSubmit(e) {
  // Prevent the browser from navigating to the form address
  e.preventDefault();

  // Pass the values of the managed components to the external handler
  props.onUpdateUser({
    name,
    about: description,
  });
}

  return (
    <PopupWithForm name= "edit-profile" title= "Edit Profile" submitButtonName= "save-button" isOpened = {props.isOpen} onClick = {props.handleProfileClick} onSubmit = {handleSubmit}>
          <input className = "form__name form__name-profile form__input" type = "text" id = "name" name = "name" placeholder ="Name" minLength = "2" maxLength = "40" onChange = {(e) => setName(e.target.value)} required/>
          <span id ="name-error" className = "form__input-error"></span>
          <input className = "form__description form__description-profile form__input" type = "text" id = "description" name = "description" placeholder = "About Me" minLength = "2" maxLength = "200" onChange = {(e) => setDescription(e.target.value)} required/>
          <span id ="description-error" className = "form__input-error"></span>
      </PopupWithForm>
  );

}

export default EditProfilePopup;