import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
      dishes: [],
      favorites: []
}

export const reducer = (state = INITIAL_STATE, action) => {
      switch(action.type){
            case actionTypes.LOAD_DISHES:
                  return {
                        ...state,
                        dishes: action.payload
                  }
            case actionTypes.ADD_FAVORITES:
                  return {
                        ...state,
                        favorites: state.favorites.concat(action.payload),
                  }
            case actionTypes.REMOVE_FAVORITES: 
                  return {
                        ...state,
                        favorites: state.favorites.filter(item => item.id !== action.payload.id)
                  }
            default:
                  return state;
      }
}