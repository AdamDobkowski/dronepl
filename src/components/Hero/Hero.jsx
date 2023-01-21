/** @format */

// /** @format */

import React, { useState } from 'react';

import styled from 'styled-components';
import video from '../../assets/imges/dron.mp4';
import imgHero from '../../assets/imges/hero.jpg';
// import Navigation from '../Navigation/Navigation';
// import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroContainer = styled.div`
  font-family: Montserrat;

  box-sizing: border-box;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
  background: transparent;
`;
const ContainerButton = styled.div`
  display: ${({ open }) => (open ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
`;
const HeroInfo = styled.div`
  position: absolute;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: -1;

  h1 {
    text-align: center;
    width: 100%;
    font-size: clamp(1.5rem, 5vw, 3rem);
    margin: 0;
    text-shadow: 4px 4px 30px rgba(255, 255, 255, 0.3);

    color: ${({ theme }) => theme.colors.white};
    letter-spacing: 3px;
  }
  h5 {
    text-align: center;
    width: 100%;
    font-size: clamp(1.2rem, 5vw, 1.5rem);
    margin: 0 0 25px 0;
    text-shadow: 4px 4px 30px rgba(255, 255, 255, 02.3rem);

    color: ${({ theme }) => theme.colors.white};
    letter-spacing: 3px;
  }
`;
const ContainerLinks = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 60%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;

const Button1 = styled.button`
  cursor: pointer;
  border-radius: 5px;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  font-weight: bold;
  font-size: ${({ theme }) => theme.font.size.xxs};
  background-color: rgba(0, 0, 0, 1);
  color: ${({ theme }) => theme.colors.white};
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    font-size: ${({ theme }) => theme.font.size.xxs};
  }
`;
const Button2 = styled.button`
  cursor: pointer;
  border-radius: 5px;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  font-weight: bold;
  font-size: ${({ theme }) => theme.font.size.xxs};
  background-color: ${({ theme }) => theme.colors.logo};

  color: ${({ theme }) => theme.colors.white};
  /* background-color: ${({ theme }) => theme.colors.logo}; */
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    font-size: ${({ theme }) => theme.font.size.xxs};
  }
`;

const ContainerView = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -10;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    visibility: ${({ changeHero }) => (changeHero ? 'hidden' : 'visible')};
    /* display: initial; */
  }
  img {
    /* visibility: hidden; */
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: ${({ changeHero }) => (changeHero ? 'none' : 'block')};
  }
`;

const Hero = () => {
  const [changeHero, isChangeImg] = useState(false);
  const changeBG = () => isChangeImg(!changeHero);

  return (
    <HeroContainer>
      <a id='Hero' />
      <ContainerView>
        <video src={video} autoPlay loop muted alt='hero' />
      </ContainerView>
      <ContainerView changeHero={changeHero}>
        <img src={imgHero} alt='hero' />
      </ContainerView>
      <ContainerButton>
        <HeroInfo>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            // animate={{ opacity: 1, scale: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1>
              Ujęcia z lotu ptaka
              <br />
              na wyciągnięcie ręki
            </h1>
            <h5>filmy oraz fotografia</h5>
          </motion.div>
        </HeroInfo>
        {/* <h2>play my showreel</h2> */}
        <ContainerLinks>
          <Button1
            as={motion.button}
            onClick={changeBG}
            initial={{ opacity: 0, x: -30 }}
            // animate={{ opacity: 1, scale: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span>{!changeHero ? 'SHOWREEL' : 'OFFshowreel'}</span>
            {/* </motion.div> */}
          </Button1>
          <Button2
            as={motion.button}
            onClick={changeBG}
            initial={{ opacity: 0, x: 30 }}
            // animate={{ opacity: 1, scale: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a href='#Kontakt'>SKONTAKTUJ SIĘ</a>
          </Button2>
        </ContainerLinks>
      </ContainerButton>
    </HeroContainer>
  );
};

export default Hero;
