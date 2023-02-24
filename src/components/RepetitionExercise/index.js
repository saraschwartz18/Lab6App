import React, { useState } from "react";

function RepetitionExercise(props) {
  const [count, setCount] = useState(0);

  const handleRep = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>{props.name}</h1>
      <h2>Count: {count}</h2>
      <button onClick={handleRep}>Count Rep</button>
      <button onClick={handleReset}>Reset Count</button>
    </div>
  );
}

export default RepetitionExercise;

