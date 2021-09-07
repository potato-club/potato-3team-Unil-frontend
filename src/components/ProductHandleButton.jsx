import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { addCart, removeCart } from 'redux/cart/action';
import { useDispatch } from 'react-redux';
import Modal from 'react-modal';
Modal.setAppElement('#root');

const ProductHandleButton = ({ title, data }) => {
  const [modalIsOpen, setMadalIsOpen] = useState(false);
  const [madalText, setModalText] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    switch (title) {
      case '장바구니 담기':
        setModalText('장바구니에 담았습니다.');
        break;
      case '구매하기':
      case '바로구매하기':
        setModalText('구매했습니다.');
        break;
      case '전부 구매하기':
        setModalText('전부 구매했습니다.');
        break;
      default:
        setModalText('명령을 이해하지 못했습니다.');
    }
  }, [title]);

  const handleModal = (data) => {
    setMadalIsOpen(data);
  };

  //Modal이 나오고 dispatch하고 싶은데 그게 안되넹 Why?
  const handleButton = () => {
    handleModal(true);
    if (title === '장바구니 담기') {
      dispatch(addCart(data.current));
    } else if (title === '취소하기' || title === '구매하기') {
      dispatch(removeCart(data.current));
    }
  };

  return (
    <Section>
      <ButtonWrapper onClick={handleButton}>
        {title === '바로구매하기' ? '구매하기' : title}
      </ButtonWrapper>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => handleModal(false)}
        style={styledModal}>
        <Text>{madalText}</Text>
        <HandleModalButton onClick={() => handleModal(false)}>
          확인
        </HandleModalButton>
      </Modal>
    </Section>
  );
};

export default ProductHandleButton;
const Section = styled.div`
  width: 100%;
`;
const ButtonWrapper = styled.button`
  width: 100%;
  height: 70px;
  border: 0px;
  font-size: 30px;
  color: ${customColor.fontWhite};
  background-color: ${customColor.main};
  cursor: pointer;
  ${(props) =>
    props.children === '장바구니 담기' &&
    `background-color: ${customColor.sub};`};

  ${(props) =>
    props.children === '취소하기' &&
    `background-color: ${customColor.cancel};`};
`;

const styledModal = {
  content: {
    display: 'flex',
    flexDirection: 'column',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    padding: '40px 80px ',
    alignItems: 'center',
    borderRadius: '5px',
    backgroundColor: customColor.fontWhite,
  },
};

const Text = styled.div`
  margin-bottom: 20px;
  font-size: 20px;
`;

const HandleModalButton = styled.button`
  width: 200px;
  height: 50px;
  margin-top: 10px;
  font-size: 20px;
  background-color: ${customColor.main};
  color: ${customColor.fontWhite};
  border: none;
  border-radius: 5px;
`;
