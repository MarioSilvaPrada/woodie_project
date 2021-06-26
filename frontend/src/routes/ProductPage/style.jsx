import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const opacityAnim = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ImagesContainer = styled.div`
  display: flex;
  height: 45rem;
  width: 50rem;
`;

export const MainImage = styled.div`
  background-image: url(${({ backImage }) => backImage});
  background-size: cover;
  background-position: center;
  width: 50%;
  margin-right: 0.5rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  animation: 1s ${opacityAnim} ease-out;
`;
export const StyledImg = styled.div`
  background-image: url(${({ backImage }) => backImage});
  background-size: cover;
  background-position: center;
  height: 100%;
  margin-bottom: 0.5rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  animation: 1s ${opacityAnim} ease-out;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SecondaryImages = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const TextWrapper = styled.div`
  margin-right: 4rem;
  max-width: 30rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

export const MainTitle = styled.h1`
  margin-bottom: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.XL};
`;

export const Price = styled.h2`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 0.7rem;
`;

export const SideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const StyledLink = styled.button`
  border-radius: 50%;
  padding: 0.3rem;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSize.L};
  background: none;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    transform: translateX(-5px);
  }
`;
