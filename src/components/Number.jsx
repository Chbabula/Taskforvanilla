import React, { useState } from 'react';

const Number = ({ numbers }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isThrottled, setIsThrottled] = useState(false); 

  const handleNextNumber = () => {
    
    if (isThrottled) return;

    setCurrentIndex((prevIndex) => (prevIndex + 1) % numbers.length);


    setIsThrottled(true);
    setTimeout(() => {
      setIsThrottled(false);
    }, 200); 
  };

  return (
    <div>
      <h2>Current Number: {numbers[currentIndex]}</h2>
      <button onClick={handleNextNumber}>Next Number</button>
    </div>
  );
};

export default Number;
