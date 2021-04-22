import React from 'react';
import * as S from './style';

const ProductCard = ({ article, noInfo, type }) => {
  return (
    <S.Product
      type
      to={{
        pathname: `artigo/${article.id}`,
        state: {
          article,
        },
      }}
      key={article.id}
    >
      <S.ProductImg mainImg={article.main_image} />
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
