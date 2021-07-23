import styled from 'styled-components';

export const Container = styled.div`
  max-width: ${({ theme }) => theme.dimensions.maxWidth};
  margin: 0 auto 5rem;
  padding: 0 2rem;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.XL};
  margin-bottom: 2rem;
`;
