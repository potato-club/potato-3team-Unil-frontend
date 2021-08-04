import React, { useState } from 'react';
import { ProductListHeader, ProductListArticle } from './components/index';

export const ProductListPage = () => {
  const [productType, setProductType] = useState('All Product');

  const handleProductType = (type) => {
    setProductType(type);
  };
  return (
    <div>
      <ProductListHeader setType={handleProductType}></ProductListHeader>
      <ProductListArticle type={productType}></ProductListArticle>
    </div>
  );
};
