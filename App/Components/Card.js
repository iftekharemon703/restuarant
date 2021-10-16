import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Card = props => {
      return (
            <View style={styles.card}>
                  <Image style={styles.image} source={{uri: props.item.image}} />
                  <View style={styles.details}>
                        <Text style={styles.title}>{props.item.name}</Text>
                  </View>
            </View>
      );
};

const styles = StyleSheet.create({
      card: {
            borderRadius: 15,
            backgroundColor: "white",
            overflow: "hidden",
            margin: 20,
            elevation: 5
      },
      details: {
            padding: 25
      },
      image: {
            width: "100%",
            height: 150
      },
      title: {
            marginBottom: 7,
            fontSize: 20,
            fontWeight: 500,
            textAlign: "center"
      }
})
export default Card;