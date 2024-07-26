
import React, { useState } from 'react';

function App() {

  const [angka, setAngka] = useState(0);
  function increment() {
    setAngka(angka+1);
  }

  function decrement() {
    setAngka(angka-1);
  }

  function reset() {
    setAngka(0);
  }

  return (
      <div className='container my-5'>
        <div className='card text-center my-5'>
          <div className='card-body'>
            <h1>React Counter</h1>
            <div className='my-5'>
              <h2>{angka}</h2>
              <button className='btn btn-success mx-3' onClick={increment}>Increment</button>
              <button className='btn btn-danger mx-3' onClick={reset}>RESET</button>
              <button className='btn btn-secondary mx-3' onClick={decrement}>Decrement</button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
