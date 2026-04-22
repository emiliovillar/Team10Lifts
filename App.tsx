import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Team10Programs from './screens/Team10Programs';
import Team10Recipes from './screens/Team10Recipes';
import ViewProfile from './screens/ViewProfile';
import LogOut from './screens/LogOut';
import LogIn from './screens/LogIn';
import SignUp from './screens/SignUp';
import HomeScreen from './screens/HomeScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#000000',
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          drawerStyle: {
            backgroundColor: '#111111',
          },
          drawerActiveTintColor: '#5D00FF',
          drawerInactiveTintColor: '#ffffff',
          drawerLabelStyle: {
            fontSize: 16,
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Drawer.Screen
          name="Programs"
          component={Team10Programs}
          options={{ title: 'Programs' }}
        />
        <Drawer.Screen
          name="Recipes"
          component={Team10Recipes}
          options={{ title: 'Recipes' }}
        />
        <Drawer.Screen
          name="Profile"
          component={ViewProfile}
          options={{ title: 'Profile' }}
        />
        <Drawer.Screen
          name="Log In"
          component={LogIn}
        />
        <Drawer.Screen
          name="Sign Up"
          component={SignUp}
        />
        <Drawer.Screen
          name="Log Out"
          component={LogOut}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}