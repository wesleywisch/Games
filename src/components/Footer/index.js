import Facebook from '../../images/facebook.png'
import Youtube from '../../images/youtube.png'
import Instagram from '../../images/instagram.png'
import Linkedin from '../../images/linkedin.png'

import { FooterContainer, FooterTitle, FooterSocials, FooterSocialsItem } from './styles';

export function Footer(){
  return(
    <FooterContainer>
      <FooterTitle>Games</FooterTitle>
      <FooterSocials>
        <FooterSocialsItem><img src={Facebook} alt="Facebook" /></FooterSocialsItem>
        <FooterSocialsItem><img src={Youtube} alt="Youtube" /></FooterSocialsItem>
        <FooterSocialsItem><img src={Instagram} alt="Instagram" /></FooterSocialsItem>
        <FooterSocialsItem><img src={Linkedin} alt="Linkedin" /></FooterSocialsItem>
      </FooterSocials>
    </FooterContainer>
  );
}