import React, { useState } from 'react';
import styled from '@emotion/styled';
import dummy from '../../../dummy/item';
import { customColor } from '../../../constants/index';
export const ItemBox = ({ kinds }) => {
  const [itemKinds, setItemKinds] = useState(kinds);
  return (
    <Section>
      <ItemIamge>사진</ItemIamge>
      <ItemName>앱솔루트</ItemName>
      <ItemPrice>135,000</ItemPrice>
    </Section>
  );
};

const Section = styled.div`
  justify-content: center;
  align-items: center;
  margin: 0 6px;
  padding: 0;
  width: 200px;
  height: 300px;

  background-color: ${customColor.backgroundColor};
`;
const ItemIamge = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 70%;
`;

const ItemName = styled.p`
  text-align: center;
  margin: 0;
  padding: 0;
`;

const ItemPrice = styled.p`
  text-align: center;
  margin: 0;
  padding: 0;
`;
