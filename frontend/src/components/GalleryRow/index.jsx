import React from 'react';
import * as S from './style';

import ProductCard from 'components/ProductCard';

const GalleryRow = ({ articles }) => {
  return (
    <S.Container>
      <S.Header>
        <h1>Já disponível</h1>
        <S.StyledLink to='galeria'>Ver todos</S.StyledLink>
      </S.Header>
      <S.ProductsWrapper>
        {articles.map((article) => (
          <ProductCard article={article} />
        ))}
      </S.ProductsWrapper>
    </S.Container>
  );
};

export default GalleryRow;
