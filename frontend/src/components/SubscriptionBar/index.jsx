import React, { useState } from 'react';

import Input from 'components/Input';

import spinner from 'assets/images/woodi_spinner.png';
import * as S from './style';

import { postSubscription } from 'api/subscriptions';

const SubscriptionBar = ({ noMarginBottom, isModal }) => {
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
      setName('');
      setUserEmail('');
      setError({
        name: '',
        email: '',
      });
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 5000);
      return;
    }

    if (status === 400) {
      setError(data);
      return;
    }
  };
  return (
    <S.Container noMarginBottom={noMarginBottom} isModal={isModal}>
      <S.MainWrapper>
        <S.TitleWrapper>
          <h1>Saiba todas as novidades!</h1>
          <p>
            Junte-se à nossa mail list e receba conteúdo exlusivo sobre as
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
              placeholder={'E-mail'}
              value={userEmail}
              onChange={({ target }) => setUserEmail(target.value)}
            />

            <S.Submit type='submit' value='Subscrever' isValid={isSubscribed} />
          </S.InputWrapper>
          <S.Error>{error.email}</S.Error>
        </S.Form>
        {isSubscribed && (
          <S.SuccessText>Obrigado pela sua subscrição!</S.SuccessText>
        )}
      </S.MainWrapper>
    </S.Container>
  );
};

export default SubscriptionBar;
