import { ADD_CART, REMOVE_CART } from './type';

const list = [];

let id = 0;
export const cartReducer = (state = list, action) => {
  console.log(state);
  switch (action.type) {
    case ADD_CART:
      action.payload = { ...action.payload, id };
      id++;
      return [...state, action.payload];
    case REMOVE_CART:
      return [...state, state.push(action.payload)];
    default:
      return state;
  }
};
