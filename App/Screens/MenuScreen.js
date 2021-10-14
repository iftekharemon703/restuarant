import React from 'react';
import { Button, Text, View } from 'react-native';

const MenuScreen = props => {
      return (
            <View>
                  <Text>Menu Screen</Text>
                  <Button title="Go To DishDetail" onPress={() => props.navigation.navigate("Dish Detail")} />
            </View>
      );
};

export default MenuScreen;