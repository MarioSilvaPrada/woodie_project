import styled from 'styled-components';

export const Layer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.2);
`;

export const Container = styled.div`
  height: 100vh;
  background-image: url(${({ backImage }) => backImage || ''});
  background-size: cover;
  display: flex;
  justify-content: center;
`;

export const MainTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.XXL};
  margin-bottom: 2.4rem;
`;

export const Description = styled.p`
  max-width: 40rem;
  font-size: ${({ theme }) => theme.fontSize.M};
  line-height: 1.6rem;
  text-align: center;
  margin-bottom: 2rem;
`;

export const Wrapper = styled.div`
  color: white;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
