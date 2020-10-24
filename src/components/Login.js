import React from 'react';
import Header from './Header';
import { api } from '../utils/api.js';
import PopupWithForm from './PopupWithForm.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Login () {

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">

        <Header />
      

      </div>
    </CurrentUserContext.Provider>
  );
}

export default Login;


// 400 - one or more of the fields were not provided
//401 - the user with the specified email not found