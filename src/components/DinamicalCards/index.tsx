import useWindowSize from '../../hooks/useWindowSize';

import DesktopVersion from './components/DesktopVersion';
import MobileVersion from './components/MobileVersion';

export interface Id{
  id: string;
}

const DinamicalCards = ({ id }: Id) => {
  const { width } = useWindowSize();

  const isMobileSize = !!width && width <= 768;

  return isMobileSize ? <MobileVersion /> : <DesktopVersion />
}

export default DinamicalCards;