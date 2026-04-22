import React from 'react';
import { Text, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

type Recipe = {
  id: number;
  name: string;
};

export default function Team10Recipes() {
  const recipes: Recipe[] = [
    { id: 1, name: 'High Protein Breakfast Bowl' },
    { id: 2, name: 'Chicken and Rice Meal Prep' },
    { id: 3, name: 'Greek Yogurt Protein Snack' },
    { id: 4, name: 'Post Workout Smoothie' },
  ];

  return (
    <LinearGradient
      colors={['#5D00FF', '#1f0055', '#000000']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{
        flex: 1,
        alignItems: 'center',
        paddingTop: 60,
      }}
    >
      <Text style={{ color: 'white', fontSize: 24, marginBottom: 20 }}>
        Team 10 Recipes
      </Text>

      <FlatList<Recipe>
        data={recipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={{ color: 'white', fontSize: 18, marginBottom: 12 }}>
            {item.name}
          </Text>
        )}
      />
    </LinearGradient>
  );
}