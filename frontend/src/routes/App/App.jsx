import React, { useEffect } from 'react';
import * as S from './App.styled';

import { getProducts } from 'api/products';

const App = () => {
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <S.Container>
      <h1>Home</h1>
    </S.Container>
  );
};

export default App;
