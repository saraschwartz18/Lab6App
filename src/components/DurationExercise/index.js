import React, { useState } from "react"

function DurationExercise(props) {
  const [duration, setDuration] = useState("00:00");

  function handleStart() {
    let seconds = 0;
    let minutes = 0;
    setInterval(() => {
      seconds++;
      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }
      setDuration(
        `${minutes.toString().padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")}`
      );
    }, 1000);
  }

  function handleReset() {
    setDuration("00:00");
  }

  return (
    <div>
      <h1>{props.name}</h1>
      <h2>Duration: {duration}</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default DurationExercise;



