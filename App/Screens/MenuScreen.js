import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { getDishes } from '../redux/ActionCreators';

const mapStateToProps = state => {
      return {
            dishes: state.dishes,

      }
}

const mapDispatchToProps = dishes => {
      return {
            getDishes: () => dishes(getDishes())
      }
}

const MenuScreen = props => {
      useEffect(() => {
            props.getDishes();
      }, [])
      
      return (
            <View>
                  <Text>Menu Screen</Text>
                  <Button title="Go To DishDetail" onPress={() => props.navigation.navigate("Dish Detail")} />
            </View>
      );
};

export default connect(mapStateToProps, mapDispatchToProps) (MenuScreen);