import React from 'react';
import * as S from './style';

const Button = ({ children, route }) => {
  return (
    <S.StyledContainer to={route}>
      <span>{children}</span>
    </S.StyledContainer>
  );
};

export default Button;
