import { createStore } from 'redux';
import { cartReducer } from './cart/reducer';

export const store = createStore(cartReducer);

/* 
header컴포넌트의 cart이미지에 state List개수에 맞춰서 숫자표시
 */
