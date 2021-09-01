import React from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { connect } from 'react-redux';
import { addCart, removeCart } from 'redux/cartRedux/action';
const ProductHandleButton = ({ title, addCart, removeCart, data }) => {
  const HandleButton = (title) => {
    if (title === '장바구니 담기') {
      addCart(data.current);
    } else if (title === '취소하기') {
      removeCart(data.current.id);
    }
  };
  return (
    <ButtonWrapper onClick={() => HandleButton(title)}>{title}</ButtonWrapper>
  );
};

const mapDisPatchToProps = (dispatch) => {
  return {
    addCart: (data) => dispatch(addCart(data)),
    removeCart: (data) => dispatch(removeCart(data)),
  };
};

export default connect(
  (state) => ({}),
  mapDisPatchToProps,
)(ProductHandleButton);

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
