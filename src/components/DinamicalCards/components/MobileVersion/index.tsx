import React, { useEffect, useState, useCallback } from 'react';

import * as S from './styles';

import FirstCard from '../../components/FirstCard';
import SecondCard from '../../components/SecondCard';
import ThirdCard from '../../components/ThirdCard';
import FourthCard from '../../components/FourthCard';
import FifthCard from '../../components/FifthCard';

import { MdOutlineAddCircleOutline } from 'react-icons/md';


export default function MobileVersion() {
  const [tabPosition, setTabPosition] = useState<number>(0);

  const bgColors = {
    green1: "#525D4D",
    green2: "#6E7C65",
    green3: "#85957B",
    green4: "#9CA995",
    green5: "#AEB9A9"
  };

  const tabsMap: {[key: number]: JSX.Element} = {
    0: <FirstCard />,
    1: <SecondCard />,
    2: <ThirdCard />,
    3: <FourthCard />,
    4: <FifthCard />
  };

  const isFirst = tabPosition === 0;
  const isSecond = tabPosition === 1;
  const isThird = tabPosition === 2;
  const isFourth = tabPosition === 3;
  const isFifth = tabPosition === 4;

  function Validator() {
    if (tabPosition === 0) {
      return bgColors.green1;
    }
    if (tabPosition === 1) {
      return bgColors.green2;
    }
    if (tabPosition === 2) {
      return bgColors.green3;
    }
    if (tabPosition === 3) {
      return bgColors.green4;
    }
    if (tabPosition === 4) {
      return bgColors.green5;
    }
    return 'white';
  }

  useEffect(() => {
    Validator();
  }, [bgColors]);

  return (
    <S.Container id="services" >
        <S.NavBar>
          <S.Tab isActive={isFirst} onClick={() => setTabPosition(0)} style={{backgroundColor: "#525D4D"}}>
            <S.Icon><MdOutlineAddCircleOutline /></S.Icon>
          </S.Tab>

          <S.Tab isActive={isSecond} onClick={() => setTabPosition(1)} style={{backgroundColor: "#6E7C65"}}>
            <S.Icon><MdOutlineAddCircleOutline /></S.Icon>
          </S.Tab>

          <S.Tab isActive={isThird} onClick={() => setTabPosition(2)} style={{backgroundColor: "#85957B"}}>
            <S.Icon><MdOutlineAddCircleOutline /></S.Icon>
          </S.Tab>

          <S.Tab isActive={isFourth} onClick={() => setTabPosition(3)} style={{backgroundColor: "#9CA995"}}>
            <S.Icon><MdOutlineAddCircleOutline /></S.Icon>
          </S.Tab>
        
          <S.Tab isActive={isFifth} onClick={() => setTabPosition(4)} style={{backgroundColor: "#AEB9A9"}}>
            <S.Icon><MdOutlineAddCircleOutline /></S.Icon>
          </S.Tab>  
        </S.NavBar>
      
        <S.Content color={Validator()}>
          {tabsMap[tabPosition]}
        </S.Content>
    </S.Container>
  );
}
