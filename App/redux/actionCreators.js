import axios, { Axios } from 'axios';
import * as actionTypes from './actionTypes';

export const loadDishes = dishes => {
      return {
            type: actionTypes.LOAD_DISHES,
            payload: dishes
      }
}

export const getDishes = () => dispatch => {
      
}