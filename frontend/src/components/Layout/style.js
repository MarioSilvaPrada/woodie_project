import styled from 'styled-components';

export const Container = styled.div`
  padding-top: ${({ theme }) => theme.dimensions.navHeight};
  min-height: 90vh;
  max-width: ${({ theme }) => theme.dimensions.maxWidth};
  margin: 0 auto 5rem;
`;

export const StyledTitle = styled.h1`
  margin-bottom: 2rem;
  margin-top: 1rem;
  font-size: ${({ theme }) => theme.fontSize.XL};
  color: ${({ theme }) => theme.colors.secondary};
`;
