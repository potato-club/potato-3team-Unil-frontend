import React from 'react';
import styled from '@emotion/styled';
import { PageTitle } from 'components';
import { CartItem } from './components/index';
import { customColor } from 'constants/index';
import { ProductHandleButton } from 'components';
import { CgMathEqual, CgMathPlus } from 'react-icons/cg';
import { connect } from 'react-redux';

const CartPage = () => {
  return (
    <Section>
      <PageTitle pageTitle={'장바구니'} />
      <CartListWrapper>
        <CartItem />
        <CartItem />
      </CartListWrapper>
      <CalCulateSection>
        <CalCulateArticle>
          <ProductAllPriceWrapper>
            <ProductAllPriceTag>총 2개의 상품 금액</ProductAllPriceTag>
            <ProductAllPrice>30,000</ProductAllPrice>
          </ProductAllPriceWrapper>
          <CgMathPlus style={calculateIconStyle} />
          <DeliveryFeeWrapper>
            <DeliveryFeeTag>배송비</DeliveryFeeTag>
            <DeliveryFee>4,500</DeliveryFee>
          </DeliveryFeeWrapper>
          <CgMathEqual style={calculateIconStyle} />
          <ResultWrapper>
            <ResultTag>합계</ResultTag>
            <Result>34,500</Result>
          </ResultWrapper>
        </CalCulateArticle>
        <ProductHandleButtonWrapper>
          <ProductHandleButton title={'전부 구매하기'} />
        </ProductHandleButtonWrapper>
      </CalCulateSection>
    </Section>
  );
};

// const mapStateToProps = (state) => {
//   return { list: state.list };
// };

export default connect()(CartPage);

const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 150vh;
  margin: auto;
`;
const CartListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  border-top: 1px solid ${customColor.fontmain};
  width: 100%;
`;

const CalCulateSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  border: 1px solid ${customColor.sub};
`;

const CalCulateArticle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 40px;
  font-size: 20px;
`;
const calculateIconStyle = {
  width: '30px',
  height: '30px',
  padding: '0',
  margin: '0',
  cursor: 'pointer',
  color: customColor.fontmain,
};

const ProductAllPriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 30px;
`;
const ProductAllPriceTag = styled.div`
  margin-bottom: 10px;
`;
const ProductAllPrice = styled.div`
  font-weight: bold;
  font-size: 25px;
  color: ${customColor.main};
`;

const DeliveryFeeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 30px;
`;
const DeliveryFeeTag = styled.div`
  margin-bottom: 10px;
`;
const DeliveryFee = styled.div`
  font-weight: bold;
  font-size: 25px;
  color: ${customColor.main};
`;

const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 30px;
`;
const ResultTag = styled.div`
  margin-bottom: 10px;
`;
const Result = styled.div`
  font-weight: bold;
  font-size: 25px;
  color: ${customColor.main};
`;

const ProductHandleButtonWrapper = styled.div`
  width: 23%;
  margin-right: 20px;
`;
