import styled, { keyframes, css } from 'styled-components';

const slideInRight = keyframes`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

const slideOutRight = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;

export const Layer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.2);
`;

export const Container = styled.div`
  height: calc(100vh - ${({ theme }) => theme.dimensions.navHeight});
  background-image: url(${({ backImage }) => backImage || ''});
  background-size: cover;
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: ${({ theme }) => theme.dimensions.navHeight};
  margin-bottom: 5rem;
`;

export const MainTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.XXL};
  margin-bottom: 2.4rem;
  text-align: center;
`;

export const Description = styled.p`
  max-width: 40rem;
  font-size: ${({ theme }) => theme.fontSize.L};
  line-height: 2.6rem;
  text-align: center;
  margin-bottom: 2rem;
`;

export const Wrapper = styled.div`
  color: white;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
`;

export const SubWrapper = styled.div`
  position: absolute;
  right: 0.8rem;
  bottom: 0.8rem;
  width: 35rem;
  transform: translate3d(105%, 0, 0);
  ${({ isVisible }) =>
    isVisible !== null &&
    css`
      animation: ${isVisible ? slideInRight : slideOutRight} 0.5s linear
        forwards;
    `}
`;

export const CloseBtn = styled.div`
  color: ${({ theme }) => theme.colors.error};
  font-size: 2.5rem;
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;

  @media (max-width: 750px) {
    display: none;
  }
`;
export const ExtraPadding = styled.div`
  padding: 0 2rem;
`;
