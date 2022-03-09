import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Game from './Game'
import Ttt from './tictactoe'

import reportWebVitals from './reportWebVitals';
const check = true;
ReactDOM.render(
  <React.StrictMode>
    {/* <div>
    <BrowserRouter>
    <Route path="/"  component={App} exact />
    <Route path="/hman" component={Game}/>
    <Route path="/ttt" component={Ttt}/>
    </BrowserRouter>
    </div > */}
    {/* <App/> */}
    <Ttt/>
    {/* <Game/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
