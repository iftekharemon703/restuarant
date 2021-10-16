import React from 'react';
import HomeScreen from './Screens/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MenuScreen from './Screens/MenuScreen';
import { createStackNavigator } from '@react-navigation/stack';
import DishDetailScreen from './Screens/DishDetailScreen';
import Icon from './Components/Icon';
import { useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

const MenuStack = () => {
      const navigation = useNavigation();

      return (
            <Stack.Navigator
                  screenOptions={{
                        headerRight: () => (<Icon 
                              action={() => navigation.toggleDrawer()}
                              name="ios-menu"
                              color= "#fff"
                              size={24}
                              iconStyle={{
                                    paddingRight: 15
                              }}
                        />) ,
                        headerStyle: {
                              backgroundColor: '#192a56'
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                              fontWeight: 'bold'
                        }
                  }}
            >
                  <Stack.Screen name="Menu" component={MenuScreen}/>
                  <Stack.Screen name="Dish Detail" component={DishDetailScreen} options={({route}) => ({title: route.params.dish.name})} />
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