import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="page-header">
        <a className="logo" href="https://yeti.co">
          <img alt="company logo" src={require("./icons/logo_black.svg")} />
        </a>
        <nav className="navigation">
          <div className="nav-item">Menu</div>
          <button className="nav-hamburger-menu">
            <img alt="hamburger menu" src={require('./icons/hamburger_menu.png')} />
          </button>
        </nav>
      </header>
      <main className="main-container">
        <section className="about">
          <div className="about-header">About
          </div>
          <div className="about-contents">
            <div className="about-img-container">
              <img className="about-img" alt="orange and apple slices" src={require("./images/fruit/image.jpg")}/>
              <div className="about-img-bg">
              </div>
            </div>
            <div className="about-stuff">
              <div className="about-title">
                Andy Griffith turned us down.
              </div>
              <div className="about-text">
                Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his nice trailer.
                That's why you always leave a note!
              </div>
            </div>
          </div>
        </section>
        <section className="our-vision">
          <div className="section-header our-vision-header">
            Our vision
          </div>
          <div className="our-vision-contents">
            <div className="our-vision-title">
              Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer.
            </div>
            <div className="our-vision-text">
              Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer.
              That's why you always leave a note! Army had half a day. Bad news. Andy Griffith turned us down.
              He didn't like his trailer. That's why you always leave a note! No… but I'd like to be asked! Oh, you're
              gonna be in a coma, all right.
            </div>
          </div>
        </section>
        <section className="our-values">
          <div className="our-values-img-container">
            <img className="our-values-img" alt="geometric triangles"
                 src={require("./images/lemur/lemur-676967-unsplash.jpg")}/>
            <div className="our-values-img-bg">
            </div>
          </div>
          <div className="our-values-header">
            Our values
          </div>
          <div className="our-values-title">
            Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer.
          </div>
          <div className="our-values-text-items">
            <div className="our-values-text">
              Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer. That's why you
              always leave a note! Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his
              trailer. That's why you always leave a note! No… but I'd like to be asked! Oh, you're gonna be in a coma,
              all right.
            </div>
            <div className="our-values-text">
              Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer. That's why you
              always leave a note! Army had half a day. Bad news. Andy Griffith turned us down.
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
