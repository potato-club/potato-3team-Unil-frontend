import React from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';

export const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); ++i) {
    pageNumber.push(i);
  }
  return (
    <PageList>
      {pageNumber.map((number) => (
        <Page
          key={number}
          onClick={() => paginate(number)}
          isActive={currentPage === number}>
          {number}
        </Page>
      ))}
    </PageList>
  );
};
const PageList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
const Page = styled.div`
  padding: 3px 10px;
  margin: 0 5px;
  font-size: 20px;
  color: ${customColor.subColor};
  background-color: ${customColor.fontWhiteColor};
  border: 1px solid ${customColor.mainColor};
  cursor: pointer;
  ${(props) =>
    props.isActive &&
    `background-color: ${customColor.mainColor}; 
  color: ${customColor.fontWhiteColor};`};
`;
