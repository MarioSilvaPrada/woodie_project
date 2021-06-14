import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: ${({ theme }) => theme.siteMargin};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;

export const StyledLink = styled(Link)`
  border-bottom: 2px solid ${({ theme }) => theme.colors.brown};
  font-size: ${({ theme }) => theme.fontSize.M};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkBrown};
`;

export const ProductsWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow-x: scroll;
  padding: 1rem;

  a:not(:last-child) {
    margin-right: 2rem;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.darkBrown};
`;
