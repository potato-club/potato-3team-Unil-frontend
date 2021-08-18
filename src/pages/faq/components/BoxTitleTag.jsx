import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';

export const BoxTitleTag = ({ title }) => {
  const [tags, setTags] = useState({
    1: null,
    2: null,
    3: '제목',
    4: '작성자',
    5: null,
  });
  useEffect(() => {
    switch (title.toString()) {
      case 'review':
        setTags((tags) => ({
          ...tags,
          1: '평점',
          2: '제품',
          5: '작성날짜',
        }));
        break;
      case 'contactUs':
        setTags((tags) => ({
          ...tags,
          1: '문의상태',
          2: '카테고리',
          5: '문의날짜',
        }));
        break;
      case 'notice':
        setTags((tags) => ({ ...tags, 1: '번호', 2: null, 5: '작성날짜' }));
        break;
      default:
        break;
    }
  }, [title]);
  return (
    <TagWrapper>
      <Tag1>{tags[1]}</Tag1>
      <Tag2 tag={tags}>{tags[2]}</Tag2>
      <Tag3 tag={tags}>{tags[3]}</Tag3>
      <Tag4>{tags[4]}</Tag4>
      <Tag5>{tags[5]}</Tag5>
    </TagWrapper>
  );
};

const TagWrapper = styled.div`
  display: flex;
  align-items: center;
  border-top: 2px solid ${customColor.fontMainColor};
  border-bottom: 1px solid ${customColor.fontMainColor};
  font-weight: bold;
  padding: 7px 0;
`;

const Tag1 = styled.div`
  display: flex;
  justify-content: center;
  width: 15%;
`;

const Tag2 = styled.div`
  display: flex;
  justify-content: center;
  width: 15%;

  ${(tag) => tag.tag[2] === null && 'width: 0'}
`;
const Tag3 = styled.div`
  display: flex;
  justify-content: center;
  width: 40%;

  ${(tag) => tag.tag[2] === null && 'width: 55%'}
`;
const Tag4 = styled.div`
  display: flex;
  justify-content: center;
  width: 15%;
`;
const Tag5 = styled.div`
  display: flex;
  justify-content: center;
  width: 15%;
`;
