import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const DishDetailScreen = props => {
      const dish = props.route.params.dish;
      return (
            <View>
                  <Image style={styles.image} source={{uri: dish.image}} />
                  <View>
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

export default DishDetailScreen;