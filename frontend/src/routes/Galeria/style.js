import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: ${({ theme }) => theme.navHeight};
  padding: ${({ theme }) => theme.siteMargin};
`;

export const Title = styled.h1`
  margin-bottom: 1rem;
`;

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  gap: 2rem;
  place-items: center;
`;
