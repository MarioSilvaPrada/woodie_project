import React from 'react';

import spinner from 'assets/images/woodi_spinner.png';
import * as S from './style';

const Spinner = () => {
  return (
    <S.Container>
      <S.Animated>
        <S.Image src={spinner} />
      </S.Animated>
    </S.Container>
  );
};

export default Spinner;
