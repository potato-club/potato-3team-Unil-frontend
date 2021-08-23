import React from 'react';
import styled from '@emotion/styled';
import { PageTitle } from 'components';
import { AllReview, Notice, ContactUs } from './components/index';

export const FaqPage = (props) => {
  return (
    <Section>
      <PageTitle pageTitle={props.location.state.type} />
      {props.match.params.id === 'review' && <AllReview />}
      {props.match.params.id === 'contactUs' && <ContactUs />}
      {props.match.params.id === 'notice' && <Notice />}
    </Section>
  );
};

const Section = styled.div`
  width: 90%;
  margin: auto;
`;
