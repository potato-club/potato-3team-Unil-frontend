import React, { useState, useEffect } from 'react';
import { customColor } from 'constants/index';
import styled from '@emotion/styled';
import { ItemBox, Pagination } from 'components/index';
import dummy from 'dummy/item';
import { PageTitle } from 'components/index';

export const ProductListPage = (props) => {
  const [productType, setProductType] = useState(props.location.state.type);
  const [posts, setPosts] = useState([]);
  const [productCount, setProductCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  //임시용 데이터
  const postsPerPage = 5;
  const [currentPosts, setCurrentPosts] = useState(
    posts.slice(
      currentPage * postsPerPage - postsPerPage,
      currentPage * postsPerPage,
    ),
  );
  const [sortItem, setSortItem] = useState('popular');

  useEffect(() => {
    setProductType(props.location.state.type);
    setPosts(
      props.location.state.type.length < 5
        ? dummy.filter((data) => data.type === props.location.state.type)
        : dummy,
    );
    setSortItem('popular');
  }, [props]);

  useEffect(() => {
    setProductCount(posts.length);
    setCurrentPage(1);
    setCurrentPosts(posts.slice(0, postsPerPage));
  }, [posts]);

  const onClickNavItem = (title) => {
    setProductType(title);
    setSortItem('popular');
    setPosts(
      title.length < 5 ? dummy.filter((data) => data.type === title) : dummy,
    );
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setCurrentPosts(
      posts.slice(
        pageNumber * postsPerPage - postsPerPage,
        pageNumber * postsPerPage,
      ),
    );
  };

  const sortPrice = (data) => {
    const sortedArr = [...posts];
    sortedArr.sort((a, b) => {
      switch (data) {
        case 'low':
          setSortItem('low');
          return a.price - b.price;
        case 'high':
          setSortItem('high');
          return b.price - a.price;

        case 'popular':
          setSortItem('popular');
          return a.id - b.id;

        case 'id':
          setSortItem('id');
          return a.id - b.id;
        default:
          return a.id - b.id;
      }
    });
    setPosts(sortedArr);
  };

  return (
    <Main>
      <PageTitle pageTitle={[productType]}></PageTitle>

      <HeaderNav>
        <HeaderNavItem
          isActive={productType === 'All Product'}
          onClick={() => onClickNavItem('All Product')}>
          All
        </HeaderNavItem>
        <VerticalLine />
        <HeaderNavItem
          isActive={productType === '위스키'}
          onClick={() => onClickNavItem('위스키')}>
          위스키
        </HeaderNavItem>
        <VerticalLine />
        <HeaderNavItem
          isActive={productType === '리큐르'}
          onClick={() => onClickNavItem('리큐르')}>
          리큐르
        </HeaderNavItem>
        <VerticalLine />
        <HeaderNavItem
          isActive={productType === '럼'}
          onClick={() => onClickNavItem('럼')}>
          럼
        </HeaderNavItem>
        <VerticalLine />
        <HeaderNavItem
          isActive={productType === '브랜디'}
          onClick={() => onClickNavItem('브랜디')}>
          브랜디
        </HeaderNavItem>
        <VerticalLine />
        <HeaderNavItem
          isActive={productType === '보드카'}
          onClick={() => onClickNavItem('보드카')}>
          보드카
        </HeaderNavItem>
      </HeaderNav>
      <Section>
        <Header>
          <TotalNumber>
            전체상품 <ProductCount>{productCount} </ProductCount>개
          </TotalNumber>
          <SortListNav>
            <NavItem
              onClick={() => sortPrice('popular')}
              isActive={sortItem === 'popular'}>
              판매인기순
            </NavItem>
            <NavItem
              onClick={() => sortPrice('low')}
              isActive={sortItem === 'low'}>
              낮은가격순
            </NavItem>
            <NavItem
              onClick={() => sortPrice('high')}
              isActive={sortItem === 'high'}>
              높은가격순
            </NavItem>
            <NavItem
              onClick={() => sortPrice('id')}
              isActive={sortItem === 'id'}>
              등록일순
            </NavItem>
          </SortListNav>
        </Header>
        <Article>
          {currentPosts.map((data) => (
            <ItemBoxWrapper key={data.id}>
              <ItemBox data={data} />
            </ItemBoxWrapper>
          ))}
        </Article>

        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
          currentPage={currentPage}></Pagination>
      </Section>
    </Main>
  );
};
const Main = styled.div`
  width: 90%;
  margin: auto;
  height: 150vh;
`;
const Section = styled.div`
  margin-top: 50px;
`;

const Header = styled.div`
  display: flex;
  margin: 0;
  margin-bottom: 20px;
  padding: 5px 0;
  justify-content: space-between;
  border-bottom: 1px solid ${customColor.sub};
`;

const HeaderNav = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  width: 100%;
  margin: 20px auto;
  padding: 0;
  border: 1px solid ${customColor.sub};
`;
const HeaderNavItem = styled.div`
  margin: 0;
  width: 100%;
  padding: 15px 20px;
  font-size: 20px;
  text-align: center;
  color: ${customColor.fontsub};
  cursor: pointer;
  &:hover {
    background-color: ${customColor.main};
    color: ${customColor.fontWhite};
  }
  ${(props) =>
    props.isActive &&
    `background-color: ${customColor.main}; color: ${customColor.fontWhite};`}
`;

const VerticalLine = styled.div`
  margin: auto;
  height: 45px;
  width: 0px;
  border-left: 0.1px solid ${customColor.sub};
`;

const TotalNumber = styled.p`
  margin: 0;
  padding: 0;
  font-size: 18px;
`;
const ProductCount = styled.span`
  font-weight: bold;
  color: ${customColor.main};
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
  color: ${(props) =>
    props.isActive ? customColor.main : customColor.fontsub};
  cursor: pointer;
  ${(props) => props.isActive && 'font-weight: bold'};
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
