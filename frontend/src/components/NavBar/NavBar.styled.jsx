import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 0rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.brown};
  color: ${({ theme }) => theme.colors.darkBrown};
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  height: ${({ theme }) => theme.navHeight};
  box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.7);
`;

export const StyledLink = styled(Link)`
  margin-left: 2rem;
`;

export const Logo = styled.img`
  width: 5rem;
`;
