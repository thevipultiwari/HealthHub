export const exercisesData = [
  {
    id: 1,
    name: "Barbell Back Squat",
    primaryMuscle: "Quadriceps",
    secondaryMuscles: ["Glutes", "Hamstrings", "Core"],
    difficulty: 4,
    equipment: ["Barbell", "Squat Rack"],
    category: "Strength",
    videoUrl: "/videos/squat.mp4",
    thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    description: "The king of all exercises for building lower body strength and mass.",
    instructions: [
      "Set up the barbell on a squat rack at chest height",
      "Position the bar on your upper traps",
      "Unrack and step back with feet shoulder-width apart",
      "Lower your body by bending at hips and knees",
      "Drive through your heels to return to starting position"
    ],
    targetReps: "6-8",
    restTime: "2-3 minutes",
    caloriesPerSet: 12
  },
  {
    id: 2,
    name: "Deadlift",
    primaryMuscle: "Hamstrings",
    secondaryMuscles: ["Glutes", "Lower Back", "Traps"],
    difficulty: 5,
    equipment: ["Barbell"],
    category: "Strength",
    videoUrl: "/videos/deadlift.mp4",
    thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop",
    description: "Ultimate posterior chain exercise for building total body strength.",
    instructions: [
      "Stand with feet hip-width apart, bar over mid-foot",
      "Bend at hips and knees to grip the bar",
      "Keep chest up and back straight",
      "Drive through heels and extend hips to lift the bar",
      "Lower the bar with control to starting position"
    ],
    targetReps: "5-6",
    restTime: "3-5 minutes",
    caloriesPerSet: 15
  },
  {
    id: 3,
    name: "Bench Press",
    primaryMuscle: "Chest",
    secondaryMuscles: ["Shoulders", "Triceps"],
    difficulty: 3,
    equipment: ["Barbell", "Bench"],
    category: "Strength",
    videoUrl: "/videos/bench.mp4",
    thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    description: "Classic upper body exercise for building chest and pushing strength.",
    instructions: [
      "Lie on bench with feet flat on floor",
      "Grip bar slightly wider than shoulder-width",
      "Lower bar to chest with control",
      "Press bar up explosively",
      "Keep shoulders back and core tight"
    ],
    targetReps: "8-10",
    restTime: "2-3 minutes",
    caloriesPerSet: 10
  },
  {
    id: 4,
    name: "Pull-ups",
    primaryMuscle: "Back",
    secondaryMuscles: ["Biceps", "Shoulders"],
    difficulty: 4,
    equipment: ["Pull-up Bar"],
    category: "Strength",
    videoUrl: "/videos/pullups.mp4",
    thumbnail: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=300&fit=crop",
    description: "Essential upper body pulling exercise for back development.",
    instructions: [
      "Hang from pull-up bar with arms fully extended",
      "Pull your body up until chin clears the bar",
      "Lower yourself with control to full arm extension",
      "Keep core engaged throughout movement"
    ],
    targetReps: "6-12",
    restTime: "2-3 minutes",
    caloriesPerSet: 8
  },
  {
    id: 5,
    name: "Overhead Press",
    primaryMuscle: "Shoulders",
    secondaryMuscles: ["Triceps", "Core"],
    difficulty: 3,
    equipment: ["Barbell"],
    category: "Strength",
    videoUrl: "/videos/ohp.mp4",
    thumbnail: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5e?w=400&h=300&fit=crop",
    description: "Fundamental shoulder exercise for building pressing strength.",
    instructions: [
      "Start with bar at shoulder height",
      "Press bar straight up overhead",
      "Keep core tight and avoid arching back",
      "Lower bar back to shoulders with control"
    ],
    targetReps: "6-8",
    restTime: "2-3 minutes",
    caloriesPerSet: 9
  },
  {
    id: 6,
    name: "Bulgarian Split Squat",
    primaryMuscle: "Quadriceps",
    secondaryMuscles: ["Glutes", "Calves"],
    difficulty: 3,
    equipment: ["Dumbbell", "Bench"],
    category: "Strength",
    videoUrl: "/videos/bulgarian.mp4",
    thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    description: "Unilateral leg exercise for building single-leg strength and stability.",
    instructions: [
      "Stand 2-3 feet in front of a bench",
      "Place rear foot on bench behind you",
      "Lower into lunge position",
      "Drive through front heel to return to start"
    ],
    targetReps: "10-12 each leg",
    restTime: "90 seconds",
    caloriesPerSet: 7
  }
];

export const muscleGroups = [
  "All", "Chest", "Back", "Shoulders", "Arms", "Legs", "Core", "Cardio"
];

export const equipmentTypes = [
  "All", "Barbell", "Dumbbell", "Machine", "Bodyweight", "Cable", "Kettlebell"
];

export const difficultyLevels = [
  { value: "all", label: "All Levels" },
  { value: 1, label: "Beginner" },
  { value: 2, label: "Novice" },
  { value: 3, label: "Intermediate" },
  { value: 4, label: "Advanced" },
  { value: 5, label: "Expert" }
];
