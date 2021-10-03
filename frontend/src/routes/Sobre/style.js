import styled, { keyframes } from 'styled-components';

const opacityAnim = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const StyledImg = styled.div`
  width: 40rem;
  height: 40rem;
  border-radius: 50%;
  background-image: url(${({ src }) => src});
  background-position: center;
  background-size: cover;
  transitions: 0.5s;
  animation: 1s ${opacityAnim} ease-out;

  @media (max-width: 700px) {
    width: 25rem;
    height: 25rem;
  }
`;

export const Paragraph = styled.p`
  line-height: 2rem;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right 5rem;
  max-width: 50%;

  h2 {
    margin-bottom: 1rem;
  }

  div:first-child {
    margin-bottom: 4rem;
  }

  @media (max-width: 1200px) {
    margin-bottom: 4rem;
    margin-right 0;
  }
  @media (max-width: 850px) {
    max-width: 100%;
  }

`;
