import React from 'react';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ViewProfile() {
  return (
    <LinearGradient
      colors={['#FFFFFF', '#FFFFFF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 60,
      }}
    >
      <Text style={{ color: '#5D00FF', fontSize: 24, marginBottom: 20 }}>
        View Profile
      </Text>

      <View style={{ alignItems: 'center' }}>
        <Text style={{ color: '#5D00FF', fontSize: 18, marginBottom: 10 }}>
          Name: User Name
        </Text>
        <Text style={{ color: '#5D00FF', fontSize: 18, marginBottom: 10 }}>
          Goal: Build Strength
        </Text>
        <Text style={{ color: '#5D00FF', fontSize: 18, marginBottom: 10 }}>
          Workouts Completed: 12
        </Text>
      </View>
    </LinearGradient>
  );
}