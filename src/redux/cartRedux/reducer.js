import { ADD_CART, REMOVE_CART } from './type';

const list = [];
let id = 0;

export const cartReducer = (state = list, action) => {
  switch (action.type) {
    case ADD_CART:
      action.payload = { ...action.payload, id };
      id++;
      return [...state, action.payload];
    case REMOVE_CART:
      return state.filter((data) => data.id !== action.payload);
    default:
      return state;
  }
};
