import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import dummy from 'dummy/item';
import { ItemBox } from 'components/index';
import { MoreButton } from './index';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { customColor } from 'constants/index';

export const RecommandItemArticle = ({ title }) => {
  const [posts] = useState(dummy.slice(0, 12));
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;
  const [currentPosts, setCurrentPosts] = useState(
    posts.slice(
      currentPage * postsPerPage - postsPerPage,
      currentPage * postsPerPage,
    ),
  );

  useEffect(
    () =>
      setCurrentPosts(
        posts.slice(
          currentPage * postsPerPage - postsPerPage,
          currentPage * postsPerPage,
        ),
      ),
    [currentPage, posts],
  );

  const pageNative = (data) => {
    data === 'next'
      ? currentPage !== Math.ceil(posts.length / postsPerPage) &&
        setCurrentPage((currentPage) => currentPage + 1)
      : currentPage !== 1 && setCurrentPage((currentPage) => currentPage - 1);
  };

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
        <FiChevronLeft style={NextButton} onClick={() => pageNative('prev')} />
        <ItemList>
          {currentPosts.map((data) => (
            <ItemBoxWrapper key={data.id}>
              <ItemBox data={data} />
            </ItemBoxWrapper>
          ))}
        </ItemList>
        <FiChevronRight style={NextButton} onClick={() => pageNative('next')} />
      </ItemListWrapper>
      <PageWrapper>
        {[...Array(Math.ceil(posts.length / postsPerPage))].map((e, i) => (
          <Page key={i} isActive={i + 1 === currentPage} />
        ))}
      </PageWrapper>
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
  color: customColor.sub,
};

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Page = styled.div`
  width: 10px;
  height: 10px;
  margin: 0 3px;
  background-color: ${(props) =>
    props.isActive ? customColor.main : customColor.lightGray};
  border-radius: 50%;
`;
