import { ADD_CART, REMOVE_CART } from './type';

const list = [];

export const cartReducer = (state = list, action) => {
  switch (action.type) {
    case ADD_CART:
      if (state.find((data) => data.id === action.payload.id)) {
        state.find((data) => data.id === action.payload.id).count++;
        return state;
      }
      return [...state, action.payload];
    case REMOVE_CART:
      return state.filter((data) => data.id !== action.payload.id);
    default:
      return state;
  }
};
