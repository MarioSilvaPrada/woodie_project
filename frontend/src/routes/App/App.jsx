import React, { useEffect, useState } from 'react';
import * as S from './App.styled';
import { FiX } from 'react-icons/fi';
import Button from 'components/Button';
import GalleryRow from 'components/GalleryRow';
import Services from 'components/Services';
import SubscriptionBar from 'components/SubscriptionBar';

const App = ({ backImg, articles }) => {
  const [isSubModalVisible, setIsSubModalVisible] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setIsSubModalVisible(true);
    }, 1000);
  }, []);

  console.log({ articles });
  return (
    <>
      <S.Container backImage={backImg}>
        <S.Layer />
        <S.Wrapper>
          <S.MainTitle>Bem-vindo à Woodi</S.MainTitle>
          <S.Description>
            Venha conhecer os nossos artigos 100% em madeira.
          </S.Description>
          <Button route={'galeria'}>A nossa galeria</Button>
        </S.Wrapper>
        <S.SubWrapper isVisible={isSubModalVisible}>
          <S.CloseBtn onClick={() => setIsSubModalVisible(false)}>
            <FiX />
          </S.CloseBtn>
          <SubscriptionBar noMarginBottom isModal />
        </S.SubWrapper>
      </S.Container>
      <GalleryRow articles={articles} />
      <Services />
      <S.ExtraPadding>
        <SubscriptionBar />
      </S.ExtraPadding>
    </>
  );
};

export default App;
