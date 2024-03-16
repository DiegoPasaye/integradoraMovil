import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer} from '@react-navigation/native'
import {Icon} from 'react-native-elements'
import React from 'react'
import LoginScreen from '../components/LoginScreen'
import ZonasScreen from '../components/ZonasScreen'
import AdministrarZona from '../components/AdministrarZona'

const TabNavigation = createBottomTabNavigator();



export default function AppNavigator() {

  return (
    <NavigationContainer>
            <TabNavigation.Navigator initialRouteName='LoginScreen'>
                <TabNavigation.Screen name="LoginScreen" component={LoginScreen} options={{title:"Login", headerShown:false}}/>
                <TabNavigation.Screen name="ZonasScreen" component={ZonasScreen} options={{title:"Zonas", headerShown:false}}/>
                <TabNavigation.Screen name="AdministrarZona" component={AdministrarZona} options={{title:"Administrar zona", headerShown:false}}/>
            </TabNavigation.Navigator>
    </NavigationContainer>
  )


  
}