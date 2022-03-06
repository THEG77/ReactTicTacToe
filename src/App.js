import { BrowserRouter, Route, Link, useHref } from 'react-router-dom';
import './App.css';
import MainGame from  './Game';
import TttGame from './tictactoe';

function App() {
  function ttt(){
    return(
      <TttGame/>
    )
  }
  function Game(){
    return(
        <MainGame/>
    )
  }
    
  return (
    <div className="App">
      <header></header>
      <div className='App-body'> 
        <div className='main-div'>
        <text style={{"font-size": 40, "font-weigh": "bold"}}>H-Man</text>
        <p></p>
          <input className='main-namebox' placeholder='Enter Your Name' type={'text'}></input>
          <p></p>
          <button className='main-button' onClick={()=> ttt()}>Enter</button>
          <button className='main-button'  onClick={()=> Game()} >Enter</button>
        </div>
      
      </div>
    </div>
  );
}

export default App;
