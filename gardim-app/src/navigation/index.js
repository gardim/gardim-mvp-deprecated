import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/Home';
import DetailsScreen from '../screens/Details';
import InsertCodeScreen from '../screens/InsertCode';
import PlantTypeScreen from '../screens/PlantType';
import PlantNameScreen from '../screens/PlantName';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />

        <Stack.Screen
          name="InsertCode"
          component={InsertCodeScreen}
          options={{ title: 'Insert Code' }}
        />
        <Stack.Screen
          name="PlantType"
          component={PlantTypeScreen}
          options={{ title: 'Plant Type' }}
        />
        <Stack.Screen
          name="PlantName"
          component={PlantNameScreen}
          options={{ title: 'Plant Name' }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
