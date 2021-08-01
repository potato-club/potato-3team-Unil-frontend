import React from 'react';
import cover from './mainPageCover.jpg';
import styled from '@emotion/styled';
export const MainPage = () => {
  return (
    <div>
      <MainPageCover src={cover}></MainPageCover>
    </div>
  );
};

const MainPageCover = styled.img`
  width: 100%;
  height: 100%;
`;
