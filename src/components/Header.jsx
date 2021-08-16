import React from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { Link } from 'react-router-dom';
import { IoCartOutline, IoPersonCircleOutline } from 'react-icons/io5';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { DropDownBox } from './components/Header/DropDownBox';

export const Header = () => {
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
              <DropDownBox dataNumber={'0'} />
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
              <DropDownBox dataNumber={'1'} />
            </DropDownWrapper>
          </HeaderNavItem>
        </HeaderNav>
        <HeaderNav>
          <HeaderIconItem>
            <Link to="/cart">
              <IoCartOutline style={Icon} />
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
  color: ${customColor.mainColor};
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
  color: customColor.fontMainColor,
  fontSize: '20px',
};

const Icon = {
  width: '30px',
  height: '30px',
  padding: '0',
  margin: '0',
  cursor: 'pointer',
  color: customColor.fontMainColor,
};

const HeaderBottomLine = styled.div`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid;
  border-bottom-color: ${customColor.subColor};
  line-height: 0.1em;
  margin: 0;
`;
