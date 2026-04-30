import React, { useState } from 'react';
import {
  Text,
  TextInput,
  Button,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

type WorkoutDay = {
  id: string;
  day: string;
  focus: string;
  exercises: string[];
};

export default function Team10Workouts() {
  const [workouts, setWorkouts] = useState<WorkoutDay[]>([
    {
      id: '1',
      day: 'Monday',
      focus: 'Upper Body',
      exercises: ['Bench Press - 3x8', 'Shoulder Press - 3x10', 'Tricep Pushdowns - 3x12'],
    },
    {
      id: '2',
      day: 'Tuesday',
      focus: 'Lower Body',
      exercises: ['Squats - 3x8', 'Romanian Deadlifts - 3x10', 'Calf Raises - 3x12'],
    },
    {
      id: '3',
      day: 'Wednesday',
      focus: 'Rest / Recovery',
      exercises: ['Light walk', 'Stretching', 'Mobility work'],
    },
  ]);

  const [day, setDay] = useState('');
  const [focus, setFocus] = useState('');
  const [exercisesInput, setExercisesInput] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [message, setMessage] = useState('');

  function clearForm() {
    setDay('');
    setFocus('');
    setExercisesInput('');
    setEditingId(null);
  }

  function handleSaveWorkout() {
    setMessage('');

    if (!day.trim() || !focus.trim() || !exercisesInput.trim()) {
      setMessage('Please enter a day, focus, and at least one exercise.');
      return;
    }

    const exerciseList = exercisesInput
      .split('\n')
      .map((exercise) => exercise.trim())
      .filter((exercise) => exercise.length > 0);

    if (editingId) {
      setWorkouts((currentWorkouts) =>
        currentWorkouts.map((workout) =>
          workout.id === editingId
            ? {
                ...workout,
                day: day.trim(),
                focus: focus.trim(),
                exercises: exerciseList,
              }
            : workout
        )
      );

      setMessage('Workout updated successfully.');
    } else {
      const newWorkout: WorkoutDay = {
        id: Date.now().toString(),
        day: day.trim(),
        focus: focus.trim(),
        exercises: exerciseList,
      };

      setWorkouts((currentWorkouts) => [...currentWorkouts, newWorkout]);
      setMessage('Workout added to your weekly split.');
    }

    clearForm();
  }

  function handleEditWorkout(workout: WorkoutDay) {
    setEditingId(workout.id);
    setDay(workout.day);
    setFocus(workout.focus);
    setExercisesInput(workout.exercises.join('\n'));
    setMessage('Editing selected workout.');
  }

  function handleDeleteWorkout(id: string) {
    setWorkouts((currentWorkouts) =>
      currentWorkouts.filter((workout) => workout.id !== id)
    );

    if (editingId === id) {
      clearForm();
    }

    setMessage('Workout removed from your weekly split.');
  }

  return (
    <LinearGradient
      colors={['#FFFFFF', '#FFFFFF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{
          padding: 20,
          paddingTop: 60,
        }}
      >
        <Text
          style={{
            color: '#5D00FF',
            fontSize: 28,
            fontWeight: '700',
            marginBottom: 8,
            textAlign: 'center',
          }}
        >
          My Workouts
        </Text>

        <Text
          style={{
            color: '#5D00FF',
            fontSize: 16,
            marginBottom: 24,
            textAlign: 'center',
          }}
        >
          View and customize your workout split for the week.
        </Text>

        {workouts.map((workout) => (
          <View
            key={workout.id}
            style={{
              backgroundColor: '#5D00FF',
              borderRadius: 12,
              padding: 16,
              marginBottom: 16,
            }}
          >
            <Text
              style={{
                color: 'black',
                fontSize: 20,
                fontWeight: '700',
                marginBottom: 4,
              }}
            >
              {workout.day}: {workout.focus}
            </Text>

            {workout.exercises.map((exercise, index) => (
              <Text key={index} style={{ color: 'black', fontSize: 16 }}>
                • {exercise}
              </Text>
            ))}

            <View style={{ marginTop: 12 }}>
              <Button title="Edit Workout" onPress={() => handleEditWorkout(workout)} />
            </View>

            <TouchableOpacity
              onPress={() => handleDeleteWorkout(workout.id)}
              style={{ marginTop: 10 }}
            >
              <Text style={{ color: '#5D00FF', textAlign: 'center' }}>
                Delete Workout
              </Text>
            </TouchableOpacity>
          </View>
        ))}

        <View
          style={{
            backgroundColor: '#5D00FF',
            borderRadius: 12,
            padding: 16,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              color: 'black',
              fontSize: 22,
              fontWeight: '700',
              marginBottom: 12,
            }}
          >
            {editingId ? 'Edit Workout' : 'Create Workout Split'}
          </Text>

          <TextInput
            placeholder="Day, example: Thursday"
            value={day}
            onChangeText={setDay}
            style={{
              backgroundColor: '#eeeeee',
              padding: 12,
              borderRadius: 8,
              marginBottom: 12,
            }}
          />

          <TextInput
            placeholder="Workout focus, example: Full Body"
            value={focus}
            onChangeText={setFocus}
            style={{
              backgroundColor: '#eeeeee',
              padding: 12,
              borderRadius: 8,
              marginBottom: 12,
            }}
          />

          <TextInput
            placeholder={'Exercises, one per line\nExample:\nDeadlift - 3x5\nLat Pulldown - 3x10'}
            value={exercisesInput}
            onChangeText={setExercisesInput}
            multiline
            numberOfLines={5}
            style={{
              backgroundColor: '#eeeeee',
              padding: 12,
              borderRadius: 8,
              marginBottom: 16,
              minHeight: 120,
              textAlignVertical: 'top',
            }}
          />

          <Button
            title={editingId ? 'Save Changes' : 'Add Workout'}
            onPress={handleSaveWorkout}
          />

          {editingId ? (
            <TouchableOpacity onPress={clearForm} style={{ marginTop: 12 }}>
              <Text style={{ color: '#5D00FF', textAlign: 'center' }}>
                Cancel Edit
              </Text>
            </TouchableOpacity>
          ) : null}

          {message ? (
            <Text
              style={{
                color: 'black',
                marginTop: 16,
                textAlign: 'center',
              }}
            >
              {message}
            </Text>
          ) : null}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}