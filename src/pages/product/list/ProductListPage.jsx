import React, { useState, useEffect } from 'react';
import { customColor } from 'constants/index';
import styled from '@emotion/styled';
import { ItemBox } from 'components/index';
import dummy from 'dummy/item';

import { PageTitle } from 'components/index';

export const ProductListPage = (props) => {
  const [productType, setProductType] = useState(props.location.state.type);
  const typeData =
    productType.length < 5
      ? dummy.filter((data) => data.type === productType)
      : dummy;
  const productCount = typeData.length;
  useEffect(() => setProductType(props.location.state.type), [props]);

  return (
    <div>
      <PageTitle pageTitle={productType}></PageTitle>

      <HeaderNav>
        <HeaderNavItem
          isActive={productType === 'All Product'}
          onClick={() => setProductType('All Product')}>
          All
        </HeaderNavItem>
        <VerticalLine />
        <HeaderNavItem
          isActive={productType === '위스키'}
          onClick={() => setProductType('위스키')}>
          위스키
        </HeaderNavItem>
        <VerticalLine />
        <HeaderNavItem
          isActive={productType === '리큐르'}
          onClick={() => setProductType('리큐르')}>
          리큐르
        </HeaderNavItem>
        <VerticalLine />
        <HeaderNavItem
          isActive={productType === '럼'}
          onClick={() => setProductType('럼')}>
          럼
        </HeaderNavItem>
        <VerticalLine />
        <HeaderNavItem
          isActive={productType === '브랜디'}
          onClick={() => setProductType('브랜디')}>
          브랜디
        </HeaderNavItem>
        <VerticalLine />
        <HeaderNavItem
          isActive={productType === '보드카'}
          onClick={() => setProductType('보드카')}>
          보드카
        </HeaderNavItem>
      </HeaderNav>
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
            <ItemBoxWrapper key={data.id}>
              <ItemBox data={data} />
            </ItemBoxWrapper>
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

const HeaderNav = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  width: 90%;
  margin: 20px auto;
  padding: 0;
  border: 1px solid ${customColor.subColor};
`;
const HeaderNavItem = styled.div`
  margin: 0;
  width: 100%;
  padding: 15px 20px;
  font-size: 20px;
  text-align: center;
  color: ${customColor.fontSubColor};
  cursor: pointer;
  &:hover {
    background-color: ${customColor.mainColor};
    color: ${customColor.fontWhiteColor};
  }
  ${(props) =>
    props.isActive &&
    `background-color: ${customColor.mainColor}; color: ${customColor.fontWhiteColor};`}
`;

const VerticalLine = styled.div`
  margin: auto;
  height: 45px;
  width: 0px;
  border-left: 0.1px solid ${customColor.subColor};
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

const ItemBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 2px;
  margin-bottom: 30px;
  padding: 0;
`;
