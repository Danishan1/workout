import React from "react";
import { workoutSchedule } from "./helper/workoutSchedule";
import ExerciseCategory from "./ExerciseCategory";

const WorkoutDay = ({ day }) => {
  const currentWorkout = workoutSchedule[day];

  if (!currentWorkout) return <div>No workout data available for today.</div>;

  return (
    <div className="workout-plan">
      <h1>{currentWorkout.day}</h1>

      {/* Strength Training */}
      {currentWorkout.strength_training && (
        <ExerciseCategory
          category="Strength Training"
          exercises={currentWorkout.strength_training.exercises}
        />
      )}

      {/* Cardio */}
      {currentWorkout.cardio && (
        <ExerciseCategory
          category="Cardio"
          exercises={currentWorkout.cardio.exercise}
        />
      )}

      {/* Core */}
      {currentWorkout.core && (
        <ExerciseCategory
          category="Core"
          exercises={currentWorkout.core.exercises}
        />
      )}

      {/* Cardio + Core */}
      {currentWorkout.cardio_and_core && (
        <ExerciseCategory
          category="Cardio + Core"
          exercises={currentWorkout.cardio_and_core.exercises}
        />
      )}

      {/* Progression Strategy */}
      {currentWorkout.exercises && (
        <div className="progression-strategy">
          <h3>Progression Strategy</h3>
          <ul>
            {currentWorkout.exercises.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default WorkoutDay;
