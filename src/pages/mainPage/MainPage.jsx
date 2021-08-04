import React from 'react';
import cover from './mainPageCover.png';
import styled from '@emotion/styled';
import { customColor } from '../../constants/index';
import { RecommandItemArticle } from './components/index';

export const MainPage = () => {
  return (
    <Section>
      <MainPageCover src={cover}></MainPageCover>
      <RecommandItemArticle title={"Today's Items"}></RecommandItemArticle>
      <RecommandItemArticle title={'Poplur Items'}></RecommandItemArticle>
    </Section>
  );
};

const Section = styled.div`
  background-color: ${customColor.backgroundColor};
  height: 250vh;
`;
const MainPageCover = styled.img`
  width: 100%;
`;
