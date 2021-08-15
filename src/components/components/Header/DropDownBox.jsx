import React from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { Link } from 'react-router-dom';

const DropDownItemData = [
  [
    {
      id: '1',
      name: '위스키',
    },
    {
      id: '2',
      name: '리큐르',
    },
    {
      id: '3',
      name: '럼',
    },
    {
      id: '4',
      name: '브랜디',
    },
    {
      id: '5',
      name: '보드카',
    },
  ],
  [
    { id: '1', name: '상품후기' },
    { id: '2', name: '1:1 문의하기' },
    { id: '3', name: '공지사항' },
  ],
];

export const DropDownBox = ({ dataNumber }) => {
  const handleDropDownClick = () => {
    /*클릭하면 DropDownMenu의 display가 none이 되게 하는 기능*/
  };
  return (
    <DropDownMenu dataNumber={dataNumber}>
      {DropDownItemData[dataNumber].map(({ id, name }) => (
        <Link
          to={{
            pathname: dataNumber === '0' ? '/product/list' : '/faq',
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
  width: ${({ dataNumber }) => (dataNumber === '0' ? `140px` : `170px`)};
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${customColor.backgroundColor};
  border: 1px solid ${customColor.subColor};
`;
const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0;
  width: 100%;
  font-size: 20px;
  color: ${customColor.fontMainColor};
  cursor: pointer;
  &:hover {
    background-color: ${customColor.mainColor};
    color: ${customColor.fontWhiteColor};
  }
`;

const styledLink = {
  textDecoration: 'none',
  width: '100%',
};
