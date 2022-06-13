import { useState } from 'react';
import './App.css';
import './Dalida';
import Dalida from './Dalida';

function App() {
  const [counter, setCounter] = useState(0); 
  const increaseCounter = () => {
    setCounter(counter + 1);
  }
  const decreaseCounter = () => {
    setCounter(counter - 1);
  }
  const resetCounter = () => {
    setCounter(0);
  }
  return (
    <div id="buttons">
      <h1>{counter}</h1>
      {Dalida()}
      <button onClick={increaseCounter} style={{color:'white', backgroundColor:'green'}}> Increase </button>
      <button onClick={decreaseCounter}> Decrease </button>
      <button onClick={resetCounter}> Reset</button>
    </div>
  
  );
}

export default App;
