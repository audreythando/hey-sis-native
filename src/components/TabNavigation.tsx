import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import HomeScreen from '../../screens/HomeScreen';
import DMScreen from '../../screens/DMScreen';
import MentionScreen from '../../screens/MentionScreen';

const Tab= createMaterialBottomTabNavigator();

const TabNavigation = () => {
  return (
 <Tab.Navigator>
    <Tab.Screen name='home' component={HomeScreen}/>
    
    <Tab.Screen name='DMScreen' component={DMScreen}/>
    <Tab.Screen name='MentionScreen' component={MentionScreen}/>

 </Tab.Navigator>
  )
}

export default TabNavigation