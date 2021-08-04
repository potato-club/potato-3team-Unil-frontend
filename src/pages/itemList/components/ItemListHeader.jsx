import React, { useState } from 'react';
import styled from '@emotion/styled';
import { PageTitle } from '../../../components/index';
import { customColor } from '../../../constants/index';

export const ItemListHeader = () => {
  const [titleName, setTitleName] = useState('Popular Item');
  return (
    <div>
      <PageTitle pageTitle={titleName}></PageTitle>
      <HeaderNav>
        <HeaderItem>위스키</HeaderItem>
        <VerticalLine />
        <HeaderItem>데킬라</HeaderItem>
        <VerticalLine />
        <HeaderItem>리큐르</HeaderItem>
        <VerticalLine />
        <HeaderItem>럼</HeaderItem>
        <VerticalLine />
        <HeaderItem>브랜디</HeaderItem>
        <VerticalLine />
        <HeaderItem>보드카</HeaderItem>
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
const HeaderItem = styled.li`
  margin: 0;
  width: 100%;
  padding: 20px;
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
