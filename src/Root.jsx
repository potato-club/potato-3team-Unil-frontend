import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Header } from './components/index';
import { MainPage, ProductListPage } from './pages/index';

const Root = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact component={MainPage} />
      <Route path="/product/list" component={ProductListPage} />
    </BrowserRouter>
  );
};
export default Root;
