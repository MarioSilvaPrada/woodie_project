import React from 'react';
import * as S from './style';
import aboutImg from 'assets/images/about-img.jpg';
import LazyImage from 'components/LazyImage';

import Layout from 'components/Layout';

const Sobre = () => (
  <Layout title='Sobre'>
    <S.ContentWrapper>
      <S.TextWrapper>
        <div>
          <h2>Sobre a Woodi</h2>
          <S.Paragraph>
            A WOODi é um projeto de marca. Um projeto assente numa forte ambição
            em querer construir algo com o nosso cunho. Um fruto do nosso
            trabalho, apreciado por alguém. Para nós a WOODi significa a paixão
            em fazer algo que é nosso, da forma mais transparente e genuína
            possível. Daí, ser assente num recurso que para nós é especial,
            único, natural e imperfeito. O mobiliário foi o mercado que
            escolhemos por termos um interesse muito grande por design e
            decoração. Fazemos peças à medida, mas estamos atualmente mais
            focados em criar coleções WOODi. As medidas das peças de coleção
            podem ser personalizadas para se adaptar ao seu espaço. Convido-o a
            fazer uma visita à nossa galeria e a conhecer os nossos produtos.
            Até já!
          </S.Paragraph>
        </div>

        <div>
          <h2>Sobre mim</h2>
          <S.Paragraph>
            A WOODi é um projeto de marca. Um projeto assente numa forte ambição
            em querer construir algo com o nosso cunho. Um fruto do nosso
            trabalho, apreciado por alguém. Para nós a WOODi significa a paixão
            em fazer algo que é nosso, da forma mais transparente e genuína
            possível. Daí, ser assente num recurso que para nós é especial,
            único, natural e imperfeito. O mobiliário foi o mercado que
            escolhemos por termos um interesse muito grande por design e
            decoração. Fazemos peças à medida, mas estamos atualmente mais
            focados em criar coleções WOODi. As medidas das peças de coleção
            podem ser personalizadas para se adaptar ao seu espaço. Convido-o a
            fazer uma visita à nossa galeria e a conhecer os nossos produtos.
            Até já!
          </S.Paragraph>
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
