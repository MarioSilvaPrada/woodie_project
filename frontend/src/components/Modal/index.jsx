import React from 'react';
import * as S from './style';
import { FiX } from 'react-icons/fi';

const Modal = ({ children, isVisible, onClose }) => {
  return (
    isVisible && (
      <S.ModalBackground>
        <S.ModalWrapper isVisible={isVisible}>
          <>
            <S.CloseWrapper>
              <FiX onClick={onClose} />
            </S.CloseWrapper>
            {children}
          </>
        </S.ModalWrapper>
      </S.ModalBackground>
    )
  );
};

export default Modal;
