import React, { useState } from 'react';
import styled from '@emotion/styled';
import { PageTitle } from '../../../../components/index';
import { customColor } from '../../../../constants/index';

export const ProductListHeader = ({ setType }) => {
  const [titleName, setTitleName] = useState('All Product');

  const onClickNav = (title) => {
    setTitleName(title);
    setType(title);
  };
  return (
    <div>
      <PageTitle pageTitle={titleName}></PageTitle>
      <HeaderNav>
        <NavItem onClick={() => onClickNav('All Product')}>All</NavItem>
        <VerticalLine />
        <NavItem onClick={() => onClickNav('위스키')}>위스키</NavItem>
        <VerticalLine />
        <NavItem onClick={() => onClickNav('리큐르')}>리큐르</NavItem>
        <VerticalLine />
        <NavItem onClick={() => onClickNav('럼')}>럼</NavItem>
        <VerticalLine />
        <NavItem onClick={() => onClickNav('브랜디')}>브랜디</NavItem>
        <VerticalLine />
        <NavItem onClick={() => onClickNav('보드카')}>보드카</NavItem>
      </HeaderNav>
    </div>
  );
};

const HeaderNav = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  list-style: none;
  width: 90%;
  margin: 20px auto;
  padding: 0;
  border: 1px solid ${customColor.subColor};
`;
const NavItem = styled.li`
  margin: 0;
  width: 100%;
  padding: 15px 20px;
  font-size: 20px;
  text-align: center;
  line-height: 100%;
  color: ${customColor.fontSubColor};
  cursor: pointer;
  &:hover {
    background-color: ${customColor.mainColor};
    color: ${customColor.fontWhiteColor};
  }
`;

const VerticalLine = styled.div`
  margin: auto;
  height: 45px;
  width: 0px;
  border-left: 0.1px solid ${customColor.subColor};
`;
