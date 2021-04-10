import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledContainer = styled(Link)`
  padding: 1rem 1.5rem;
  background: ${({ theme }) => theme.colors.brown};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid white;
  transition: 0.5s;

  &:hover {
    transform: translateY(-0.2rem);
  }
`;
