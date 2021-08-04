import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { customColor } from '../../../constants/index';
export const MoreBox = () => {
  return (
    <MoreButton>
      <Link to="/itemList" style={styledLink}>
        More
      </Link>
    </MoreButton>
  );
};

const MoreButton = styled.button`
  position: absolute;
  top: -20%;
  right: 0%;
  width: 100px;
  height: 40px;
  border: 0;
  padding: 0;
  margin: 0;
  background-color: ${customColor.mainColor};
`;

const styledLink = {
  display: 'block',
  textDecoration: 'none',
  color: customColor.fontWhiteColor,
  fontSize: '15px',
  fontSize: '18px',
  lineHeight: '38px',
};
