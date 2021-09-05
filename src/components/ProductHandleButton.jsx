import React from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { addCart, removeCart } from 'redux/cart/action';
import { useDispatch } from 'react-redux';

const ProductHandleButton = ({ title, data }) => {
  const dispatch = useDispatch();

  const HandleButton = () => {
    if (title === '장바구니 담기') {
      dispatch(addCart(data.current));
    } else if (title === '취소하기') {
      dispatch(removeCart(data.current.id));
    }
  };
  return <ButtonWrapper onClick={HandleButton}>{title}</ButtonWrapper>;
};

export default ProductHandleButton;

const ButtonWrapper = styled.button`
  width: 100%;
  height: 70px;
  border: 0px;
  font-size: 30px;
  color: ${customColor.fontWhite};
  background-color: ${customColor.main};
  cursor: pointer;
  ${(props) =>
    props.children === '장바구니 담기' &&
    `background-color: ${customColor.sub};`};

  ${(props) =>
    props.children === '취소하기' &&
    `background-color: ${customColor.cancel};`};
`;
