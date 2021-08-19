import React from 'react';
import styled from '@emotion/styled';
import { PageTitle } from 'components/index';
export const memberPage = () => {
  return (
    <Main>
      <PageTitle pageTitle={'LOGIN'}></PageTitle>
    </Main>
  );
};

const Main = styled.div`
  width: 90%;
  margin: auto;
`;
