import React, { useState } from 'react';

import Input from 'components/Input';

import spinner from 'assets/images/woodi_spinner.png';
import * as S from './style';

import { postSubscription } from 'api/subscriptions';

const SubscriptionBar = () => {
  const [name, setName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState({
    name: '',
    email: '',
  });

  const postInfo = async (e) => {
    e.preventDefault();
    const params = {
      name,
      email: userEmail,
    };
    const res = await postSubscription(params);
    const { status, data } = res;

    if (status === 201) {
      setIsSubscribed(true);
      return;
    }

    if (status === 400) {
      console.log({ data });
      setError(data);
      return;
    }
  };
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
        <S.Form onSubmit={postInfo}>
          <S.StyledInput
            placeholder={'Primeiro e último nome'}
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
          <S.Error>{error.name}</S.Error>
          <S.InputWrapper>
            <S.StyledInput
              placeholder={'E-mail address'}
              value={userEmail}
              onChange={({ target }) => setUserEmail(target.value)}
            />

            <S.Submit type='submit' value='Subscrever' />
          </S.InputWrapper>
          <S.Error>{error.email}</S.Error>
        </S.Form>
      </S.MainWrapper>
    </S.Container>
  );
};

export default SubscriptionBar;
