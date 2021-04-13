import React, { useEffect, useState } from 'react';
import * as S from './style';

import ProductCard from 'components/ProductCard';

const Galeria = ({ articles }) => {
  return (
    <S.Wrapper>
      <S.Title>Galeria</S.Title>
      <S.StyledGrid>
        {articles.map((el) => (
          <ProductCard key={el.id} article={el} noInfo />
        ))}
      </S.StyledGrid>
    </S.Wrapper>
  );
};

export default Galeria;
