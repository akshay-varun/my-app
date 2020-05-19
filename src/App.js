import React from 'react';
import logo from './logo.svg';
import './App.css';
import Typist from 'react-typist';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">

        <div className="header">
            <a href="#default" className="logo">Logo</a>
            <div className="header-right">
                <a className="active" href="#home">Home</a>
                <a href="#contact">About</a>
                <a href="#about">Contact</a>
            </div>
        </div>

      <header className="App-header">


          <h1>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="" className="typewrite" data-period="500"
                 data-type='[ "We Plan,", "We think!!!!", "We create Adds...."]'>

                  <span className="wrap"/>
              </a>
          </h1>
      </header>
    </div>
  );
}


export default App;
