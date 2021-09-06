import { HeroContainer, HeroTitle, HeroBanner } from './styles';

import Pc from '../../images/pc.jpg';

export function Hero(){
  return(
    <HeroContainer>
      <HeroTitle>Games</HeroTitle>
      <HeroBanner src={Pc} alt='Computador' />
    </HeroContainer>
  );
}