import React from 'react';
import { Text, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function LogOut() {
  return (
    <LinearGradient
      colors={['#5D00FF', '#1f0055', '#000000']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 60,
      }}
    >
      <Text style={{ color: 'white', fontSize: 24, marginBottom: 20 }}>
        Log Out
      </Text>

      <Text style={{ color: 'white', fontSize: 18, marginBottom: 20 }}>
        Are you sure you want to log out?
      </Text>

      <Button title="Log Out" onPress={() => console.log('User logged out')} />
    </LinearGradient>
  );
}