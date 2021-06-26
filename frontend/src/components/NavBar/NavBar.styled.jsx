import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 0rem 2rem;
  background: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.secondary};
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  height: ${({ theme }) => theme.dimensions.navHeight};
  box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.7);
`;

export const ItemsWrapper = styled.div`
  max-width: ${({ theme }) => theme.dimensions.maxWidth};
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
`

export const StyledLink = styled(Link)`
  margin-left: 2rem;
`;

export const Logo = styled.img`
  width: 5rem;
`;
