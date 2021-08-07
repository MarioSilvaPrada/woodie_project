import React, { useEffect, useState } from 'react';
import * as S from './style';

import ProductCard from 'components/ProductCard';
import Layout from 'components/Layout';

const Galeria = ({ articles, collections }) => {
  console.log({ collections });
  const [collectionSelected, setCollectionSelected] = useState(null);

  return (
    <Layout title='Galeria'>
      <S.CollectionsWrapper>
        <S.Collection
          onClick={() => setCollectionSelected(null)}
          isSelected={null === collectionSelected}
        >
          <span>Todas</span>
        </S.Collection>
        {collections.map(({ id, name }) => (
          <S.Collection
            key={id}
            onClick={() => setCollectionSelected(id)}
            isSelected={id === collectionSelected}
          >
            <span>{name}</span>
          </S.Collection>
        ))}
      </S.CollectionsWrapper>
      <S.StyledGrid>
        {articles
          .filter((el) =>
            collectionSelected ? el.colecao === collectionSelected : el
          )
          .map((el) => (
            <ProductCard key={el.id} article={el} noInfo type='galeria' />
          ))}
      </S.StyledGrid>
    </Layout>
  );
};

export default Galeria;
