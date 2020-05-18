import React from 'react';
import logo from './logo.svg';
import './App.css';
import Typist from 'react-typist';

function App() {
  return (
    <div className="App">
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
