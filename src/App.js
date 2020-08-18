import React from 'react';
//import './hamburger_menu.png';
import './image.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navigation">
        <div className="nav-item">Menu</div>
        <button className="nav-hamburger-menu">
          <img src={require('./icons/hamburger_menu.png')} />
        </button>
      </nav>
      <main className="main-container">
        <section className="about">
          <div className="about-header">About
          </div>
          <div className="about-img-container">
            <img className="about-img" src={require("./images/fruit/image.jpg")}/>
            <div className="about-img-bg">
            </div>
          </div>
          <div className="section-title about-title">
            Andy Griffith turned us down.
          </div>
          <div className="section-text about-text">
            Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his nice trailer. That's why you always leave a note!
          </div>
        </section>
        <section className="our-vision">
          <div className="section-header our-vision-header">
            Our vision
          </div>
          <div className="section-title our-vision-title">
            Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer.
          </div>
          <div className="section-text our-vision-text">
            Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer. That's why you always leave a note! Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer. That's why you always leave a note! No… but I'd like to be asked! Oh, you're gonna be in a coma, all right.
          </div>
        
        </section>
        <section className="our-values">
          <div className="our-values-img-container">
            <img className="our-values-img" src={require("./images/lemur/lemur-676967-unsplash.jpg")}/>
            <div className="our-values-img-bg">
            </div>
          </div>
          <div className="section-header our-values-header">
            Our values
          </div>
          <div className="section-title our-values-title">
            Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer.
          </div>
          <div className="section-text our-values-text">
            Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer. That's why you always leave a note! Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer. That's why you always leave a note! No… but I'd like to be asked! Oh, you're gonna be in a coma, all right.
          </div>
          <div className="section-text our-values-text">
            Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer. That's why you always leave a note! Army had half a day. Bad news. Andy Griffith turned us down.
          </div>
        
        </section>
      </main>
    </div>
  );
}

export default App;
