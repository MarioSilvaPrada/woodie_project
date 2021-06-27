import styled from 'styled-components';

export const Container = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSize.M};
  text-align: center;
`;

export const Heading = styled.h1`
  color: #449187;
  font-size: ${({ theme }) => theme.fontSize.L};
  margin-bottom: 2rem;
  text-align: center;
`;

export const Icon = styled.div`
  font-size: 5rem;
  color: #449187;
  margin-bottom: 1rem;
`;
