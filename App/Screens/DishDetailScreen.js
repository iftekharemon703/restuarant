import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { add } from 'react-native-reanimated';
import { connect } from 'react-redux';
import Icon from '../Components/Icon';
import { addFavorites } from '../redux/ActionCreators';

const mapStateToProps = state => {
      return {
            favorites: state.favorites,
      }
}

const mapDispatchToProps = dispatch => {
      return {
            addFavorites: dish => dispatch(addFavorites(dish))
      }
}

const DishDetailScreen = props => {
      const dish = props.route.params.dish;

       const isFavorite = props.favorites.some(item => item.id === dish.id);
      const markFavorites = dish => {
            if(isFavorite){
                  alert("dish already added favorite list")
            }else{
                   props.addFavorites(dish);
            }
      }

      let iconName = "ios-heart-outline";
      if(isFavorite){
            iconName = "ios-heart"
      }

      return (
            <View>
                  <Image style={styles.image} source={{uri: dish.image}} />
                  <View>
                        <Icon name={iconName} color="#192a56" size={39} iconStyle={{padding: 10}} action={() => markFavorites(dish)} />
                        <Text style={styles.description}>{dish.description}</Text>
                  </View>
            </View>
      );
};

const styles = StyleSheet.create({
      image: {
            height: 300,
            width: "100%"
      },
      description: {
            paddingTop: 10
      }
})

export default connect(mapStateToProps, mapDispatchToProps) (DishDetailScreen);