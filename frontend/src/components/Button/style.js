import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledContainer = styled(Link)`
  padding: 0.8rem 1.5rem;
  background: ${({ theme }) => theme.colors.main};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  transition: 0.5s;
  color: ${({ theme }) => theme.colors.secondary};

  &:hover {
    transform: translateY(-0.2rem);
  }
`;

export const StyledBtn = styled.button`
  padding: 0.8rem 1.5rem;
  background: ${({ theme }) => theme.colors.main};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  transition: 0.5s;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSize.M};
  font-family: ${({ theme }) => theme.fontFamily.text};
  cursor: pointer;
  width: 100%;

  &:hover {
    transform: translateY(-0.2rem);
  }
`;
