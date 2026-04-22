import React from 'react';
import { Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen({ navigation }: any) {
  const menuItems = [
    { title: 'Team 10 Programs', screen: 'Programs' },
    { title: 'Team 10 Recipes', screen: 'Recipes' },
    { title: 'View Profile', screen: 'Profile' },
    { title: 'Log In', screen: 'LogIn' },
    { title: 'Sign Up', screen: 'SignUp' },
    { title: 'Log Out', screen: 'LogOut' },
  ];

  return (
    <LinearGradient
      colors={['#5D00FF', '#1f0055', '#000000']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
    <Text style={{ color: 'white', fontSize: 30, fontWeight: 700, textAlign:'center', marginTop: 30 }}>
        Welcome back Jake Paulers!!!
    </Text>
    </LinearGradient>
  );
}