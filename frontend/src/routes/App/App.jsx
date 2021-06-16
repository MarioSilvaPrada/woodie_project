import React, { useEffect, useState } from 'react';
import * as S from './App.styled';

import Button from 'components/Button';
import GalleryRow from 'components/GalleryRow';
import Services from 'components/Services';

const App = ({ backImg, articles }) => {
  return (
    <>
      <S.Container backImage={backImg}>
        <S.Layer />
        <S.Wrapper>
          <S.MainTitle>We are Woodi</S.MainTitle>
          <S.Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            imperdiet congue nisi, ornare commodo quam ultrices nec. Fusce
            venenatis semper elementum. Etiam feugiat turpis quis cursus semper.
          </S.Description>
          <Button route={'galeria'}>Check our gallery</Button>
        </S.Wrapper>
      </S.Container>
      <GalleryRow articles={articles} />
      <Services />
    </>
  );
};

export default App;
