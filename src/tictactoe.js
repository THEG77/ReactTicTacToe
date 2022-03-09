import './tictactoe.css';
import styled from "styled-components";
import {useState,useEffect} from 'react';


function TttGame() {

    let initarr = new Array(9).fill(2);
    // let initarr = [2,2,3,2,5,2,3,5,3] 
    let initchararr = new Array(9).fill('_');
    // let initchararr = ['_', '_', '_', '_', '_', '_', '_', '_', '_']
    let initpossarr = new Array(8).fill(8);
    const [curValues,setCurValues] = useState([]);
    const [curCharValues,setCurCharValues] = useState([]);
    const [turnCounter, setTurnCounter] = useState(0);
    const [possWinArrX, setPossWinArrX] = useState(initpossarr)
    const [someoneWonMatrix, setSomeOneWonMatrix] = useState(-1);
    const [threeIndex, setThreeIndex] = useState([])
    // const [userTurn, setUserTurn] = useState(true);
    
    function AiPlay() {
        console.log(turnCounter)
        if(turnCounter === 1){
            if(curValues[0] === 2){
                updateCurArr(0,5)
            }
            else{
                updateCurArr(4,5)
            }
        }
        if(turnCounter === 3){            
            for(let i = 0; i<possWinArrX.length; i++){
                if(possWinArrX[i] === 50 || possWinArrX[i] === 18){
                    console.log("poss win " + possWinArrX[i])
                    let indextogo = findPossWin(i)
                    updateCurArr(indextogo,5)
                    return
                }
            }
            // const ogarr = [...curValues]
            // ogarr[8] = 5
            // setCurValues(ogarr)    
            updateCurArr(8,5)        
        }
        if(turnCounter === 5){
            for(let i = 0; i<possWinArrX.length; i++){
                if(possWinArrX[i] === 50 || possWinArrX[i] === 18){
                    console.log("poss win " + possWinArrX[i])
                    let indextogo = findPossWin(i)
                    updateCurArr(indextogo,5)
                    return
                }
            }   
            // const ogarr = [...curValues]
            // ogarr[7] = 5
            // setCurValues(ogarr)
            updateCurArr(7,5)         
        }
        if(turnCounter === 7){
            for(let i = 0; i<possWinArrX.length; i++){
                if(possWinArrX[i] === 50 || possWinArrX[i] === 18){
                    console.log("poss win " + possWinArrX[i])
                    let indextogo = findPossWin(i)
                    updateCurArr(indextogo,5)
                    return
                }
            }
            // const ogarr = [...curValues]
            // ogarr[2] = 5
            // setCurValues(ogarr)
            updateCurArr(2,5)         
        }
        if(turnCounter === 9){
            for(let i = 0; i<possWinArrX.length; i++){
                if(possWinArrX[i] === 50 || possWinArrX[i] === 18){
                    console.log("poss win " + possWinArrX[i])
                    let indextogo = findPossWin(i)
                    updateCurArr(indextogo,5)
                    return
                }
            }
            // const ogarr = [...curValues]
            // ogarr[4] = 5
            // setCurValues(ogarr)
            updateCurArr(4,5)           
        }
    }
    const findRandomEmptyIndex = () => {
        for(let  i = 0; i<curValues.length; i++){
            if(curValues[i] === 2){
                return i;
            }
        }
        return -1;
    }
    function updateTurnCounter() {
        if(someoneWonMatrix === -1){
            setTurnCounter(old=> old+1);
        }
        
    }
    function updateCurArr(indextoupdate, elementtoinsert){
        if(curValues[indextoupdate] === 2){
            const ogarr = [...curValues]
            ogarr[indextoupdate] = elementtoinsert
            setCurValues(ogarr)
            // console.log(ogarr)
            
        }
        else{
            console.log("index already taken... going for random place");
            const ogarr = [...curValues]
            ogarr[findRandomEmptyIndex()] = elementtoinsert
            setCurValues(ogarr)
        }
        if(someoneWonMatrix === -1){
            updateTurnCounter()
        }
        // setUserTurn(false);
        // setCurCharValue(old => [...old, ogarr])
        // return ogarr;
    }
    function updateCurChar() {
        const ogarr = [...curCharValues]
        for(let i = 0; i<curValues.length; i++){
            if(curValues[i] === 2){
                ogarr[i] = '_'
            }
            else if(curValues[i] === 5){
                ogarr[i] = 'O'
            }
            else if(curValues[i] === 3){
                ogarr[i] = 'X'
            }
            setCurCharValues(ogarr)
        }
        // console.log(ogarr)

    }
    function handleBoxClick(divno){
        // console.log("CHECK")
        if(curValues[divno]===2){
            updateCurArr(divno,3)
        }
    }
    function handleRefresh(){
        setCurValues(initarr)
        setCurCharValues(initchararr)
        setPossWinArrX(initpossarr)
        setSomeOneWonMatrix(-1)
        setThreeIndex([])
        setTurnCounter(0)
    }
    function UpdateWinIndex(x,y,z){
        const ogarr = [...curCharValues]
        ogarr[0] = x
        ogarr[1] = y
        ogarr[2] = z
        setThreeIndex(ogarr)
    }
    const UpdateWinChars = () => {
        console.log(" matrix "+someoneWonMatrix)
        const marginVals = [460,175,-130]
        if(someoneWonMatrix === 0){
            return( 
                <div className='line' style={{marginBottom: marginVals[someoneWonMatrix]}} ></div>
            )
        }
        else if(someoneWonMatrix === 1){
            return( 
                <div className='line' style={{marginBottom: marginVals[someoneWonMatrix]}} ></div>
            )
        }
        else if(someoneWonMatrix === 2){
            return( 
                <div className='line' style={{marginBottom: marginVals[someoneWonMatrix]}} ></div>
            )
        }
        else if(someoneWonMatrix === 3){
            return( 
                <div className='line' style={{transform: "rotate(90deg)",  marginRight: 235, marginBottom: 130}} ></div>
            )
        }
        else if(someoneWonMatrix === 4){
            return( 
                <div className='line' style={{transform: "rotate(90deg)",  marginBottom: 130}} ></div>
            )
        }
        else if(someoneWonMatrix === 5){
            return( 
                <div className='line' style={{transform: "rotate(90deg)",  marginLeft: 235, marginBottom: 130}} ></div>
            )
        }
        else if(someoneWonMatrix === 6){
            return( 
                <div className='line' style={{transform: "rotate(45deg)", marginBottom: 160}} ></div>
            )
        }
        else if(someoneWonMatrix === 7){
            return( 
                <div className='line' style={{transform: "rotate(125deg)", marginBottom: 160}} ></div>
            )
        }
        // setCurValues(ogarr)
        // const ogarr = [...curCharValues]
        // ogarr[indextoupdate] = elementtoinsert
        // setCurValues(ogarr)
        // setCurCharValues()
    }
    const checkIfWon = () => { 
        console.log(possWinArrX) 
        for(let i = 0; i<possWinArrX.length; i++){
            if(possWinArrX[i] === 125 || possWinArrX[i] === 27){
                // console.log("Someone Won: " +   someoneWonMatrix)
                if(i === 0){
                    UpdateWinIndex(0,1,2)
                }
                else if(i === 1){
                    UpdateWinIndex(3,4,5)
                }
                else if(i === 2){
                    UpdateWinIndex(6,7,8)
                }
                else if(i === 3){
                    UpdateWinIndex(0,3,6)
                }
                else if(i === 4){
                    UpdateWinIndex(1,4,7)
                }
                else if(i === 5){
                    UpdateWinIndex(2,5,8)
                }
                else if(i === 6){
                    UpdateWinIndex(0,4,8)
                }
                else if(i === 7){
                    UpdateWinIndex(2,4,6)
                }
                
                if(possWinArrX[i] === 125){
                alert("You LOST")
                }
                if(possWinArrX[i] === 27){
                alert("You WON")
                }
                setSomeOneWonMatrix(i)
                return i;
            }
        }
        return -1
    }
    function calcPossWinX(){
        let tempar = possWinArrX;
        //three rows
        tempar[0] = curValues[0] * curValues[1] * curValues[2];
        tempar[1] = curValues[3] * curValues[4] * curValues[5];
        tempar[2] = curValues[6] * curValues[7] * curValues[8];
        //three columns
        tempar[3] = curValues[0] * curValues[3] * curValues[6];
        tempar[4] = curValues[1] * curValues[4] * curValues[7];
        tempar[5] = curValues[2] * curValues[5] * curValues[8];
        //two diagonals
        tempar[6] = curValues[0] * curValues[4] * curValues[8];
        tempar[7] = curValues[2] * curValues[4] * curValues[6];

        // tempar[2] = curValues[6] * curValues[7] * curValues[8]; THIS IS EVENTUALLY FOR a Tie condition
        
        setPossWinArrX(tempar)
    }
    function findPossWin(matrix){
        if(matrix === 0){
            if(curValues[0] === 2){
                return 0;
            }
            else if(curValues[1] === 2){
                return 1;
            }
            else if(curValues[2] === 2){
                return 2;
            }
        }
        else if(matrix === 1){
            if(curValues[3] === 2){
                return 3;
            }
            else if(curValues[4] === 2){
                return 2;
            }
            else if(curValues[5] === 2){
                return 5;
            }
        }
        else if(matrix === 2){
            if(curValues[6] === 2){
                return 6;
            }
            else if(curValues[7] === 2){
                return 7;
            }
            else if(curValues[8] === 2){
                return 8;
            }
        }
        else if(matrix === 3){
            if(curValues[0] === 2){
                return 0;
            }
            else if(curValues[3] === 2){
                return 3;
            }
            else if(curValues[6] === 2){
                return 6;
            }
        }
        else if(matrix === 4){
            if(curValues[1] === 2){
                return 1;
            }
            else if(curValues[4] === 2){
                return 4;
            }
            else if(curValues[7] === 2){
                return 7;
            }
        }
        else if(matrix === 5){
            if(curValues[2] === 2){
                return 2;
            }
            else if(curValues[5] === 2){
                return 5;
            }
            else if(curValues[8] === 2){
                return 8;
            }
        }
        else if(matrix === 6){
            if(curValues[0] === 2){
                return 0;
            }
            else if(curValues[4] === 2){
                return 4;
            }
            else if(curValues[8] === 2){
                return 8;
            }
        }
        else if(matrix === 7){
            if(curValues[2] === 2){
                return 2;
            }
            else if(curValues[4] === 2){
                return 4;
            }
            else if(curValues[6] === 2){
                return 6;
            }
        }
    }
    useEffect(()=>{
        updateCurChar();
        console.log(curValues)
        calcPossWinX();
        checkIfWon();
        if(turnCounter>=9 && someoneWonMatrix === -1){
            alert("Its a Tie");
            handleRefresh()

        }
        
    },[curValues]);

  
    useEffect(()=>{
        UpdateWinChars()
    },[threeIndex]); 
    
    useEffect(()=>{
        if(turnCounter%2 !== 0 && turnCounter<10 && someoneWonMatrix === -1 && checkIfWon() === -1){
            AiPlay()
        }
    },[turnCounter]); 
    
    useEffect(()=>{
        setCurValues(initarr)
        setCurCharValues(initchararr)
        updateCurChar()

        // updateCurArr(2, 5)   
    },[]);
    return(
        // <div className= 'maindiv'>
        <div className='mainboxcollection'>
            <div className='firstrow'>
                <div className='box0' onClick={()=>handleBoxClick(0)}>
                    <text className='boxtext'>{curCharValues[0]}</text></div>
                <div className='box1' onClick={()=>handleBoxClick(1)}>
                    <text className='boxtext'>{curCharValues[1]}</text></div>
                <div className='box2' onClick={()=>handleBoxClick(2)}>
                    <text className='boxtext'>{curCharValues[2]}</text></div>
            </div>
            <div className='secondrow'>
                <div className='box3' onClick={()=>handleBoxClick(3)}>
                    <text className='boxtext'>{curCharValues[3]}</text></div>
                <div className='box4' onClick={()=>handleBoxClick(4)}>
                    <text className='boxtext'>{curCharValues[4]}</text></div>
                <div className='box5' onClick={()=>handleBoxClick(5)}>
                    <text className='boxtext'>{curCharValues[5]}</text></div>
            </div>
            <div className='thirdrow'>
                <div className='box6' onClick={()=>handleBoxClick(6)}>
                    <text className='boxtext'>{curCharValues[6]}</text></div>
                <div className='box7' onClick={()=>handleBoxClick(7)}>
                    <text className='boxtext'>{curCharValues[7]}</text></div>
                <div className='box8' onClick={()=>handleBoxClick(8)}>
                    <text className='boxtext'>{curCharValues[8]}</text></div>
            </div>
            {UpdateWinChars()}
            {/* {someoneWonMatrix!=-1 ? <div className='line' ></div> : null  } */}
            <Button type='submit' onClick={()=>handleRefresh()}  >
                   <text style={{ fontWeight: 'bold' }} >Refresh</text>
               </Button>

        </div>
        // </div>
    )
}
const Button = styled.button`
  background-color: blue;
  color: white;
  font-size: 20px;
  padding: 2px 60px;
  border-radius: 30px ;
  margin: 40px 0px;
  cursor: pointer;
  height: 90px;
  align-self: center;
`;
export default TttGame;