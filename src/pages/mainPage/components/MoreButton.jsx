import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { customColor } from 'constants/index';
export const MoreButton = () => {
  return (
    <MoreWrapper>
      <Link to="/product/list" style={styledLink}>
        More
      </Link>
    </MoreWrapper>
  );
};

const MoreWrapper = styled.button`
  position: relative;

  width: 100px;
  height: 35px;
  border: 0;
  padding: 0;
  margin: 0;
  background-color: ${customColor.mainColor};
`;

const styledLink = {
  display: 'block',
  textDecoration: 'none',
  color: customColor.fontWhiteColor,
  fontSize: '14px',
  lineHeight: '35px',
};
