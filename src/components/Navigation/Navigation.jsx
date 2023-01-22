/** @format */

import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import {
  OutWrapper,
  Wrapper,
  LogoContainer,
  UnorderList,
  ListItem,
  SocialMedia,
  Hamb,
  Facebook,
  Instagram,
  Youtube,
} from './Navigation.style';

const Navigation = ({ open, handlerOpen, coloricons, changeIconColor }) => {
  window.addEventListener('scroll', changeIconColor);
  return (
    <>
      <OutWrapper isMobilie>
        <AnchorLink href='#Hero'>
          <LogoContainer isSmall open={open} />
        </AnchorLink>
        <Wrapper open={open}>
          <AnchorLink href='#Hero'>
            <LogoContainer isMobileOpen open={!open} />
          </AnchorLink>
          <UnorderList>
            <ListItem>
              <AnchorLink href='#About' onClick={handlerOpen}>
                Realizujemy
              </AnchorLink>
            </ListItem>
            <ListItem>
              <AnchorLink href='#Works' onClick={handlerOpen}>
                Zrealizowaliśmy
              </AnchorLink>
            </ListItem>
            <ListItem>
              <AnchorLink href='#Kontakt' onClick={handlerOpen}>
                Kontakt
              </AnchorLink>
            </ListItem>
          </UnorderList>
          <SocialMedia style={{ overflowY: 'scroll' }} coloricons={coloricons}>
            <a
              onClick={handlerOpen}
              href='https://www.facebook.com/Mr.DroneUslugiDronem'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Facebook />
            </a>
            <a
              onClick={handlerOpen}
              href='https://www.instagram.com/mrdronepl/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Instagram />
            </a>
            <a
              onClick={handlerOpen}
              href='https://www.youtube.com/@user-xb4xp2gy6w/featured'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Youtube />
            </a>
          </SocialMedia>
        </Wrapper>
        <Hamb open={open} onClick={handlerOpen}>
          <div></div>
          <div></div>
          <div></div>
        </Hamb>
      </OutWrapper>
    </>
  );
};

export default Navigation;
