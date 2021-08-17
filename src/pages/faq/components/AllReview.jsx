import React from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { BoxTitleTag } from './index';

export const AllReview = () => {
  return (
    <Section>
      <BoxTitleTag title={'review'} />
      <Wrapper>
        <Grade>⭐️⭐️⭐️⭐️⭐️</Grade>
        <Product>요술봉</Product>
        <Title>마법 쌉가능</Title>
        <Writer>괴도키드</Writer>
        <Date>2020.03.32</Date>
      </Wrapper>
    </Section>
  );
};

const Section = styled.div``;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${customColor.subColor};
  padding: 7px 0;
  height: 30px;
`;
const Grade = styled.div`
  display: flex;
  justify-content: center;
  width: 15%;
`;

const Product = styled.div`
  display: flex;
  justify-content: center;
  width: 15%;
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  width: 40%;
`;
const Writer = styled.div`
  display: flex;
  justify-content: center;
  width: 15%;
`;
const Date = styled.div`
  display: flex;
  justify-content: center;
  width: 15%;
`;
