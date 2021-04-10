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
        {articles.map(
          ({
            name,
            price,
            description,
            main_image,
            image1,
            image2,
            image3,
          }) => (
            <S.Product>
              <S.ProductImg mainImg={main_image} />
              <p>{name}</p>
              <p>{price}€</p>
            </S.Product>
          )
        )}
      </S.ProductsWrapper>
    </S.Container>
  );
};

export default GalleryRow;
