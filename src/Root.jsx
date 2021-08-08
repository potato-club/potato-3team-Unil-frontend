import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Header } from 'components/index';
import { MainPage, ProductListPage, ProductDetailPage } from 'pages/index';

const Root = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact component={MainPage} />
      <Route path="/product/list" component={ProductListPage} />
      <Route path="/product/detail" component={ProductDetailPage} />
    </BrowserRouter>
  );
};
export default Root;
