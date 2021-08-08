import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
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
  animation: 0.4s ${bounce} linear;

  @media (max-width: 500px) {
    width: 100%;
    margin: 0 1rem;
    padding: 1.2rem;
  }
`;

export const CloseWrapper = styled.div`
  color: ${({ theme }) => theme.colors.error};
  font-size: 2rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: flex-end;

  svg {
    cursor: pointer;
  }
`;
