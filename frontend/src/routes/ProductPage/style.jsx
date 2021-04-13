import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
`;
export const StyledImg = styled.div`
  background-image: url(${({ backImage }) => backImage});
  background-size: cover;
  background-position: center;
  height: 100%;
  margin-bottom: 0.5rem;
  border-radius: ${({ theme }) => theme.borderRadius};

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
  margin-bottom: 3rem;
`;

export const MainTitle = styled.h1`
  margin-bottom: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.XL};
`;

export const Price = styled.h1`
  color: ${({ theme }) => theme.colors.brown};
  margin-bottom: 1rem;
`;

export const SideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
