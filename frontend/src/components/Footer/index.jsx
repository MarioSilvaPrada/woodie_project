import React from 'react';
import * as S from './style';

const Footer = ({ logo }) => {
  const YEAR = new Date().getFullYear();
  return (
    <S.Container>
      <S.Wrapper>
        <S.StyledImg src={logo} />
        <S.StyledText>Copyright © {YEAR}</S.StyledText>
        <S.StyledText>All rights reserved to Woodi</S.StyledText>
      </S.Wrapper>
    </S.Container>
  );
};

export default Footer;
