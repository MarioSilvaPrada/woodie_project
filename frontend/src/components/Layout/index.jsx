import React, { useEffect } from 'react';
import * as S from './style';

const Layout = ({ title, children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <S.Container>
      {title && <S.StyledTitle>{title}</S.StyledTitle>}
      {children}
    </S.Container>
  );
};

export default Layout;
