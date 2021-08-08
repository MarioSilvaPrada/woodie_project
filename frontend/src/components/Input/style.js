import styled, { css } from 'styled-components';

const InputStyle = css`
  border-radius: ${({ theme }) => theme.borderRadius};
  background: white;
  padding: 0.6rem 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSize.M};
  font-family: ${({ theme }) => theme.fontFamily.text};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  position: relative;
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.M};
  font-family: ${({ theme }) => theme.fontFamily.header};
  color: ${({ theme }) => theme.colors.secondary};
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
  margin-bottom: 0.4rem;
`;

export const Required = styled.span`
  color: ${({ theme }) => theme.colors.error};
  margin-left: 0.2rem;
  font-weight: bold;
`;

export const Error = styled.span`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fontSize.S};
  position: absolute;
  bottom: -1.4rem;
`;

export const Info = styled.p`
  color: black;
  font-size: ${({ theme }) => theme.fontSize.S};
  margin-left: 0.5rem;
`;

export const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const RadioLabel = styled.p`
  margin-left: 1rem;
`;
