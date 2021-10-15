import React from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const MenuItem = props => {
      return (
            <TouchableHighlight>
                  <View style={styles.container}>
                        {props.item.image && <Image source={{uri: props.item.image}} style={styles.image} />}
                        <View style={styles.details}>
                              <Text style={styles.name}>{props.item.name}</Text>
                              <Text numberOfLines={3} style={styles.description}>{props.item.description}</Text>
                        </View>
                  </View>
            </TouchableHighlight>
      );
};

const styles = StyleSheet.create({
      container: {
            alignItems: "center",
            flexDirection: "row",
            padding: 15
      },
      details: {
            flex: 1,
            marginLeft: 15,
            justifyContent: 'center'
      },
      image: {
            width: 80,
            height: 80,
            borderRadius: 10
      },
      name: {
            fontWeight: 500
      },
      description: {
            color: "#2d3436"
      }
})

export default MenuItem;