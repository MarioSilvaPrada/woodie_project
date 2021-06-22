import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.dimensions.maxWidth}
`;

export const Title = styled.h1`
  margin-bottom: 1rem;
  margin-top: calc(${({ theme }) => theme.dimensions.navHeight} + 2rem);
`;

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  gap: 2rem;
`;
