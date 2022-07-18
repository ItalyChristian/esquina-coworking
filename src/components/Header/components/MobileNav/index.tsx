import React, { useEffect, useState, useCallback } from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';

import * as S from './styles';

import { ClickAwayListener } from '@material-ui/core';

interface MobileNav {
  isHamburgerClicked: boolean;
  setIsHamburgerClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNav: React.FC<MobileNav> = ({ isHamburgerClicked, setIsHamburgerClicked })  => {

  return (
    <S.Container>
      <S.HamburgerIcon onClick={() => setIsHamburgerClicked(!isHamburgerClicked)} aria-label="Abrir Menu"><GiHamburgerMenu /></S.HamburgerIcon>
      <S.HamburgerNav>
          <S.HamburgerUl isClicked={isHamburgerClicked}>
            <S.HamburgerLinks>
              <S.HamburgerLink onClick={() => setIsHamburgerClicked(!isHamburgerClicked)} href="#gallery">Galeria</S.HamburgerLink>
            </S.HamburgerLinks>

            <S.HamburgerLinks>
              <S.HamburgerLink onClick={() => setIsHamburgerClicked(!isHamburgerClicked)} href="#services">Serviços</S.HamburgerLink>
            </S.HamburgerLinks>

            <S.HamburgerLinks>
              <S.HamburgerLink onClick={() => setIsHamburgerClicked(!isHamburgerClicked)} href="#contact">Contato</S.HamburgerLink>
            </S.HamburgerLinks>
          </S.HamburgerUl>
      </S.HamburgerNav>
    </S.Container>
  )
}

export default MobileNav;