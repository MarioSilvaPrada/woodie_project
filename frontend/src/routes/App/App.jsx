import React from 'react';
import * as S from './App.styled';

const App = () => {
  console.log(process.env.API_STAGING_URL)
  return (
    <S.Container>
      <h1>Home</h1>
    </S.Container>
  );
};

export default App;
