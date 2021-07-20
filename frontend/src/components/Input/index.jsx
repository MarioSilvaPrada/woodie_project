import React from 'react';
import * as S from './style';

const Input = ({ label, isRequired, error, additionalInfo, ...props }) => {
  return (
    <S.Wrapper>
      <S.LabelWrapper>
        <S.Label>{label}</S.Label>
        <S.Info>{additionalInfo}</S.Info>
        {isRequired && <S.Required>*</S.Required>}
      </S.LabelWrapper>
      {props.type === 'textarea' ? (
        <>
          <S.StyledTextArea {...props} />
          <S.Error>{error}</S.Error>
        </>
      ) : (
        <>
          <S.StyledInput {...props} />
          <S.Error>{error}</S.Error>
        </>
      )}
    </S.Wrapper>
  );
};

export default Input;
