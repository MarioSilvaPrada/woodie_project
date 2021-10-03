import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './NavBar.styled';

const NavBar = ({ logo, articles }) => (
  <S.Container>
    <S.ItemsWrapper>
      <Link to='/'>
        <S.Logo src={logo} />
      </Link>
      <div>
        <S.StyledLink to={'/loja'}>Loja</S.StyledLink>
        <S.StyledLink to='/sobre'>Sobre</S.StyledLink>
        <S.StyledLink to='/contactos'>Contactos</S.StyledLink>
      </div>
    </S.ItemsWrapper>
  </S.Container>
);

export default NavBar;
