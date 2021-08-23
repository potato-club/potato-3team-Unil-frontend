import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Header } from 'components/index';
import ScrollToTop from 'components/ScrollToTop';
import {
  MainPage,
  ProductListPage,
  ProductDetailPage,
  CartPage,
  FaqPage,
  memberPage,
} from 'pages/index';
const Root = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Header />
        <Route path="/" exact component={MainPage} />
        <Route path="/product/list" component={ProductListPage} />
        <Route path="/product/detail" component={ProductDetailPage} />
        <Route path="/cart" component={CartPage} />

        <Route path="/faq/:id" component={FaqPage} />
        <Route path="/member" component={memberPage} />
      </ScrollToTop>
    </BrowserRouter>
  );
};
export default Root;
