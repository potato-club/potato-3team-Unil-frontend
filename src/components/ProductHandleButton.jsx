import React from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';

export const ProductHandleButton = ({ title }) => {
  return <ButtonWrapper>{title}</ButtonWrapper>;
};

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
