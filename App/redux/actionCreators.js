import axios, { Axios } from 'axios';
import * as actionTypes from './actionTypes';

export const loadDishes = dishes => {
      return {
            type: actionTypes.LOAD_DISHES,
            payload: dishes
      }
}

export const getDishes = () => dispatch => {
      axios.get("https://restuarant-9a92c-default-rtdb.firebaseio.com/dishes.json")
      .then(res => dispatch(loadDishes(res.data)))
      .catch(error => console.log(error))
}

export const addFavorites = dish => {
      return {
            type: actionTypes.ADD_FAVORITES,
            payload: dish
      }
}

export const removeFavorite = dish => {
      return {
            type: actionTypes.REMOVE_FAVORITES,
            payload: dish,
      }
}