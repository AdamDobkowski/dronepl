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
  Tiktok,
  Linking,
} from './Navigation.style';
// import Hero from '../Hero/Hero';
// import Hero from '..//Hero/Hero';
// import About from '../About/About';

const Navigation = ({ open, handlerOpen, coloricons, changeIconColor }) => {
  // const [colorIcons, isColorIcons] = useState(false);
  // const changeIconColor = () => {
  //   if (window.scrollY >= 80) {
  //     isColorIcons(true);
  //     console.log(window.scrollY);
  //   } else {
  //     isColorIcons(false);
  //   }
  // };
  window.addEventListener('scroll', changeIconColor);
  console.log(coloricons);
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
              <AnchorLink offset='80' href='#About' onClick={handlerOpen}>
                Realizujemy
              </AnchorLink>
            </ListItem>
            <ListItem>
              <AnchorLink offset='80' href='#Works' onClick={handlerOpen}>
                Zrealizowaliśmy
              </AnchorLink>
            </ListItem>
            <ListItem>
              <AnchorLink offset='80' href='#Kontakt'>
                Kontakt
              </AnchorLink>
            </ListItem>
          </UnorderList>
          <SocialMedia style={{ overflowY: 'scroll' }}>
            <a
              onClick={handlerOpen}
              href='https://www.facebook.com/Mr.DroneUslugiDronem'
              target='_blank'
            >
              <Facebook coloricons={coloricons} />
            </a>
            <a
              onClick={handlerOpen}
              href='https://www.instagram.com/mrdronepl/'
              target='_blank'
            >
              <Instagram coloricons={coloricons} />
            </a>
            <a
              onClick={handlerOpen}
              href='https://www.youtube.com/@user-xb4xp2gy6w/featured'
              target='_blank'
            >
              <Youtube coloricons={coloricons} />
            </a>
            {/* </Link> */}
            {/* <Link to='/'> */}
            {/* <Tiktok coloricons={coloricons} /> */}
            {/* </Link> */}
          </SocialMedia>
        </Wrapper>
        <Hamb open={open} onClick={handlerOpen}>
          <div></div>
          <div></div>
          <div></div>
        </Hamb>
      </OutWrapper>
      {/* <Hero open={open} /> */}
      {/* <About open={open} /> */}
    </>
  );
};

export default Navigation;
