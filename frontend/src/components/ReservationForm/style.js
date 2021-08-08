import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 100%;
`;

export const InputsWrapper = styled.div`
  margin-bottom: 2rem;
`;

export const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  div:first-child {
    margin-right: 1rem;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    div:first-child {
      margin-right: 0;
    }
  }
`;

export const SubmitBtn = styled.button`
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  background: ${({ theme }) => theme.colors.main};
  padding: 1rem 0.5rem;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: ${({ theme }) => theme.fontSize.M};
  font-family: ${({ theme }) => theme.fontFamily.text};
  cursor: pointer;
`;
