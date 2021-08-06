import React from 'react';
import styled from '@emotion/styled';
import dummy from '../../../dummy/item';
import { ItemBox } from '../../../components/index';
import { MoreButton } from './index';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
export const RecommandItemArticle = ({ title }) => {
  //mainPage에 최대 4개까지 출력할 수 있게 임시로 만든 기능
  const maxItem = dummy.filter((data) => {
    return data.id <= 4;
  });

  return (
    <Article>
      <Title>{title}</Title>
      <ItemListBox>
        {title === 'Popular Items' && <MoreButton />}
        <ItemListNav>
          <FiChevronLeft style={NextButton} />
          <ItemList>
            {maxItem.map(({ id, name, price }) => (
              <ItemBox key={id} name={name} price={price}></ItemBox>
            ))}
          </ItemList>
          <FiChevronRight style={NextButton} />
        </ItemListNav>
      </ItemListBox>
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
const ItemListBox = styled.div`
  position: relative;
`;
const ItemListNav = styled.div`
  display: flex;
  margin: 0;

  justify-content: center;
  align-items: center;
`;

const ItemList = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

const NextButton = {
  width: '40px',
  height: '40px',
  cursor: 'pointer',
};
