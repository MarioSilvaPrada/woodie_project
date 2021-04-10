import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 0rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.3);
  color: white;
  position: fixed;
  right: 0;
  left: 0;
  z-index: 10;
`;

export const StyledLink = styled(Link)`
  margin-left: 2rem;
`;

export const Logo = styled.img`
  width: 5rem;
`;
