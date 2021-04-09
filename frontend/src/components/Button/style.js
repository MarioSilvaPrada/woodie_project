import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledContainer = styled(Link)`
  padding: 1rem 1.5rem;
  background: #966c3b;
  border-radius: 0.4rem;
  border: 1px solid white;
  transition: 0.5s;

  &:hover {
    transform: translateY(-0.2rem);
  }
`;
