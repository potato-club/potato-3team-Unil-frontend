import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { ProductHandleButton } from 'components/index';
import { ProductDescNav } from './components/index';
import { customColor } from 'constants/index';

export const ProductDetailPage = (data) => {
  const productData = useRef({
    id: data.location.state.id,
    name: data.location.state.name,
    type: data.location.state.type,
    price: data.location.state.price,
    abv: data.location.state.abv,
    volume: data.location.state.volume,
    poo: data.location.state.poo,
    count: 1,
  });
  return (
    <Section>
      <ProductInfoArticle>
        <ProductImageWrapper>
          사진
          <ProductImage />
        </ProductImageWrapper>

        <ProductInfoWrapper>
          <ProductName>
            {productData.current.name} {productData.current.volume}ml
          </ProductName>

          <ProductInfoTable>
            <tbody>
              <ProductInfoRow>
                <ProductInfoTag>도수</ProductInfoTag>
                <ProductInfoData>
                  {productData.current.abv}% Vol.
                </ProductInfoData>
              </ProductInfoRow>
              <ProductInfoRow>
                <ProductInfoTag>종류</ProductInfoTag>
                <ProductInfoData>{productData.current.type}</ProductInfoData>
              </ProductInfoRow>
              <ProductInfoRow>
                <ProductInfoTag>용량</ProductInfoTag>
                <ProductInfoData>
                  {productData.current.volume}ml
                </ProductInfoData>
              </ProductInfoRow>
              <ProductInfoRow>
                <ProductInfoTag>원산지</ProductInfoTag>
                <ProductInfoData>{productData.current.poo}</ProductInfoData>
              </ProductInfoRow>
            </tbody>
          </ProductInfoTable>

          <ProductPriceTable>
            <tbody>
              <ProductPriceRow>
                <ProductPriceTag>판매가</ProductPriceTag>
                <ProductPriceData>
                  {productData.current.price.toLocaleString()}
                </ProductPriceData>
              </ProductPriceRow>
            </tbody>
          </ProductPriceTable>

          <ProductHandleButtonWrapper>
            <ProductHandleButton title={'장바구니 담기'} data={productData} />
            <Air />
            <ProductHandleButton title={'구매하기'} />
          </ProductHandleButtonWrapper>
        </ProductInfoWrapper>
      </ProductInfoArticle>

      <ProductDescArticle>
        <ProductDescNav />

        <ProductDescNav />

        <ProductDescNav />

        <ProductDescNav />
      </ProductDescArticle>
    </Section>
  );
};
const Section = styled.div``;
const ProductInfoArticle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 60px;
  margin-bottom: 100px;
  width: 90%;
  height: 500px;
`;
const ProductImageWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${customColor.main};
`;
const ProductImage = styled.img``;
const ProductInfoWrapper = styled.div`
  width: 50%;
  height: 100%;
  margin-left: 30px;
`;
const ProductName = styled.div`
  height: 10%;
  font-size: 40px;
  border-bottom: 3px solid ${customColor.fontmain};
`;

///////////////////////////////////////////////
const ProductInfoTable = styled.table`
  margin-top: 7px;
  height: 35%;
`;
const ProductInfoRow = styled.tr`
  font-size: 20px;
`;
const ProductInfoTag = styled.td`
  width: 110px;
  color: ${customColor.fontsub};
`;
const ProductInfoData = styled.td``;
///////////////////////////////////////////////
const ProductPriceTable = styled.table`
  display: table;
  height: 35%;
`;
const ProductPriceRow = styled.tr`
  font-size: 30px;
  font-weight: bold;
`;
const ProductPriceTag = styled.td`
  width: 110px;
  color: ${customColor.fontsub};
  vertical-align: bottom;
`;
const ProductPriceData = styled.td`
  color: ${customColor.main};

  vertical-align: bottom;
`;
///////////////////////////////////////////////
const ProductHandleButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 18%;
`;

const ProductDescArticle = styled.div``;

const Air = styled.div`
  width: 5%;
`;
