import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export const StyledPrice = styled.p`
  color: white;
  background: ${({ theme }) => theme.colors.brown};
  padding: 0.5rem 0.7rem;
  border-radius: ${({ theme }) => theme.borderRadius};
`;
