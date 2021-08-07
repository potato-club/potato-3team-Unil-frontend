import React, { useState } from 'react';
import { ProductListHeader } from './components/index';
import { customColor } from '../../../constants/index';
import styled from '@emotion/styled';
import { ItemBox } from '../../../components/index';
import dummy from '../../../dummy/item';

export const ProductListPage = () => {
  const [productType, setProductType] = useState('All Product');

  const handleProductType = (type) => {
    setProductType(type);
  };

  const typeData =
    productType.length < 5
      ? dummy.filter((data) => data.type === productType)
      : dummy;
  const productCount = typeData.length;

  return (
    <div>
      <ProductListHeader setType={handleProductType}></ProductListHeader>

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
          {typeData.map(({ id, name, price }) => (
            <ItemList key={id}>
              <ItemBox name={name} price={price} />
            </ItemList>
          ))}
        </Article>
      </Section>
    </div>
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

const Article = styled.div`
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  min-width: 774px;
  max-width: 1548px;
  margin: auto;
  padding: auto;
`;

const ItemList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  margin-bottom: 30px;
  padding: 0;
`;
