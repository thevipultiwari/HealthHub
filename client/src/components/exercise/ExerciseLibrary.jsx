import React, { useState, useMemo } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { Search, Grid, List, Filter } from "lucide-react";
import ExerciseCard from "./ExerciseCard";
import { exercisesData, muscleGroups, equipmentTypes } from "../../data/exercises";

const ExerciseLibrary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [selectedMuscle, setSelectedMuscle] = useState("All");
  const [selectedEquipment, setSelectedEquipment] = useState("All");

  // Advanced filtering logic
  const filteredExercises = useMemo(() => {
    return exercisesData.filter(exercise => {
      const matchesSearch = exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           exercise.primaryMuscle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           exercise.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesMuscle = selectedMuscle === "All" || 
                           exercise.primaryMuscle === selectedMuscle ||
                           exercise.secondaryMuscles?.includes(selectedMuscle);
      
      const matchesEquipment = selectedEquipment === "All" ||
                              exercise.equipment?.includes(selectedEquipment);

      return matchesSearch && matchesMuscle && matchesEquipment;
    });
  }, [searchTerm, selectedMuscle, selectedEquipment]);

  const handleStartExercise = (exercise) => {
    console.log("Starting exercise:", exercise.name);
    // Will implement workout tracking later
  };

  const handleViewDetails = (exercise) => {
    console.log("Viewing details for:", exercise.name);
    // Will implement exercise modal later
  };

  const clearFilters = () => {
    setSelectedMuscle("All");
    setSelectedEquipment("All");
    setSearchTerm("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/10 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Professional Header */}
        <div className="space-y-6 animate-fade-in">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Exercise Library
              </h1>
              <p className="text-muted-foreground text-lg mt-2">
                Discover and master professional exercises with video guidance
              </p>
            </div>
            
            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-muted rounded-lg p-1">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search exercises, muscles, or equipment..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-background/50 backdrop-blur-sm"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Filters:</span>
              </div>
              
              {/* Muscle Group Filter */}
              <select 
                value={selectedMuscle} 
                onChange={(e) => setSelectedMuscle(e.target.value)}
                className="px-3 py-1 rounded-md border bg-background text-sm"
              >
                {muscleGroups.map(muscle => (
                  <option key={muscle} value={muscle}>{muscle}</option>
                ))}
              </select>

              {/* Equipment Filter */}
              <select 
                value={selectedEquipment} 
                onChange={(e) => setSelectedEquipment(e.target.value)}
                className="px-3 py-1 rounded-md border bg-background text-sm"
              >
                {equipmentTypes.map(equipment => (
                  <option key={equipment} value={equipment}>{equipment}</option>
                ))}
              </select>

              {/* Clear Filters */}
              <Button 
                variant="outline" 
                size="sm" 
                onClick={clearFilters}
                className="text-xs"
              >
                Clear All
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Results Header */}
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filteredExercises.length}</span> exercises
          </p>
          
          {/* Active Filters Display */}
          <div className="flex items-center gap-2">
            {selectedMuscle !== "All" && (
              <Badge variant="secondary" className="gap-1">
                {selectedMuscle}
                <button onClick={() => setSelectedMuscle("All")} className="ml-1 hover:text-destructive">×</button>
              </Badge>
            )}
            {selectedEquipment !== "All" && (
              <Badge variant="secondary" className="gap-1">
                {selectedEquipment}
                <button onClick={() => setSelectedEquipment("All")} className="ml-1 hover:text-destructive">×</button>
              </Badge>
            )}
          </div>
        </div>

        {/* Exercise Grid */}
        <div className="animate-slide-up">
          <div className={`grid gap-6 ${
            viewMode === "grid" 
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
              : "grid-cols-1 max-w-4xl mx-auto"
          }`}>
            {filteredExercises.map(exercise => (
              <ExerciseCard
                key={exercise.id}
                exercise={exercise}
                onStart={handleStartExercise}
                onViewDetails={handleViewDetails}
                className={viewMode === "list" ? "flex-row" : ""}
              />
            ))}
          </div>

          {/* No Results State */}
          {filteredExercises.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No exercises found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search terms or filters
              </p>
              <Button variant="outline" onClick={clearFilters}>
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExerciseLibrary;
