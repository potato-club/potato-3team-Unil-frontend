import React from 'react';
import { customColor } from '../constants/index';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

export const PageTitle = ({ pageTitle }) => {
  return <Title>{pageTitle}</Title>;
};
// PageTitle.defaultProps = {
//   pageTitle: 'Popular Item',
// };

const Title = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 60px;
  line-height: 87px;
  padding: 0;
  margin: 0;
  margin-top: 40px;
  margin-bottom: 20px;
`;
