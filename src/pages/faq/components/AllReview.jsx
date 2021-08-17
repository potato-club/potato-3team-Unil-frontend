import React from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';

export const AllReview = () => {
  return (
    <Section>
      <TagWrapper>
        <GradeTag>평점</GradeTag>
        <ProductTag>제품</ProductTag>
        <TitleTag>제목</TitleTag>
        <WriterTag>작성자</WriterTag>
        <DateTag>작성날짜</DateTag>
      </TagWrapper>
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Section>
  );
};

const Section = styled.div``;

const TagWrapper = styled.div`
  display: flex;
  align-items: center;
  border-top: 2px solid ${customColor.fontMainColor};
  border-bottom: 1px solid ${customColor.fontMainColor};
  font-weight: bold;
  padding: 7px 0;
`;

const GradeTag = styled.div`
  display: flex;
  justify-content: center;
  width: 15%;
`;

const ProductTag = styled.div`
  display: flex;
  justify-content: center;
  width: 15%;
`;
const TitleTag = styled.div`
  display: flex;
  justify-content: center;
  width: 40%;
`;
const WriterTag = styled.div`
  display: flex;
  justify-content: center;
  width: 15%;
`;
const DateTag = styled.div`
  display: flex;
  justify-content: center;
  width: 15%;
`;
