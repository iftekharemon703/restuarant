import React from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

const HomeScreen = () => {
      return (
            <SafeAreaView>
                  <View style={styles.view}>
                        <Text>Home Screen</Text>
                  </View>
            </SafeAreaView>
      );
};

const styles = StyleSheet.create({
      view: {
            paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
      }
})

export default HomeScreen;