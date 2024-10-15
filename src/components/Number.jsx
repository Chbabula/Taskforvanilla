import React, { useState } from 'react';

const Number = ({ numbers }) => {
  // Initialize state to track the current index in the array
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle the button click, increment index and loop when reaching the end
  const handleNextNumber = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % numbers.length);
  };

  return (
    <div>
      <h2>Current Number: {numbers[currentIndex]}</h2>
      <button onClick={handleNextNumber}>Next Number</button>
    </div>
  );
};

export default Number;
