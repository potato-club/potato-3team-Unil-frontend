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
      <MoreWrapper>문의하기</MoreWrapper>
    </Section>
  );
};

const Section = styled.div``;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${customColor.sub};
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

const MoreWrapper = styled.button`
  display: block;
  position: relative;
  justify-content: flex-end;
  width: 100px;
  height: 35px;
  border: 0;
  padding: 0;
  margin: 10px auto;
  margin-right: 0;
  color: ${customColor.fontWhite};
  background-color: ${customColor.main};
`;

// const styledLink = {
//   display: 'block',
//   textDecoration: 'none',
//   color: customColor.fontWhite,
//   fontSize: '14px',
//   lineHeight: '35px',
// };
