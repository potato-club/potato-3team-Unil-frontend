import React from 'react';
import { customColor } from 'constants/index';
import styled from '@emotion/styled';
export const ProductDescNav = () => {
  return (
    <Article>
      <NavItem>제품정보</NavItem>
      <VerticalLine />
      <NavItem>배송안내</NavItem>
      <VerticalLine />
      <NavItem>상품후기</NavItem>
      <VerticalLine />
      <NavItem>상품문의</NavItem>
    </Article>
  );
};
const Article = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  width: 90%;
  margin: 20px auto;
  padding: 0;
  border: 1px solid ${customColor.subColor};
`;
const NavItem = styled.div`
  margin: 0;
  width: 100%;
  padding: 15px 20px;
  font-size: 20px;
  text-align: center;
  color: ${customColor.fontSubColor};
  cursor: pointer;
`;

const VerticalLine = styled.div`
  margin: auto;
  height: 45px;
  width: 0px;
  border-left: 0.1px solid ${customColor.subColor};
`;
