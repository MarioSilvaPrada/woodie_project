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
  justify-content: center;

  @media (max-width: 1050px) {
    flex-direction: column-reverse;
  }
`;

export const ImagesContainer = styled.div`
  display: flex;
  height: 45rem;

  @media (max-width: 1050px) {
    width: 100%;
    height: 32rem;
    margin-bottom: 3rem;
    margin-top: 1rem;
  }
`;

export const MainImage = styled.a`
  cursor: pointer;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  width: 50%;
  margin-right: 0.5rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  animation: 1s ${opacityAnim} ease-out;
`;
export const StyledImg = styled.a`
  cursor: pointer;
  background-image: url(${({ src }) => src});
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
  max-width: 35rem;
  margin-top: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 1050px) {
    margin-right: 0;
    margin-top: 0;
    max-width: 100%;
  }
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

  @media (max-width: 1050px) {
    display: none;
  }
`;

export const MobileLink = styled.button`
  border-radius: 50%;
  padding: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.L};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  background: none;
  display: none;
  margin-bottom: 1.5rem;

  @media (max-width: 1050px) {
    display: block;
  }
`;

export const SecWrapper = styled.div`
  width: 100%;
`;

export const DimensionsWrapper = styled.div`
  margin-top: 1.2rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const DimTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.M};
  margin-bottom: 0.5rem;
`;

export const Dim = styled.p`
  font-size: ${({ theme }) => theme.fontSize.S};
  margin-bottom: 0.2rem;
`;

export const ButtonWrapper = styled.div`
  @media (max-width: 1050px) {
    width: 100%;
  }
`;

export const CollectionText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.S};
  margin-bottom: 1.2rem;
  padding: 0.5rem 0.8rem;
  background: ${({ theme }) => theme.colors.main};
  font-style: italic;
  display: inline-block;
  border-radius: ${({ theme }) => theme.borderRadius};
`;
