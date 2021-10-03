import React from 'react';
import * as S from './style';

const ProductCard = ({ article, noInfo, type, cardWidth }) => {
  return (
    <S.Product
      type={type}
      to={{
        pathname: `artigo/${article.id}`,
        state: {
          article,
        },
      }}
      key={article.id}
    >
      <S.ProductImg cardWidth={cardWidth} mainImg={article.main_image} />
      {!noInfo && (
        <>
          <S.ProductTitle>{article.name}</S.ProductTitle>
          <S.StyledPrice>{article.price}€</S.StyledPrice>
        </>
      )}
    </S.Product>
  );
};

export default ProductCard;
