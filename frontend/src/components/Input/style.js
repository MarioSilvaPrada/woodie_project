import styled, { css } from 'styled-components';

const InputStyle = css`
  border-radius: ${({ theme }) => theme.borderRadius};
  background: white;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSize.M};
  font-family: ${({ theme }) => theme.fontFamily.text};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.M};
  font-family: ${({ theme }) => theme.fontFamily.header};
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 0.4rem;
  font-weight: bold;
`;
export const StyledInput = styled.input`
  ${InputStyle}
`;

export const StyledTextArea = styled.textarea`
  ${InputStyle}
  resize: none;
  height: 6rem;
`;

export const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Required = styled.span`
  color: ${({ theme }) => theme.colors.error};
  margin-left: 0.2rem;
  font-weight: bold;
`;

export const Error = styled.span`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fontSize.S};
  margin-top: 0.2rem;
`;
