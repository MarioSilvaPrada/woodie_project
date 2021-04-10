import React from 'react';
import * as S from './style';

const GalleryRow = ({ articles }) => {
  return (
    <S.Container>
      <S.Header>
        <h1>Já disponível</h1>
        <S.StyledLink to='galeria'>Ver todos</S.StyledLink>
      </S.Header>
      <S.ProductsWrapper>
        {articles.map((article) => (
          <S.Product
            to={{
              pathname: `artigo/${article.id}`,
              state: {
                article,
              },
            }}
            key={article.id}
          >
            <S.ProductImg mainImg={article.main_image} />
            <S.ProductTitle>{article.name}</S.ProductTitle>
            <p>{article.price}€</p>
          </S.Product>
        ))}
      </S.ProductsWrapper>
    </S.Container>
  );
};

export default GalleryRow;
