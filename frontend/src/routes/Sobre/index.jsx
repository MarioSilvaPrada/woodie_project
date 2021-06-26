import React from 'react';
import * as S from './style';

import Layout from 'components/Layout';

const Sobre = () => (
  <Layout title='Sobre nós'>
    <S.ContentWrapper>
      <S.Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus
        suscipit ante ut porttitor. In hac habitasse platea dictumst. Aliquam
        risus nunc, mattis nec dignissim ut, feugiat sed neque. Morbi id
        pulvinar quam, at laoreet tellus. Aenean commodo dui nibh, vel
        pellentesque arcu ultrices quis. Pellentesque et maximus urna. Aliquam
        vehicula tellus dolor, non dapibus nibh scelerisque sit amet. Quisque in
        arcu ligula. Sed a porttitor odio, non consequat ligula.
      </S.Paragraph>
      <S.StyledImg
        src={
          'https://images.pexels.com/photos/459654/pexels-photo-459654.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        }
      />
    </S.ContentWrapper>
  </Layout>
);

export default Sobre;
