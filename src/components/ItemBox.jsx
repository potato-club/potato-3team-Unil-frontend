import React from 'react';
import styled from '@emotion/styled';
import { customColor } from '../constants/index';
export const ItemBox = ({ name, price }) => {
  return (
    <Section>
      <ItemIamge>사진</ItemIamge>
      <ItemName>{name}</ItemName>
      <ItemPrice>{price}원</ItemPrice>
    </Section>
  );
};

const Section = styled.div`
  justify-content: center;
  align-items: center;
  margin: 0 8px;
  padding: 0;
  width: 240px;
  height: 400px;
  border: 1px solid ${customColor.subColor};
  background-color: ${customColor.backgroundColor};
`;
const ItemIamge = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 75%;
  background-color: ${customColor.mainColor};
`;

const ItemName = styled.p`
  text-align: left;
  margin: 0;
  height: 12%;
  padding: 0 12px;
  padding-top: 10px;
`;

const ItemPrice = styled.p`
  text-align: left;
  margin: 0;
  padding: 0 12px;
  font-weight: bold;
  height: 10%;
  line-height: 40px;
`;
