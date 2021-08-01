import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Header } from './components/index';
import { MainPage, ItemListPage } from './pages/index';

const Root = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <div style={{ margin: '0 10%' }}>
        <Route path="/" exact component={MainPage} />
        <Route path="/itemList" component={ItemListPage} />
      </div>
    </BrowserRouter>
  );
};
export default Root;
