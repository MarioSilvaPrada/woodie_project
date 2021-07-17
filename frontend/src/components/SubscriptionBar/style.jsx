import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  background: ${({ theme }) => theme.colors.secondary};
  max-width: ${({ theme }) => theme.dimensions.maxWidth};
  margin: 0 auto;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-bottom: 5rem;

  h1 {
    color: ${({ theme }) => theme.colors.main};
  }
`;

export const MainWrapper = styled.div`
  width: 30rem;
`;

export const TitleWrapper = styled.div`
  margin-bottom: 2rem;
  color: white;
  text-align: center;

  h1 {
    margin-bottom: 1rem;
  }
`;

export const Form = styled.form``;

export const StyledInput = styled.input`
  padding: 0.7rem 8.5rem 0.7rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: none;
  width: 100%;
`;

export const Submit = styled.input`
  position: absolute;
  right: 0.5%;
  top: 5%;
  height: 90%;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  background: ${({ theme }) => theme.colors.main};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  width: 8rem;
`;

export const InputWrapper = styled.div`
  position: relative;
  margin-top: 1rem;
`;

export const Error = styled.span`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fontSize.S};
  margin-top: 0.5rem;
  margin-left: 1rem;
  display: block;
`;
