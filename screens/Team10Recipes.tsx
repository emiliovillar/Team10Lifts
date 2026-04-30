import React from 'react';
import { Text, ScrollView, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export type Recipe = {
  id: string;
  name: string;
  category: string;
  description: string;
};

export const recipes: Recipe[] = [
  {
    id: '1',
    name: 'High Protein Breakfast Bowl',
    category: 'Breakfast',
    description: 'Eggs, turkey sausage, potatoes, and fruit.',
  },
  {
    id: '2',
    name: 'Chicken and Rice Recipe Prep',
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

export default function Team10Recipes() {
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
            textAlign: 'center',
            marginBottom: 8,
          }}
        >
          Team 10 Recipes
        </Text>

        <Text
          style={{
            color: '#5D00FF',
            fontSize: 16,
            textAlign: 'center',
            marginBottom: 24,
          }}
        >
          View recipes provided by our Team 10 members.
        </Text>

        <View
          style={{
            backgroundColor: '#5D00FF',
            borderRadius: 12,
            padding: 16,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 22,
              fontWeight: '700',
              marginBottom: 12,
            }}
          >
            Recipe Menu
          </Text>

          {recipes.map((Recipe) => (
            <View
              key={Recipe.id}
              style={{
                backgroundColor: '#eeeeee',
                borderRadius: 10,
                padding: 14,
                marginBottom: 14,
              }}
            >
              <Text
                style={{
                  color: '#000000',
                  fontSize: 18,
                  fontWeight: '700',
                  marginBottom: 4,
                }}
              >
                {Recipe.name}
              </Text>

              <Text
                style={{
                  color: '#5D00FF',
                  fontSize: 14,
                  fontWeight: '600',
                  marginBottom: 6,
                }}
              >
                {Recipe.category}
              </Text>

              <Text
                style={{
                  color: '#000000',
                  fontSize: 15,
                }}
              >
                {Recipe.description}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}