import React, { useState } from 'react';
import {
  Text,
  ScrollView,
  View,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

type Meal = {
  id: string;
  name: string;
  category: string;
  description: string;
};

export default function Team10Recipes() {
  const [recipes, setRecipes] = useState<Meal[]>([
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
  ]);

  const [favorites, setFavorites] = useState<Meal[]>([]);
  const [mealPlan, setMealPlan] = useState<Meal[]>([]);
  const [customMealName, setCustomMealName] = useState('');
  const [customMealDescription, setCustomMealDescription] = useState('');
  const [message, setMessage] = useState('');

  function isFavorite(mealId: string) {
    return favorites.some((meal) => meal.id === mealId);
  }

  function isInMealPlan(mealId: string) {
    return mealPlan.some((meal) => meal.id === mealId);
  }

  function toggleFavorite(meal: Meal) {
    setMessage('');

    if (isFavorite(meal.id)) {
      setFavorites((currentFavorites) =>
        currentFavorites.filter((favorite) => favorite.id !== meal.id)
      );
      setMessage(`${meal.name} removed from favorites.`);
    } else {
      setFavorites((currentFavorites) => [...currentFavorites, meal]);
      setMessage(`${meal.name} added to favorites.`);
    }
  }

  function addToMealPlan(meal: Meal) {
    setMessage('');

    if (isInMealPlan(meal.id)) {
      setMessage(`${meal.name} is already in your meal plan.`);
      return;
    }

    setMealPlan((currentMealPlan) => [...currentMealPlan, meal]);
    setMessage(`${meal.name} added to your weekly meal plan.`);
  }

  function removeFromMealPlan(mealId: string) {
    setMealPlan((currentMealPlan) =>
      currentMealPlan.filter((meal) => meal.id !== mealId)
    );
    setMessage('Meal removed from your weekly meal plan.');
  }

  function addCustomMeal() {
    setMessage('');

    if (!customMealName.trim() || !customMealDescription.trim()) {
      setMessage('Please enter a meal name and description.');
      return;
    }

    const newMeal: Meal = {
      id: Date.now().toString(),
      name: customMealName.trim(),
      category: 'Custom Meal',
      description: customMealDescription.trim(),
    };

    setRecipes((currentRecipes) => [...currentRecipes, newMeal]);
    setMealPlan((currentMealPlan) => [...currentMealPlan, newMeal]);

    setCustomMealName('');
    setCustomMealDescription('');
    setMessage('Custom meal added to your weekly meal plan.');
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
            textAlign: 'center',
            marginBottom: 8,
          }}
        >
          My Meals
        </Text>

        <Text
          style={{
            color: '#5D00FF',
            fontSize: 16,
            textAlign: 'center',
            marginBottom: 24,
          }}
        >
          View recipes, favorite meals, and build your weekly meal plan.
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
              color: 'black',
              fontSize: 22,
              fontWeight: '700',
              marginBottom: 12,
            }}
          >
            Weekly Meal Plan
          </Text>

          {mealPlan.length === 0 ? (
            <Text style={{ color: 'black', fontSize: 16 }}>
              No meals added yet. Add meals from the recipes below.
            </Text>
          ) : (
            mealPlan.map((meal) => (
              <View
                key={meal.id}
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: '#dddddd',
                  paddingBottom: 10,
                  marginBottom: 10,
                }}
              >
                <Text
                  style={{
                    color: 'black',
                    fontSize: 18,
                    fontWeight: '700',
                  }}
                >
                  {meal.name}
                </Text>

                <Text style={{ color: 'black', fontSize: 15 }}>
                  {meal.description}
                </Text>

                <TouchableOpacity
                  onPress={() => removeFromMealPlan(meal.id)}
                  style={{ marginTop: 8 }}
                >
                  <Text style={{ color: '#5D00FF', textAlign: 'center' }}>
                    Remove from Meal Plan
                  </Text>
                </TouchableOpacity>
              </View>
            ))
          )}
        </View>

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
              color: 'black',
              fontSize: 22,
              fontWeight: '700',
              marginBottom: 12,
            }}
          >
            Recipes
          </Text>

          {recipes.map((meal) => (
            <View
              key={meal.id}
              style={{
                backgroundColor: '#eeeeee',
                borderRadius: 10,
                padding: 14,
                marginBottom: 14,
              }}
            >
              <Text
                style={{
                  color: 'black',
                  fontSize: 18,
                  fontWeight: '700',
                }}
              >
                {meal.name}
              </Text>

              <Text
                style={{
                  color: '#333333',
                  fontSize: 14,
                  marginBottom: 4,
                }}
              >
                {meal.category}
              </Text>

              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  marginBottom: 12,
                }}
              >
                {meal.description}
              </Text>

              <Button
                title={isFavorite(meal.id) ? 'Remove Favorite' : 'Add to Favorites'}
                onPress={() => toggleFavorite(meal)}
              />

              <View style={{ marginTop: 8 }}>
                <Button
                  title={isInMealPlan(meal.id) ? 'Already in Meal Plan' : 'Add to Meal Plan'}
                  onPress={() => addToMealPlan(meal)}
                />
              </View>
            </View>
          ))}
        </View>

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
              color: 'black',
              fontSize: 22,
              fontWeight: '700',
              marginBottom: 12,
            }}
          >
            Favorites
          </Text>

          {favorites.length === 0 ? (
            <Text style={{ color: 'black', fontSize: 16 }}>
              No favorite meals yet.
            </Text>
          ) : (
            favorites.map((meal) => (
              <Text
                key={meal.id}
                style={{
                  color: 'black',
                  fontSize: 16,
                  marginBottom: 6,
                }}
              >
                • {meal.name}
              </Text>
            ))
          )}
        </View>

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
              color: 'black',
              fontSize: 22,
              fontWeight: '700',
              marginBottom: 12,
            }}
          >
            Add Your Own Meal
          </Text>

          <TextInput
            placeholder="Meal name"
            value={customMealName}
            onChangeText={setCustomMealName}
            style={{
              backgroundColor: '#eeeeee',
              padding: 12,
              borderRadius: 8,
              marginBottom: 12,
            }}
          />

          <TextInput
            placeholder="Meal description"
            value={customMealDescription}
            onChangeText={setCustomMealDescription}
            multiline
            style={{
              backgroundColor: '#eeeeee',
              padding: 12,
              borderRadius: 8,
              marginBottom: 12,
              minHeight: 90,
              textAlignVertical: 'top',
            }}
          />

          <Button title="Add Custom Meal" onPress={addCustomMeal} />

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