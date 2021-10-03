import React from 'react';
import * as S from './style';
import SubscriptionBar from 'components/SubscriptionBar';

import Layout from 'components/Layout';

const Contactos = ({ logo }) => (
  <Layout title='Contactos'>
    <S.Container>
      <S.Left>
        <S.LeftWrapper>
          <S.Row>
            <S.EmailIcon />
            <S.Info>
              <a href='mailto:info.da.woodi@gmail.com'>
                info.da.woodi@gmail.com
              </a>
            </S.Info>
          </S.Row>
          <S.Row>
            <S.PhoneIcon />
            <S.Info>(+351) 918 646 994</S.Info>
          </S.Row>
          <S.Row>
            <S.SocialIcon />
            <S.Info>
              <a href='https://www.instagram.com/woodi.pt/' target='blank'>
                @woodi.pt
              </a>
            </S.Info>
          </S.Row>
        </S.LeftWrapper>
      </S.Left>
      <S.Right>
        <S.StyledImg src={logo} />
      </S.Right>
    </S.Container>
    <SubscriptionBar />
  </Layout>
);

export default Contactos;
