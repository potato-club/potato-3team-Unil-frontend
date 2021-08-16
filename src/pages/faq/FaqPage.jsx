import React from 'react';
import styled from '@emotion/styled';
import { PageTitle } from 'components';
import { AllReview, Notice, ContactUs } from './components/index';
export const FaqPage = (props) => {
  console.log(props);

  return (
    <div>
      <PageTitle pageTitle={props.location.state.type}></PageTitle>
      {props.match.params.id === 'review' && <AllReview></AllReview>}
      {props.match.params.id === 'contactUs' && <ContactUs></ContactUs>}
      {props.match.params.id === 'notice' && <Notice></Notice>}
    </div>
  );
};
