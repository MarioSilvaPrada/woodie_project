import React from 'react';
import * as S from './style';
import aboutImg from 'assets/images/about-img.jpg';
import LazyImage from 'components/LazyImage';

import { content } from 'content';

import Layout from 'components/Layout';

const Sobre = () => (
  <Layout title='Sobre'>
    <S.ContentWrapper>
      <S.TextWrapper>
        <div>
          <h2>Sobre a Woodi</h2>
          <S.Paragraph>{content.about.woodi}</S.Paragraph>
        </div>

        <div>
          <h2>Sobre mim</h2>
          <S.Paragraph>{content.about.myself}</S.Paragraph>
        </div>
      </S.TextWrapper>
      <LazyImage
        alt='About image'
        src={aboutImg}
        actual={({ imageProps }) => <S.StyledImg {...imageProps} />}
      />
    </S.ContentWrapper>
  </Layout>
);

export default Sobre;
