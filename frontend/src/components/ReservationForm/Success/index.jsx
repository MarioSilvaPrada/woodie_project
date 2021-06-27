import React, { useEffect } from 'react';
import * as S from './style';

import { FiCheckCircle } from 'react-icons/fi';

const Success = () => {
  return (
    <S.Container>
      <S.Icon>
        <FiCheckCircle />
      </S.Icon>
      <S.Heading>Reserva efetuada com sucesso.</S.Heading>
      <S.Text>
        Obrigado pela sua reserva! Iremos entrar em contacto consigo o mais
        breve possível.
      </S.Text>
    </S.Container>
  );
};

export default Success;
