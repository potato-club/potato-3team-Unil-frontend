import React from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { Link } from 'react-router-dom';
import { IoCartOutline, IoPersonCircleOutline } from 'react-icons/io5';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { DropDownBox } from './DropDownBox';
import { useSelector } from 'react-redux';

const DropDownItemData = [
  [
    {
      id: '1',
      name: '위스키',
    },
    {
      id: '2',
      name: '리큐르',
    },
    {
      id: '3',
      name: '럼',
    },
    {
      id: '4',
      name: '브랜디',
    },
    {
      id: '5',
      name: '보드카',
    },
  ],
  [
    { id: '1', name: '상품후기', path: 'review' },
    { id: '2', name: '1:1 문의하기', path: 'contactUs' },
    { id: '3', name: '공지사항', path: 'notice' },
  ],
];

export const Header = () => {
  const cartList = useSelector((state) => state.length);

  return (
    <div>
      <HeaderSection>
        <Link to="/" style={styledLink}>
          <Title>Gentleman</Title>
        </Link>
        <HeaderNav>
          <HeaderNavItem>
            <Link to="/" style={styledLink}>
              HOME
            </Link>
          </HeaderNavItem>
          <HeaderNavItem>
            <Link
              to={{
                pathname: '/product/list',
                state: { type: 'All Product' },
              }}
              style={styledLink}>
              ITEM
              <RiArrowDropDownLine style={Icon} />
            </Link>
            <DropDownWrapper>
              <DropDownBox data={DropDownItemData[0]} />
            </DropDownWrapper>
          </HeaderNavItem>
          <HeaderNavItem>
            <Link
              to={{
                pathname: '/faq/review',
                state: { type: '상품후기' },
              }}
              style={styledLink}>
              COMMUNITY
              <RiArrowDropDownLine style={Icon} />
            </Link>
            <DropDownWrapper>
              <DropDownBox data={DropDownItemData[1]} />
            </DropDownWrapper>
          </HeaderNavItem>
        </HeaderNav>
        <HeaderNav>
          <HeaderIconItem>
            <Link to="/cart">
              <IoCartOutline style={Icon} />
              {cartList > 0 && <CartCount>{cartList}</CartCount>}
            </Link>
          </HeaderIconItem>
          <HeaderIconItem>
            <Link to="/member">
              <IoPersonCircleOutline style={Icon} />
            </Link>
          </HeaderIconItem>
        </HeaderNav>
      </HeaderSection>
      <HeaderBottomLine />
    </div>
  );
};
const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 22px;
  height: 60px;
  margin: 0;
`;

const Title = styled.p`
  font-size: 30px;
  color: ${customColor.main};
  font-weight: bold;
  padding: 0;
  margin: 0;
`;

const HeaderNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0;
  margin: 0;
`;
const DropDownWrapper = styled.div`
  display: none;
`;
const HeaderNavItem = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0 35px;
  &:hover div {
    display: flex;
  }
`;

const HeaderIconItem = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 0;
  padding-left: 25px;
`;

const styledLink = {
  display: 'flex',
  textDecoration: 'none',
  height: '30px',
  lineHeight: '30px',
  color: customColor.fontmain,
  fontSize: '20px',
};

const Icon = {
  width: '30px',
  height: '30px',
  padding: '0',
  margin: '0',
  cursor: 'pointer',
  color: customColor.fontmain,
};

const CartCount = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  bottom: 0;
  right: -10px;
  padding: 5px;
  width: 10px;
  height: 10px;
  color: ${customColor.fontWhite};
  background-color: ${customColor.main};
  border-radius: 50%;
`;

const HeaderBottomLine = styled.div`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid;
  border-bottom-color: ${customColor.sub};
  line-height: 0.1em;
  margin: 0;
`;
