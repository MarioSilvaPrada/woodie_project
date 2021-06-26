import React from 'react';
import * as S from './style';

import ProductCard from 'components/ProductCard';

const GalleryRow = ({ articles }) => {
  console.log({ articles });
  return (
    <S.Container>
      <S.Header>
        <S.Title>Já disponível</S.Title>
        <S.StyledLink to='galeria'>Ver todos</S.StyledLink>
      </S.Header>
      <S.ProductsWrapper>
        {articles.map((article) => {
          if (article.destacar_produto) {
            return <ProductCard key={article.id} article={article} />;
          }
        })}
      </S.ProductsWrapper>
    </S.Container>
  );
};

export default GalleryRow;
