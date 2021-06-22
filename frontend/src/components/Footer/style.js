import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.brown};
  padding: ${({ theme }) => theme.dimensions.siteMargin};
  display: flex;
  justify-content: center;
`;

export const StyledImg = styled.img`
  width: 8rem;
`;

export const StyledText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.S};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
