import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProductImg = styled.div`
  width: ${({ cardWidth }) => cardWidth || '100%'};
  height: 100%;
  height: 30rem;
  background-image: url(${({ mainImg }) => mainImg || ''});
  background-size: cover;
  background-position: center;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: 0.5s;
`;

export const Product = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    ${ProductImg} {
      transform: scale(1.02);
    }
  }
`;

export const ProductTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.M};
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const StyledPrice = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  background: ${({ theme }) => theme.colors.main};
  padding: 0.5rem 0.7rem;
  border-radius: ${({ theme }) => theme.borderRadius};
`;
