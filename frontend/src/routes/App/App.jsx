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
  return (
    <>
      <S.Container backImage={backImg}>
        <S.Layer />
        <S.Wrapper>
          <S.MainTitle>We are Woodi</S.MainTitle>
          <S.Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            imperdiet congue nisi, ornare commodo quam ultrices nec. Fusce
            venenatis semper elementum. Etiam feugiat turpis quis cursus semper.
          </S.Description>
          <Button route={'galeria'}>Check our gallery</Button>
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
      <SubscriptionBar />
    </>
  );
};

export default App;
