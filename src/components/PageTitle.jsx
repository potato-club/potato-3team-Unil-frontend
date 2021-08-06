import React from 'react';
import styled from '@emotion/styled';

export const PageTitle = ({ pageTitle }) => {
  return <Title>{pageTitle}</Title>;
};

const Title = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 60px;
  line-height: 87px;
  padding: 0;
  margin: 0;
  margin-top: 50px;
  margin-bottom: 50px;
`;
