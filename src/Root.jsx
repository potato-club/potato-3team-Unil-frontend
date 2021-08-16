import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Header } from 'components/index';
import {
  MainPage,
  ProductListPage,
  ProductDetailPage,
  CartPage,
  FaqPage,
} from 'pages/index';
import ScrollToTop from 'ScrollToTop';
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
      </ScrollToTop>
    </BrowserRouter>
  );
};
export default Root;
