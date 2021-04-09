import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './NavBar.styled';

const NavBar = ({ logo }) => (
  <S.Container>
    <Link to='/'>
      <S.Logo src={logo} />
    </Link>
    <div>
      <S.StyledLink to='/1'>Galeria</S.StyledLink>
      <S.StyledLink to='/2'>Sobre</S.StyledLink>
      <S.StyledLink to='/'>Contactos</S.StyledLink>
    </div>
  </S.Container>
);

export default NavBar;
