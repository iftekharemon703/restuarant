import React, { useEffect } from 'react';
import { Button, FlatList, Text, View } from 'react-native';
import { connect } from 'react-redux';
import MenuItem from '../Components/MenuItem';
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
                  <FlatList 
                        data={props.dishes}
                        renderItem={
                              ({item}) => (<MenuItem item={item} selectDish={() => props.navigation.navigate("Dish Detail", {dish: item})} />)
                        }
                        keyExtractor={item => item.id.toString()}
                  />
            </View>
      );
};

export default connect(mapStateToProps, mapDispatchToProps) (MenuScreen);