import React from 'react';
import Number from './components/Number';

function App() {
  const numbersArray = [1, 2, 3, 4, 5];

  return (
    <div className="App">
      <h1>Number Cycler</h1>
      <Number numbers={numbersArray} />
    </div>
  );
}

export default App;
