import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 90vh;
  padding-top: ${({ theme }) => theme.dimensions.navHeight};
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const StyledImg = styled.div`
  width: 40rem;
  height: 40rem;
  border-radius: 50%;
  background-image: url(${({ src }) => src});
  background-position: center;
  background-size: cover;

  @media (max-width: 700px) {
    width: 25rem;
    height: 25rem;
  }
`;

export const Paragraph = styled.p`
  margin-right 5rem;
  max-width: 50%;

  @media (max-width: 1200px) {
    margin-bottom: 4rem;
    margin-right 0;
  }

  @media (max-width: 850px) {
    max-width: 100%;
  }
`;
