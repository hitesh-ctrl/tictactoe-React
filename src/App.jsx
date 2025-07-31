import { useState } from "react";
import './app.css';
function App() {
  const [value,setValue] = useState(Array(9).fill(null))
  const [xIsNext,setXIsNext] = useState(true)
  const winner = calculateWinner(value);
  const onSquareClick = (i) => {
    
    if (value[i] || winner) return;
    const nextSquares = value.slice();
    if(xIsNext){
      nextSquares[i] = "X";
      
    }
    else
      nextSquares[i] = "O";
    setValue(nextSquares)
    setXIsNext(!xIsNext) 
  }
  let status;
  if(winner ){
    status=("Winner: "+winner)
  }
  else{
    status = 'Next Player: '+ (xIsNext?'X':'O')
  }
  return (
    <>
      <h1>{status}</h1>
      <div className="row-1">
        <Square value={value[0]} onSquareClick={()=>{onSquareClick(0)}} />
        <Square value={value[1]} onSquareClick={()=>{onSquareClick(1)}}/>
        <Square value={value[2]} onSquareClick={()=>{onSquareClick(2)}}/>
      </div>
      
      <div className="row-2">
        <Square value={value[3]} onSquareClick={()=>{onSquareClick(3)}}/>
        <Square value={value[4]} onSquareClick={()=>{onSquareClick(4)}}/>
        <Square value={value[5]} onSquareClick={()=>{onSquareClick(5)}}/>
      </div>
      <div className="row-3">
        <Square value={value[6]} onSquareClick={()=>{onSquareClick(6)}}/>
        <Square value={value[7]} onSquareClick={()=>{onSquareClick(7)}}/>
        <Square value={value[8]} onSquareClick={()=>{onSquareClick(8)}}/>
      </div>
      
    </>
  )
}

export default App

const Square = ({value,onSquareClick}) => {
  
 
  return (
    <button onClick={onSquareClick} style={{width:50, height:50, padding: 2}}>{value}</button>
  )
}
const calculateWinner = (value)=>{
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for(let i=0;i<8;i++){
    const [a,b,c] = lines[i];
    if(value[a] && value[a]===value[b]&&value[a]===value[c]){
      return value[a];
    }
  }
  return null;

  
}