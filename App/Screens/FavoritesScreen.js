import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Card from '../Components/Card';

const mapStateToProps = state => {
      return {
            favorites: state.favorites
      }
}

const FavoritesScreen = props => {
      return (
            <View>
                  <FlatList
                        data={props.favorites}
                        renderItem={({item}) => <Card item={item} />}
                        keyExtractor={item => item.id.toString()}
                  />
            </View>
      );
};

export default connect(mapStateToProps) (FavoritesScreen);