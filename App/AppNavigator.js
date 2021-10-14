import React from 'react';
import HomeScreen from './Screens/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MenuScreen from './Screens/MenuScreen';
import { createStackNavigator } from '@react-navigation/stack';
import DishDetailScreen from './Screens/DishDetailScreen';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

const MenuStack = () => {
      return (
            <Stack.Navigator>
                  <Stack.Screen name="Menu" component={MenuScreen}/>
                  <Stack.Screen name="Dish Detail" component={DishDetailScreen} />
            </Stack.Navigator>
      )
}

const AppNavigator = () => {
      return (
            <Drawer.Navigator initialRouteName="Home">
                  <Drawer.Screen name="Home" component={HomeScreen}/>
                  <Drawer.Screen name="Menu" component={MenuStack}/>
            </Drawer.Navigator>
      );
};

export default AppNavigator;