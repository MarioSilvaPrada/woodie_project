import React from 'react';
import * as S from './style';

const ServicesRow = ({ content, isOdd }) => {
  const { image, description, title } = content;
  return (
    <S.Container isOdd={isOdd}>
      <S.ContentWrapper isOdd={isOdd}>
        <S.RowTitle>{title}</S.RowTitle>
        <p>{description}</p>
      </S.ContentWrapper>
      <S.StyledImage src={image} />
    </S.Container>
  );
};

export default ServicesRow;
