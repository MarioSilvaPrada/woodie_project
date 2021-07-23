import styled from 'styled-components';

const marginSide = '5rem';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  flex-direction: ${({ isOdd }) => (isOdd ? 'row-reverse' : 'row')};

  @media (max-width: 1050px) {
    flex-direction: column;
    margin-bottom: 5rem;
  }
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

  @media (max-width: 1050px) {
    margin: 0;
    margin-bottom: 3rem;
    text-align: center;
  }
`;

export const RowTitle = styled.h1`
  margin-bottom: 2rem;
`;
