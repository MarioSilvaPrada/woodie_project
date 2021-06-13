import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledContainer = styled(Link)`
  padding: 1rem 1.5rem;
  background: ${({ theme }) => theme.colors.brown};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.darkBrown};
  transition: 0.5s;
  color: ${({ theme }) => theme.colors.darkBrown};

  &:hover {
    transform: translateY(-0.2rem);
  }
`;
