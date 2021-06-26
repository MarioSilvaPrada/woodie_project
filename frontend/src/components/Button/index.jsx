import React from 'react';
import * as S from './style';

const Button = ({ children, route, onClick }) => {
  return route ? (
    <S.StyledContainer to={route}>
      <span>{children}</span>
    </S.StyledContainer>
  ) : (
    <S.StyledBtn onClick={onClick}>
      <span>{children}</span>
    </S.StyledBtn>
  );
};

export default Button;
