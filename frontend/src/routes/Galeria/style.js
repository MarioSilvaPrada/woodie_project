import styled from 'styled-components';

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  gap: 2rem;
`;

export const CollectionsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  @media (max-width: 1200px) {
    justify-content: center;
  }
`;

export const Collection = styled.div`
  background: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.main : 'white'};
  cursor: pointer;
  padding: 0.5rem 0.8rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  text-transform: uppercase;
`;
