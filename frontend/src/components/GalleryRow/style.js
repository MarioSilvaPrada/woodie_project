import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: ${({ theme }) => theme.dimensions.maxWidth};
  margin: 0 auto 5rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLink = styled(Link)`
  border-bottom: 2px solid ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.fontSize.M};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const ProductsWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow-x: scroll;
  padding: 1rem;
  margin: 0 -1rem;

  a:not(:last-child) {
    margin-right: 2rem;
  }
`;

export const ScrollBar = styled.div``;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.XL};
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.secondary};
`;
