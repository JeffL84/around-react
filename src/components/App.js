import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

//import './App.css';

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
      

    
    <template class = "elements__template">
      <li class = "elements__element">
        <button class = "elements__trash-icon hover"></button>
        <div class = "elements__image"></div>
        <div class = "elements__bar">
          <p class = "elements__name"></p>
          <div class = "elements__like-section">
          <button class = "elements__heart-icon hover"></button>
          <p class = "elements__like-count"></p>
        </div>
        </div>
      </li>
    </template>


</div>
  );
}

export default App;
