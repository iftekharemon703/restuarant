import React, { useEffect } from 'react';
import { Button, FlatList, Text, View } from 'react-native';
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
                  <FlatList 
                        data={props.dishes}
                        renderItem={
                              ({item}) => <Text>{item.name}</Text>
                        }
                        keyExtractor={item => item.id.toString()}
                  />
            </View>
      );
};

export default connect(mapStateToProps, mapDispatchToProps) (MenuScreen);