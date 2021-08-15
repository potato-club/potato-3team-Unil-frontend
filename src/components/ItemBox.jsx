import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { customColor } from 'constants/index';
export const ItemBox = ({ data }) => {
  return (
    <Link to={{ pathname: '/product/detail', state: data }} style={linkStyle}>
      <Section>
        <ItemImage>사진</ItemImage>
        <ItemName>
          {data.name} {data.volume}ml
        </ItemName>
        <ItemPrice>{data.price}원</ItemPrice>
      </Section>
    </Link>
  );
};
const linkStyle = {
  textDecoration: 'none',
  color: customColor.fontMainColor,
};

const Section = styled.div`
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 240px;
  height: 400px;
  border: 1px solid ${customColor.subColor};
  background-color: ${customColor.backgroundColor};
`;
const ItemImage = styled.div`
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
