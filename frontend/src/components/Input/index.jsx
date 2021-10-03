import React from 'react';
import * as S from './style';

const Input = ({
  label,
  isRequired,
  error,
  additionalInfo,
  wrapStyle,
  ...props
}) => {
  const getInput = (type) => {
    if (props.type === 'textarea') {
      return (
        <>
          <S.StyledTextArea {...props} />
          <S.Error>{error}</S.Error>
        </>
      );
    }

    if (props.type === 'checkbox') {
      return (
        <S.RadioWrapper>
          <S.StyledInput {...props} />
          <S.RadioLabel>{label}</S.RadioLabel>
        </S.RadioWrapper>
      );
    }

    return (
      <>
        <S.StyledInput {...props} />
        <S.Error>{error}</S.Error>
      </>
    );
  };
  return (
    <S.Wrapper style={wrapStyle}>
      <S.LabelWrapper>
        {props.type !== 'checkbox' && <S.Label>{label}</S.Label>}
        <S.Info>{additionalInfo}</S.Info>
        {isRequired && <S.Required>*</S.Required>}
      </S.LabelWrapper>
      {getInput(props?.type)}
    </S.Wrapper>
  );
};

export default Input;
