import React, { useState } from "react";
import "./App.css";
import WorkoutDay from "./components/WorkoutDay";
import Navigation from "./components/Navigation";

function App() {
  const [currentDay, setCurrentDay] = useState(new Date().getDay()); // Default to today

  // Update current day based on navigation
  const handleDayChange = (day) => {
    setCurrentDay(day);
  };

  return (
    <div className="app">
      <WorkoutDay day={currentDay} />
      <Navigation currentDay={currentDay} onDayChange={handleDayChange} />
    </div>
  );
}

export default App;
