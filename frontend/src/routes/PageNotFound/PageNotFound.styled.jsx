import styled from 'styled-components';

export const Wrapper = styled.div`
  height: calc(100vh - ${({ theme }) => theme.dimensions.navHeight});
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.div`
  color: red;
`;

export const Logo = styled.img`
  width: 5rem;
`;

export const Styled404 = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledText = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.XXL};
`;
