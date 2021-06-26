import React from 'react';
import * as S from './PageNotFound.styled';
import spinner from 'assets/images/woodi_spinner.png';

const PageNotFound = () => (
  <S.Wrapper>
    <S.Styled404>
      <S.StyledText>4</S.StyledText>
      <S.Logo src={spinner} />
      <S.StyledText>4</S.StyledText>
    </S.Styled404>
    <h1>Page Not Found</h1>
  </S.Wrapper>
);

export default PageNotFound;
