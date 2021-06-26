import React from 'react';
import * as S from './style';
import { IoIosClose } from 'react-icons/io';

const Modal = ({ children, isVisible, onClose }) => {
  return (
    isVisible && (
      <S.ModalBackground>
        <S.ModalWrapper isVisible={isVisible}>
          <>
            <S.CloseWrapper>
              <IoIosClose onClick={onClose} />
            </S.CloseWrapper>
            {children}
          </>
        </S.ModalWrapper>
      </S.ModalBackground>
    )
  );
};

export default Modal;
