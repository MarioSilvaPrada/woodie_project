import React, { useEffect, useState } from 'react';
import * as S from './App.styled';

import Button from 'components/Button';

const App = ({ backImg }) => {
  return (
    <S.Container backImage={backImg}>
      <S.Layer />
      <S.Wrapper>
        <S.MainTitle>We are Woodie</S.MainTitle>
        <S.Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In imperdiet
          congue nisi, ornare commodo quam ultrices nec. Fusce venenatis semper
          elementum. Etiam feugiat turpis quis cursus semper.
        </S.Description>
        <Button route={'products'}>Check our work</Button>
      </S.Wrapper>
    </S.Container>
  );
};

export default App;
