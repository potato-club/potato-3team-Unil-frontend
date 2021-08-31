import { createStore } from 'redux';
import { cartReducer } from './cartRedux/reducer';

export const store = createStore(cartReducer);

/* 
CartPage에서 map함수로 state List를 출력
CartItem에서 상세 데이터들을 출력

ProductDetail의 장바구니담기버튼(ProductHandleButton)은 ADD_CART 연결
CartItem의 취소하기버튼은 REMOVE_CART 연결

header컴포넌트의 cart이미지에 state List개수에 맞춰서 숫자표시
*/
