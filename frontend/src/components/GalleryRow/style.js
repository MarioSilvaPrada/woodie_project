import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 2rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLink = styled(Link)`
  border-bottom: 2px solid ${({ theme }) => theme.colors.brown};
  font-size: ${({ theme }) => theme.fontSize.M};
`;

export const ProductsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductImg = styled.div`
  width: 22rem;
  height: 30rem;
  background-image: url(${({ mainImg }) => mainImg || ''});
  background-size: cover;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1rem;
`;
