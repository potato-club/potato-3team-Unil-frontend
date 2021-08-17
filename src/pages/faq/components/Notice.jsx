import React from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { BoxTitleTag } from './index';
export const Notice = () => {
  return (
    <Section>
      <BoxTitleTag title={'notice'} />
      <Wrapper>
        <Number>1</Number>
        <Title>지금부터 이 사이트를 폭파시키겠다</Title>
        <Writer>테러범</Writer>
        <Date>9999.09.09</Date>
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
const Number = styled.div`
  display: flex;
  justify-content: center;
  width: 15%;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  width: 55%;
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
