import './App.css';
import game from  './Game';
import { Router, useNavigate } from "react-router-dom";
function App() {
  function goto() {
    let path = `./Game`; 
    navigate(path);
  }
  let navigate = useNavigate();
  <Router>
    navigat
  </Router>
  return (
    <div className="App">
      <header></header>
      <body className='App-body'>
        <div className='main-div'>
        <text style={{"font-size": 40, "font-weigh": "bold"}}>H-Man</text>
        <p></p>
          <input className='main-namebox' placeholder='Enter Your Name' type={'text'}></input>
          <p></p>
          <button className='main-button' onClick={goto}  >Enter</button>
        </div>
      
      </body>
    </div>
  );
}

export default App;
