import React from 'react';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import logo from './contra_run.gif';
import './App.css';

const style = {
  title: css`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
  `
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 css={style.title}>Hello World!</h1>
      </header>
    </div>
  );
}

export default App;
