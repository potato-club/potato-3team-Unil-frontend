import React from 'react';
import cover from './mainPageCover.png';
import styled from '@emotion/styled';
import { customColor } from '../../constants/index';
import { RecommandItemArticle } from './components/index';

export const MainPage = () => {
  return (
    <Section>
      <MainPageCoverBox>
        <MainPageCover src={cover}></MainPageCover>
      </MainPageCoverBox>
      <RecommandItemArticle title={"Today's Items"}></RecommandItemArticle>
      <RecommandItemArticle title={'Poplur Items'}></RecommandItemArticle>
    </Section>
  );
};

const Section = styled.div`
  background-color: ${customColor.mainPageBackgroundColor};
`;
const MainPageCoverBox = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;
const MainPageCover = styled.img`
  width: 100%;
  height: 100%;
`;
