import styled from 'styled-components';

const marginSide = '5rem';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  flex-direction: ${({ isOdd }) => (isOdd ? 'row-reverse' : 'row')};
`;

export const StyledImage = styled.img`
  width: 40rem;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${({ isOdd }) =>
    isOdd ? `0 0 0 ${marginSide}` : `0 ${marginSide} 0 0`};
`;

export const RowTitle = styled.h1`
  margin-bottom: 2rem;
`;
