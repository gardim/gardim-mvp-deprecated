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
          options={{ title: 'Tela Principal' }}
        />

        <Stack.Screen
          name="InsertCode"
          component={InsertCodeScreen}
          options={{ title: 'Insira o Código' }}
        />
        <Stack.Screen
          name="PlantType"
          component={PlantTypeScreen}
          options={{ title: 'Tipo da Planta' }}
        />
        <Stack.Screen
          name="PlantName"
          component={PlantNameScreen}
          options={{ title: 'Nome da Planta' }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: 'Detalhes' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
