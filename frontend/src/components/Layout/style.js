import styled from 'styled-components';

export const Container = styled.div`
  padding-top: ${({ theme }) => theme.dimensions.navHeight};
  min-height: 90vh;
  max-width: ${({ theme }) => theme.dimensions.maxWidth};
  margin: 3rem auto 5rem;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export const StyledTitle = styled.h1`
  margin-bottom: 2rem;
  margin-top: 1rem;
  font-size: ${({ theme }) => theme.fontSize.XL};
  color: ${({ theme }) => theme.colors.secondary};

  @media (max-width: 1200px) {
    text-align: center;
  }
`;
