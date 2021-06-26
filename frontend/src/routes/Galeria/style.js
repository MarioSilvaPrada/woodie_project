import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100%;
  margin: 0 auto 5rem;
  max-width: ${({ theme }) => theme.dimensions.maxWidth};
`;

export const Title = styled.h1`
  margin-bottom: 2rem;
  margin-top: calc(${({ theme }) => theme.dimensions.navHeight} + 2rem);
  font-size: ${({ theme }) => theme.fontSize.XL};
  color: ${({ theme }) => theme.colors.secondary};
`;

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  gap: 2rem;
`;
