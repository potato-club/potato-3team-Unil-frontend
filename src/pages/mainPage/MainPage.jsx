import React from 'react';
import cover from '../../assets/image/mainPageCover.png';
import styled from '@emotion/styled';
import { customColor } from '../../constants/index';
import { RecommandItemArticle } from './components/index';

export const MainPage = () => {
  return (
    <Section>
      <MainPageCover src={cover} />
      <RecommandItemArticle title={"Today's Items"}></RecommandItemArticle>
      <RecommandItemArticle title={'Popular Items'}></RecommandItemArticle>
    </Section>
  );
};

const Section = styled.div`
  background-color: ${customColor.backgroundColor};
  height: 290vh;
`;
const MainPageCover = styled.img`
  width: 100%;
  height: 92vh;
`;
