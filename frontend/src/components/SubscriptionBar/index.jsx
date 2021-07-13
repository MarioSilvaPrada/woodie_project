import React, { useState } from 'react';

import spinner from 'assets/images/woodi_spinner.png';
import * as S from './style';

const SubscriptionBar = () => {
  const [userEmail, setUserEmail] = useState('');
  return (
    <S.Container>
      <S.MainWrapper>
        <S.TitleWrapper>
          <h1>Sabe todas as novidades!</h1>
          <p>
            Junta-te à nossa mail list e recebe conteúdo exlusivo relativo às
            nossas novidades.
          </p>
        </S.TitleWrapper>
        <S.Form>
          <S.StyledInput
            placeholder='E-mail address'
            value={userEmail}
            onChange={({ target }) => setUserEmail(target.value)}
          />
          <S.Submit type='submit' value='Subscrever' />
        </S.Form>
      </S.MainWrapper>
    </S.Container>
  );
};

export default SubscriptionBar;
