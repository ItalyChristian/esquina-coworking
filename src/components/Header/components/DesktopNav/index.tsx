import React, { useEffect, useState  } from 'react';

import * as S from './styles';

const DesktopNav: React.FC = ()  => {
 

  return (
    <S.Container>
      <S.NavBarUl>
        <S.Link>
          <S.Anchor href='#gallery'>Galeria</S.Anchor>
        </S.Link>

        <S.Link>
          <S.Anchor href='#services'>Serviços</S.Anchor>
        </S.Link>

        <S.Link>
          <S.Anchor href='#contact'>Contato</S.Anchor>
        </S.Link>
      </S.NavBarUl>
    </S.Container>  
  )
}

export default DesktopNav;