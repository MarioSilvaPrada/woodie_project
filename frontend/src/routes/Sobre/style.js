import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 90vh;
  padding-top: ${({ theme }) => theme.dimensions.navHeight};
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.secondary};
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledImg = styled.div`
  width: 40rem;
  height: 40rem;
  border-radius: 50%;
  background-image: url(${({ src }) => src});
  background-position: center;
`;

export const Paragraph = styled.p`
  margin-right 5rem;
  max-width: 50%;
`;
