import {useState} from 'react';
import './App.css';

function App() {
 
  const [counter, setCounter] = useState(0);
const Increment = () =>{
  setCounter(counter + 1)
};
const Decrement = () =>{
  setCounter(counter - 1)
};

  return (
    <div className="App">
      <div className="counter-app">
          <h1>{counter}</h1>
          <div className="btn">
          <button onClick={Increment}>Increment</button>
          <button onClick={Decrement}>Decrement</button>
           </div>
       </div>
    </div>
  );
}

export default App; 
