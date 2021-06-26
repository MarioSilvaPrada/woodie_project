import React, { useEffect, useState } from 'react';
import * as S from './style';

import ProductCard from 'components/ProductCard';
import Layout from 'components/Layout';

const Galeria = ({ articles }) => {
  return (
    <Layout title='Galeria'>
      <S.StyledGrid>
        {articles.map((el) => (
          <ProductCard key={el.id} article={el} noInfo type='galeria' />
        ))}
      </S.StyledGrid>
    </Layout>
  );
};

export default Galeria;
