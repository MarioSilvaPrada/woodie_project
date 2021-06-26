import React from 'react';
import * as S from './style';

const Input = ({ label, isRequired, error, ...props }) => {
  return (
    <S.Wrapper>
      <S.LabelWrapper>
        <S.Label>{label}</S.Label>
        {isRequired && <S.Required>*</S.Required>}
      </S.LabelWrapper>
      {props.type === 'textarea' ? (
        <>
          <S.StyledTextArea {...props} />
          <p>{error}</p>
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
