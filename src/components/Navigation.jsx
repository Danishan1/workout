import React from "react";

const Navigation = ({ currentDay, onDayChange }) => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const handlePrevDay = () => {
    onDayChange(currentDay === 0 ? 6 : currentDay - 1); // Navigate to previous day
  };

  const handleNextDay = () => {
    onDayChange(currentDay === 6 ? 0 : currentDay + 1); // Navigate to next day
  };

  return (
    <div className="navigation">
      <button onClick={handlePrevDay}>Previous Day</button>
      <span>{daysOfWeek[currentDay]}</span>
      <button onClick={handleNextDay}>Next Day</button>
    </div>
  );
};

export default Navigation;
