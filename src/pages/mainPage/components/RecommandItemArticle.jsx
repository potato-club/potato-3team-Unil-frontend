import React from 'react';
import styled from '@emotion/styled';
import dummy from 'dummy/item';
import { ItemBox } from 'components/index';
import { MoreButton } from './index';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export const RecommandItemArticle = ({ title }) => {
  //mainPage에 최대 4개까지 출력할 수 있게 임시로 만든 기능
  const maxItem = dummy.filter((data) => {
    return data.id <= 4;
  });

  return (
    <Article>
      <TitleWrapper>
        <AirBox />
        <Title>{title}</Title>
        {title === 'Popular Items' ? (
          <MoreButtonWrapper>
            <MoreButton />
          </MoreButtonWrapper>
        ) : (
          <AirBox />
        )}
      </TitleWrapper>
      <ItemListWrapper>
        <FiChevronLeft style={NextButton} />
        <ItemList>
          {maxItem.map((data) => (
            <ItemBoxWrapper key={data.id}>
              <ItemBox data={data} />
            </ItemBoxWrapper>
          ))}
        </ItemList>
        <FiChevronRight style={NextButton} />
      </ItemListWrapper>
    </Article>
  );
};

const Article = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 70px auto;
`;

const Title = styled.p`
  margin: 0;
  padding: 20px 0;
  font-size: 60px;
  text-align: center;
  line-height: 180%;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1015px;
`;
const AirBox = styled.div`
  width: 100px;
  height: 100px;
`;
const MoreButtonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  height: 120px;
`;

const ItemListWrapper = styled.div`
  display: flex;
  margin: 0;

  justify-content: center;
  align-items: center;
`;

const ItemList = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
`;
const ItemBoxWrapper = styled.div`
  margin: 0 8px;
`;
const NextButton = {
  width: '40px',
  height: '40px',
  cursor: 'pointer',
};
