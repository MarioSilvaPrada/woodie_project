import React from 'react';
import * as S from './style';

const Modal = ({ children }) => {
  return (
    <S.ModalBackground>
      <S.ModalWrapper>{children}</S.ModalWrapper>
    </S.ModalBackground>
  );
};

export default Modal;
