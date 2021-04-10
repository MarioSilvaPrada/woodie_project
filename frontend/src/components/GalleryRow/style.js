import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 2rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.1rem;
  padding: 1rem;
`;

export const StyledLink = styled(Link)`
  border-bottom: 2px solid ${({ theme }) => theme.colors.brown};
  font-size: ${({ theme }) => theme.fontSize.M};
  font-weight: bold;
`;

export const ProductsWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow-x: scroll;
`;

export const ProductImg = styled.div`
  width: 22rem;
  height: 30rem;
  background-image: url(${({ mainImg }) => mainImg || ''});
  background-size: cover;
  background-position: center;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: 0.5s;
  margin-bottom: 1.1rem;
`;

export const Product = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  &:hover {
    ${ProductImg} {
      transform: scale(1.02);
    }
  }
`;

export const ProductTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.L};
`;
