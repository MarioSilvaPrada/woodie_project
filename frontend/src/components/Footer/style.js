import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.main};
  padding: ${({ theme }) => theme.dimensions.siteMargin};
  display: flex;
  justify-content: center;
`;

export const StyledImg = styled.img`
  width: 8rem;
  margin-bottom: 2rem;
`;

export const StyledText = styled.p`
  font-size: 0.9rem;
  font-style: italic;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
