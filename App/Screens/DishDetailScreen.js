import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const DishDetailScreen = props => {
      const dish = props.route.params.dish;
      return (
            <View>
                  <Image style={styles.image} source={{uri: dish.image}} />
                  <view>
                        <Text style={styles.name}>{dish.name}</Text>
                  </view>
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
      name: {
            fontSize: 24,
            fontWeight: 700
      },
      description: {
            paddingTop: 10
      }
})

export default DishDetailScreen;