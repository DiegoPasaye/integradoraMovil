import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../components/LoginScreen';
import ZonasScreen from '../components/ZonasScreen';
import AdministrarZona from '../components/AdministrarZona';

const StackNavigation = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <StackNavigation.Navigator initialRouteName='LoginScreen'>
        <StackNavigation.Screen 
          name="LoginScreen" 
          component={LoginScreen} 
          options={{ title:"Login", headerShown:false }}
        />
        <StackNavigation.Screen 
          name="ZonasScreen" 
          component={ZonasScreen} 
          options={{ title:"Zonas", headerShown:false }}
        />
        <StackNavigation.Screen 
          name="AdministrarZona" 
          component={AdministrarZona} 
          options={{ title:"Administrar zona", headerShown:false }}
        />
      </StackNavigation.Navigator>
    </NavigationContainer>
  )
}

