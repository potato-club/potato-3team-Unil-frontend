import React, { useState } from 'react';
import { customColor } from '../../../../constants/index';
import styled from '@emotion/styled';
import { ItemBox } from '../../../../components/index';
import dummy from '../../../../dummy/item';
export const ProductListArticle = ({ type }) => {
  const typeData =
    type.length < 5 ? dummy.filter((data) => data.type === type) : dummy;
  const productCount = typeData.length;
  return (
    <Section>
      <Header>
        <TotalNumber>
          전체상품 <ProductCount>{productCount} </ProductCount>개
        </TotalNumber>
        <SortListNav>
          <NavItem>판매인기순</NavItem>
          <NavItem>낮은가격순</NavItem>
          <NavItem>높은가격순</NavItem>
          <NavItem>등록일순</NavItem>
        </SortListNav>
      </Header>

      <Article>
        {typeData.map((data) => (
          <ItemList key={data.id}>
            <ItemBox name={data.name} price={data.price}></ItemBox>
          </ItemList>
        ))}
      </Article>
    </Section>
  );
};

const Section = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 50px;
`;

const Header = styled.div`
  display: flex;
  margin: 0;
  margin-bottom: 20px;
  padding: 10px 0;

  justify-content: space-between;
  border-bottom: 1px solid ${customColor.subColor};
`;
const TotalNumber = styled.p`
  margin: 0;
  padding: 0;
  font-size: 18px;
`;
const ProductCount = styled.span`
  font-weight: bold;
  color: ${customColor.mainColor};
`;

const SortListNav = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;
const NavItem = styled.li`
  margin: 0;
  padding: 0;
  margin-left: 40px;
  color: ${customColor.fontSubColor};
  cursor: pointer;
`;

const Article = styled.ul`
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin: auto;
  padding: 0;

  list-style: none;
`;

const ItemList = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  margin-bottom: 30px;
  padding: 0;
`;
