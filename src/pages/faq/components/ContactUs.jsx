import React from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { BoxTitleTag } from './index';
export const ContactUs = () => {
  return (
    <Section>
      <BoxTitleTag title={'contactUs'} />
      <Wrapper>
        <State>답변미완료</State>
        <Category>주문/결제</Category>
        <Title>으앗</Title>
        <Writer>아앗</Writer>
        <Date>2020.08.99</Date>
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
const State = styled.div`
  display: flex;
  justify-content: center;
  width: 15%;
`;

const Category = styled.div`
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
