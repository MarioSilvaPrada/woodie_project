import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
`;

export const Animated = styled.div`
  animation: ${spin} 3s linear infinite;
`;

export const Image = styled.img`
  width: 8rem;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: #efe4d0;
`;
