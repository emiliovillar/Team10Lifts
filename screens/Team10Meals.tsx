import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

type Meal = {
  id: string;
  name: string;
  category: string;
  description: string;
};

export default function Team10Meals() {
  const meals: Meal[] = [
    {
      id: '1',
      name: 'High Protein Breakfast Bowl',
      category: 'Breakfast',
      description: 'Eggs, turkey sausage, potatoes, and fruit.',
    },
    {
      id: '2',
      name: 'Chicken and Rice Meal Prep',
      category: 'Lunch',
      description: 'Grilled chicken, rice, vegetables, and light sauce.',
    },
    {
      id: '3',
      name: 'Greek Yogurt Protein Snack',
      category: 'Snack',
      description: 'Greek yogurt, berries, granola, and honey.',
    },
    {
      id: '4',
      name: 'Post Workout Smoothie',
      category: 'Post-Workout',
      description: 'Protein powder, banana, milk, and peanut butter.',
    },
  ];

  return (
    <LinearGradient
      colors={['#5D00FF', '#1f0055', '#000000']}
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
            color: 'white',
            fontSize: 28,
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: 8,
          }}
        >
          Meals
        </Text>

        <Text
          style={{
            color: 'white',
            fontSize: 16,
            textAlign: 'center',
            marginBottom: 24,
          }}
        >
          Browse simple meal ideas that support strength, recovery, and consistency.
        </Text>

        {meals.map((meal) => (
          <View
            key={meal.id}
            style={{
              backgroundColor: 'white',
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
              {meal.name}
            </Text>

            <Text
              style={{
                color: '#5D00FF',
                fontSize: 14,
                fontWeight: '700',
                marginBottom: 8,
              }}
            >
              {meal.category}
            </Text>

            <Text style={{ color: 'black', fontSize: 16 }}>
              {meal.description}
            </Text>
          </View>
        ))}
      </ScrollView>
    </LinearGradient>
  );
}