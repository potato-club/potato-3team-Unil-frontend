import React from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';

export const DropDownBox = ({ dataNumber }) => {
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
  return (
    <DropDownList dataNumber={dataNumber}>
      {DropDownItemData[dataNumber].map(({ id, name }) => (
        <Item key={id}>{name}</Item>
      ))}
    </DropDownList>
  );
};
const DropDownList = styled.div`
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
  cursor: pointer;
  &:hover {
    background-color: ${customColor.mainColor};
    color: ${customColor.fontWhiteColor};
  }
`;
