import React from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { Link } from 'react-router-dom';

export const DropDownBox = ({ data }) => {
  const handleDropDownClick = () => {
    /*클릭하면 DropDownMenu의 display가 none이 되게 하는 기능*/
  };
  return (
    <DropDownMenu data={data}>
      {data.map(({ id, name, path }) => (
        <Link
          to={{
            pathname: data.length === 5 ? '/product/list' : `/faq/${path}`,
            state: { type: name },
          }}
          style={styledLink}
          key={id}
          onClick={handleDropDownClick}>
          <Item>{name}</Item>
        </Link>
      ))}
    </DropDownMenu>
  );
};
const DropDownMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  padding: 10px 0;
  width: ${({ data }) => (data.length === 5 ? `140px` : `170px`)};
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${customColor.background};
  border: 1px solid ${customColor.sub};
`;
const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0;
  width: 100%;
  font-size: 20px;
  color: ${customColor.fontmain};
  cursor: pointer;
  &:hover {
    background-color: ${customColor.main};
    color: ${customColor.fontWhite};
  }
`;

const styledLink = {
  textDecoration: 'none',
  width: '100%',
};
