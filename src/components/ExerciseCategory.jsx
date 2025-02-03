import React from "react";

const ExerciseCategory = ({ category, exercises }) => {
  return (
    <div className="exercise-category">
      <h3>{category}</h3>
      <ul>
        {Array.isArray(exercises) ? (
          exercises.map((exercise, index) => <li key={index}>{exercise}</li>)
        ) : (
          <li>{exercises}</li>
        )}
      </ul>
    </div>
  );
};

export default ExerciseCategory;
