import React from 'react';
import * as S from './style';
import { content } from 'content';
import ServicesRow from 'components/ServicesRow';

const Services = ({ article, noInfo, type }) => {
  return (
    <S.Container>
      <S.Title>Os nossos serviços</S.Title>
      {content.services.map((content, i) => (
        <ServicesRow content={content} isOdd={i % 2 !== 0} />
      ))}
    </S.Container>
  );
};

export default Services;
