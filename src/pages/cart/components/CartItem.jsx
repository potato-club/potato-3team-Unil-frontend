import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { ProductHandleButton } from 'components';

export const CartItem = ({ data, index }) => {
  const productData = useRef({
    id: data.id,
    name: data.name,
    type: data.type,
    price: data.price,
    abv: data.abv,
    volume: data.volume,
    poo: data.poo,
  });
  return (
    <ItemWrapper>
      <ItemInfoWrapper>
        <ItemNumber>{index + 1}</ItemNumber>
        <ItemImage>사진</ItemImage>
        <ItemDescWrapper>
          <ItemName>{productData.current.name}</ItemName>
          <ItemDownData>
            <ItemCountWrapper>
              <ItemCountTag>개수</ItemCountTag>
              <ItemCount>1</ItemCount>
            </ItemCountWrapper>
            <ItemPriceWrapper>
              <ItemPriceTag>총 가격</ItemPriceTag>
              <ItemPrice>
                {productData.current.price.toLocaleString()}
              </ItemPrice>
            </ItemPriceWrapper>
          </ItemDownData>
        </ItemDescWrapper>
      </ItemInfoWrapper>
      <ProductHandleButtonWrapper>
        <ProductHandleButton title={'취소하기'} data={productData} />
        <ProductHandleButton title={'구매하기'} />
      </ProductHandleButtonWrapper>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 170px;
  padding: 30px 0;
  border-bottom: 1px solid ${customColor.lightGray};
`;
const ItemInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const ItemNumber = styled.div`
  margin-right: 30px;
  font-size: 25px;
  color: ${customColor.fontsub};
`;
const ItemImage = styled.div`
  width: 200px;
  height: 100%;

  background-color: ${customColor.main};
`;

const ItemDescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  margin-left: 30px;
`;
const ItemName = styled.div`
  display: flex;
  font-size: 30px;
`;

const ItemDownData = styled.div`
  font-weight: bold;
  width: 230px;
`;
const ItemCountWrapper = styled.div`
  display: flex;
  margin-bottom: 15px;
  font-size: 20px;
  width: 100%;
`;

const ItemCountTag = styled.div`
  width: 50%;
  color: ${customColor.fontsub};
`;
const ItemCount = styled.div`
  width: 50%;
  color: ${customColor.main};
`;

const ItemPriceWrapper = styled.div`
  display: flex;
  width: 100%;
  font-size: 25px;
`;
const ItemPriceTag = styled.div`
  width: 50%;
  color: ${customColor.fontsub};
`;
const ItemPrice = styled.div`
  width: 50%;
  color: ${customColor.main};
`;

const ProductHandleButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-around;

  width: 23%;
  height: 100%;
  margin-right: 20px;
`;
