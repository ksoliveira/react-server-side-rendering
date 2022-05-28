import './App.css';
import React from 'react';

function App() {
  const [count, setCount] = React.useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count +- 1)
  }

  return (
    <>
      <p>Current Number: <strong>{count}</strong></p>
      <button onClick={decrement}>- Decrement</button>&nbsp;
      <button onClick={increment}>+ Increment</button>
    </>
  );
}

export default App;
