import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Play, BookOpen, Clock, Flame, Target } from "lucide-react";
import { cn } from "../../lib/utils";

const ExerciseCard = ({ exercise, onStart, onViewDetails, className }) => {
  const getDifficultyColor = (level) => {
    const colors = {
      1: "bg-green-100 text-green-800 border-green-200",
      2: "bg-blue-100 text-blue-800 border-blue-200",
      3: "bg-yellow-100 text-yellow-800 border-yellow-200",
      4: "bg-orange-100 text-orange-800 border-orange-200",
      5: "bg-red-100 text-red-800 border-red-200"
    };
    return colors[level] || colors[1];
  };

  const getDifficultyLabel = (level) => {
    const labels = {
      1: "Beginner", 2: "Novice", 3: "Intermediate", 4: "Advanced", 5: "Expert"
    };
    return labels[level] || "Beginner";
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Strength': 'bg-blue-500/10 text-blue-600 border-blue-200',
      'Cardio': 'bg-red-500/10 text-red-600 border-red-200',
      'HIIT': 'bg-orange-500/10 text-orange-600 border-orange-200',
      'Core': 'bg-purple-500/10 text-purple-600 border-purple-200',
      'Flexibility': 'bg-green-500/10 text-green-600 border-green-200'
    };
    return colors[category] || 'bg-gray-500/10 text-gray-600 border-gray-200';
  };

  return (
    <Card className={cn(
      "group relative overflow-hidden transition-all duration-300",
      "hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]",
      "border-l-4 border-l-primary bg-gradient-to-br from-card to-card/80",
      "cursor-pointer",
      className
    )}>
      {/* Hover Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Exercise Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-muted to-muted/50">
        <img 
          src={exercise.thumbnail} 
          alt={exercise.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        
        {/* Play Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button size="sm" variant="secondary" className="shadow-lg backdrop-blur-sm">
            <Play className="mr-1 h-3 w-3" />
            Watch Demo
          </Button>
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 right-3">
          <Badge className={getCategoryColor(exercise.category)}>
            {exercise.category}
          </Badge>
        </div>

        {/* Difficulty Badge */}
        <div className="absolute top-3 left-3">
          <Badge className={getDifficultyColor(exercise.difficulty)}>
            {getDifficultyLabel(exercise.difficulty)}
          </Badge>
        </div>
      </div>

      <CardHeader className="relative z-10 space-y-3 pb-3">
        <div className="space-y-2">
          <CardTitle className="text-lg font-semibold line-clamp-1 group-hover:text-primary transition-colors">
            {exercise.name}
          </CardTitle>
          <CardDescription className="text-sm">
            <span className="font-medium">Primary:</span> {exercise.primaryMuscle}
          </CardDescription>
        </div>

        {/* Secondary Muscles */}
        {exercise.secondaryMuscles && exercise.secondaryMuscles.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {exercise.secondaryMuscles.slice(0, 3).map(muscle => (
              <Badge key={muscle} variant="outline" className="text-xs">
                {muscle}
              </Badge>
            ))}
            {exercise.secondaryMuscles.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{exercise.secondaryMuscles.length - 3} more
              </Badge>
            )}
          </div>
        )}
      </CardHeader>

      <CardContent className="relative z-10 space-y-4 pt-0">
        {/* Exercise Stats Grid */}
        <div className="grid grid-cols-3 gap-2 text-xs">
          <div className="flex items-center gap-1 p-2 rounded-lg bg-muted/50 transition-colors group-hover:bg-muted">
            <Target className="h-3 w-3 text-primary" />
            <span className="font-medium">{exercise.targetReps}</span>
          </div>
          <div className="flex items-center gap-1 p-2 rounded-lg bg-muted/50 transition-colors group-hover:bg-muted">
            <Clock className="h-3 w-3 text-blue-500" />
            <span className="font-medium">{exercise.restTime}</span>
          </div>
          <div className="flex items-center gap-1 p-2 rounded-lg bg-muted/50 transition-colors group-hover:bg-muted">
            <Flame className="h-3 w-3 text-orange-500" />
            <span className="font-medium">{exercise.caloriesPerSet} cal</span>
          </div>
        </div>

        {/* Equipment */}
        <div className="flex items-start gap-2 text-sm text-muted-foreground">
          <span className="font-medium">Equipment:</span>
          <span className="flex-1">
            {exercise.equipment && exercise.equipment.length > 0 
              ? exercise.equipment.join(", ") 
              : "Bodyweight"}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {exercise.description}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          <Button 
            size="sm" 
            className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200"
            onClick={() => onStart?.(exercise)}
          >
            <Play className="mr-1 h-3 w-3" />
            Start Exercise
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => onViewDetails?.(exercise)}
            className="group-hover:border-primary/50 transition-colors"
          >
            <BookOpen className="h-3 w-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExerciseCard;
