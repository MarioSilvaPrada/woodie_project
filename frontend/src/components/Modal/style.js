import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

export const ModalBackground = styled.div`
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalWrapper = styled.div`
  padding: 2rem;
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius};
  animation: 0.5s ${bounce} linear;
`;

export const CloseWrapper = styled.div`
  color: ${({ theme }) => theme.colors.error};
  font-size: 3rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
`;
