import React, { useEffect, useState } from 'react';
import * as S from './style';

import ProductCard from 'components/ProductCard';
import Layout from 'components/Layout';

const Galeria = ({ articles, collections }) => {
  const [collectionSelected, setCollectionSelected] = useState(null);

  return (
    <Layout title='Loja'>
      <S.CollectionsWrapper>
        <S.Collection
          onClick={() => setCollectionSelected(null)}
          isSelected={null === collectionSelected}
        >
          <span>Todas</span>
        </S.Collection>
        {collections.map((el) => (
          <S.Collection
            key={el.id}
            onClick={() => setCollectionSelected(el)}
            isSelected={el.id === collectionSelected?.id}
          >
            <span>{el.name}</span>
          </S.Collection>
        ))}
      </S.CollectionsWrapper>
      <S.CatWrapper>
        {collectionSelected && (
          <S.Paragraph>{collectionSelected.description}</S.Paragraph>
        )}
      </S.CatWrapper>
      <S.StyledGrid>
        {articles
          .filter((el) =>
            collectionSelected ? el.colecao === collectionSelected.id : el
          )
          .map((el) => (
            <ProductCard key={el.id} article={el} noInfo type='galeria' />
          ))}
      </S.StyledGrid>
    </Layout>
  );
};

export default Galeria;
