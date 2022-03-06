import './Game.css';

import styled from "styled-components";
import {useState,useEffect} from 'react';



function MainGame() {
    function setCharAt(str,index,chr) {
        if(index > str.length-1) return str;
        return str.substring(0,index) + chr + str.substring(index+1);
    }
    const refreshHandler = () => {
        setGuessWord(getaword);
        
    }
    function setCurGuessedWordfunc () {
            let tempstr = '';
            for(let index = 0; index < guessWord.length; index++){
                if(index === 0){
                    tempstr+=guessWord.charAt(index);
                }
                else if(index == guessWord.length-1){
                    tempstr+=guessWord.charAt(index);
                }
                else{
                    tempstr+='_';
                }
            }
            setCurGuessedWord(tempstr);
            
        };
    function handleInput(){
        let tempcurletter = curLetter;
        setCurLetter('');
        let isFound = false;
        //1 and -1 to ignore the first and the last character that we're using for hints
        for(let i =1; i<guessWord.length-1; i++){
            tempcurletter = tempcurletter.toLowerCase();
            if(guessWord.charAt(i) === tempcurletter){
                
                if(curGuesedIndex.includes(i)){
                    continue;
                }
                let tempprevword = curGuessedWord;
                tempprevword =  setCharAt(tempprevword,i,tempcurletter)
                
                setCurGuessedWord(tempprevword);
                setCurGuessedIndex(oldArray =>[...oldArray,i]);
                isFound = true;
                break;
            }
        }
        if(!isFound){
            setLivesCounter(oldlives=> oldlives-=1)
        }
    }
    
    const getaword = () => {
        // Returns a random word from the word array
        return words[Math.floor(Math.random() * words.length)];
    } 
    const handleKeypress = e => {
        if (e.key === 'Enter') {
            handleInput();}
        };
    const [curLetter, setCurLetter] = useState('');
    const words = ['honeybee', 'watermelon', 'python', 'sunflower','sugarcane', 'pineapple', 'mango','banana','orange','grape','coconut'];
    const [guessWord, setGuessWord] = useState(getaword);
    const [curGuessedWord, setCurGuessedWord] = useState();
    const [curGuesedIndex, setCurGuessedIndex] = useState([]);
    const [livesCounter, setLivesCounter] = useState(6);
    useEffect(()=>{
        setCurGuessedWordfunc();
    },[]);
    useEffect(()=>{
        // alert(curGuessedWord)    

        setCurGuessedWordfunc();        
        setLivesCounter(6);
        const arr = [];
        setCurGuessedIndex(arr);
    },[guessWord]);

    useEffect(()=>{
        if(curGuesedIndex.length>=guessWord.length-2){
            alert("You Won!\n Restarting in 3 Secs...")
            setTimeout(() => {
                refreshHandler();
            }, 3000);
        }
        if(livesCounter<=0){
            alert(`You Lost!\nThe words was ${guessWord} \n Restarting in 3 Secs...`)
            setTimeout(() => {
                refreshHandler();
            }, 3000);
        }
    },[livesCounter, curGuesedIndex])

    return(
        <div className='main-div' >
            <div className='title-div'>
                <text style={{"fontSize": "40px"}}>Hang-Man</text>
            </div>
            <div className='mainforfigandletters'>
                <div className='mainleftside'>
                    <img className='hmanimage' src={require(`./png/Hangman${livesCounter}.png`)} ></img>
                </div>
                
                <div className='mainrightside'>
                    <text style={{fontSize: 25, fontWeight: 'bold'}}>Guess the letters</text>                    
                    {/* {wordScores()}  */}
                     <text style={{fontSize: 25, fontWeight: 'bold',letterSpacing: 20}}>{curGuessedWord}</text>
                    {/* {setCurGuessedWordfunc()} */}
                    <text style={{fontSize: 25, fontWeight: 'bold', marginTop: '20%', color: 'red', fontStyle: 'oblique',  }}>Lives Left:  {livesCounter}</text> 
                </div>
            </div>
            <div className='divfortextinput'  >
                
                <input onKeyUp ={handleKeypress} placeholder='Enter a letter' className='letterinputbox' name='inputbox' value={curLetter}   type={'text'}
                onChange={(event)=>{
                    // if(event.target.value.length > 1)
                    let charAtLast =  event.target.value.charAt(event.target.value.length-1)
                    setCurLetter(charAtLast); }} ></input>
            
            <Button type='submit' onClick={handleInput} disabled={livesCounter<=0} >
                   <text style={{ fontWeight: 'bold' }} >Send</text>
               
               </Button>
            </div>
            <div className='divforrefreshbutton'>
               <Button2 type='submit' onClick={refreshHandler} disabled={livesCounter<=0}   >
                   <text style={{ fontWeight: 'bold' }} >Refresh</text>
               </Button2>
            </div>
        </div>
    )
}
const Button = styled.button`
  background-color: #12AD2B;
  color: blue;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 30px ;
  margin: 10px 0px;
  cursor: pointer;
  height: 90px;
  align-self: center;
  margin-left: 40px;
`;
const Button2 = styled.button`
  background-color: yellow;
  color: red;
  font-size: 20px;
  padding: 8px 60px;
  border-radius: 30px ;
  margin: 10px 0px;
  cursor: pointer;
  height: 90px;
  align-self: center;
`;

export default MainGame;