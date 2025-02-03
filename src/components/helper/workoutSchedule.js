// List of exercises for each day
export const workoutSchedule = {
  0: {
    exercises: [
      "REST (Active Recovery n Light Walking, Stretching, Yoga)",
      "Increase weights slowly (Start light, add weight when you can hit 12 reps easily)",
      "Shorten rest time (Keep 30-60 sec between sets for fat burn)",
      "Stay consistent (Results take time, trust the process)",
    ],
  },
  1: {
    name: "Upper Body Strength + Cardio (Fat Loss & Muscle Gain)",
    strength_training: {
      sets: 3,
      reps: "8-12",
      exercises: [
        "Bench Press (Chest)",
        "Lat Pulldown (Back)",
        "Dumbbell Shoulder Press",
        "Barbell Bicep Curls",
        "Triceps Dips",
      ],
    },
    cardio: {
      duration: "15 min after weights",
      exercise: "Treadmill Running (5 min walk, 10 min jog)",
    },
    core: {
      sets: 2,
      reps: 15,
      exercises: ["Hanging Leg Raises", "Russian Twists"],
    },
  },
  2: {
    name: "Lower Body Strength + Fat Burn",
    strength_training: {
      sets: 3,
      reps: "10-12",
      exercises: [
        "Squats (Barbell or Dumbbell)",
        "Leg Press Machine",
        "Romanian Deadlifts (Hamstrings)",
        "Calf Raises",
      ],
    },
    cardio: {
      duration: "15 min HIIT - High Intensity",
      exercise: "30 sec Sprint + 1 min Walk (Repeat)",
    },
    core: {
      sets: 2,
      reps: 15,
      exercises: ["Plank (Hold for 30 sec)", "Bicycle Crunches"],
    },
  },
  3: {
    name: "Functional & Core Strength (Shred Belly Fat)",
    cardio_and_core: {
      exercises: [
        "Rowing Machine 10 min",
        "Battle Ropes 3 sets, 30 sec",
        "Hanging Knee Raises 3 sets, 12 reps",
        "Cable Woodchoppers 3 sets, 12 reps",
        "Ab Roller 2 sets, 10 reps",
      ],
    },
  },
  4: {
    name: "Push Workout (Chest, Shoulders, Triceps)",
    strength_training: {
      sets: 3,
      reps: "8-12",
      exercises: [
        "Incline Bench Press",
        "Shoulder Military Press",
        "Dumbbell Lateral Raises",
        "Triceps Rope Pushdown",
        "Push-Ups (Final Finisher 3 sets till failure)",
      ],
    },
    core: {
      sets: 2,
      reps: 15,
      exercises: ["Hanging Leg Raises", "Side Planks"],
    },
  },
  5: {
    name: "Pull Workout (Back, Biceps, Core)",
    strength_training: {
      sets: 3,
      reps: "10-12",
      exercises: [
        "Deadlifts (Back & Core Strength)",
        "Seated Row Machine",
        "Barbell Biceps Curl",
        "Face Pulls (Rear Delts)",
      ],
    },
    cardio: {
      duration: "15 min moderate pace",
      exercise: "Rowing or Treadmill",
    },
    core: {
      sets: 2,
      reps: 15,
      exercises: ["Ab Cable Crunches", "Mountain Climbers"],
    },
  },
  6: {
    name: "Legs + HIIT (Fat Loss Focus)",
    strength_training: {
      sets: 3,
      reps: "10-12",
      exercises: [
        "Bulgarian Split Squats",
        "Dumbbell Step-Ups",
        "Hamstring Curls",
        "Standing Calf Raises",
      ],
    },
    cardio: {
      duration: "20 min HIIT, high intensity for maximum fat burn",
      exercise: "Sprint (30 sec) + Walk (1 min) Repeat 10 times",
    },
    core: {
      sets: 2,
      reps: 15,
      exercises: ["Hanging Leg Raises", "Russian Twists"],
    },
  },
};
