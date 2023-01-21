/** @format */

import styled from 'styled-components';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import { FaYoutube } from 'react-icons/fa';
import Logoz from '../../assets/imges/Logo/logoz.png';
// import { React, useState } from 'react';
import { Link } from 'react-router-dom';

export const OutWrapper = styled.div`
  position: fixed;
  /* padding: 20px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  font-family: Montserrat;

  z-index: 1;
  @media (min-width: 768px) {
    display: inline-block;
    height: 0px;
    top: 0px;
  }
`;

export const Wrapper = styled.div`
  cursor: pointer;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  transition: display 0.4s linear;
  width: 100%;
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
  align-items: center;
  background: white;
  justify-content: space-around;
  /* z-index: 1000; */
  @media (min-width: 768px) {
    /* padding: 10px; */
    width: 100%;
    height: 80px;
    position: static;
    z-index: 999;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: rgba(0 0 0 / 60%);
    /* background-color: rgba(0, 130, 200, 0.3); */
    /* filter: blur(2px); */
  }
`;

export const LogoContainer = styled.div`
  background-image: url(${Logoz});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 180px;
  height: 80px;
  opacity: ${({ isSmall, open }) => (open && isSmall ? 0 : 1)};
  display: ${({ isMobileOpen }) => (isMobileOpen ? 'none' : 'block')};
  @media (min-width: 768px) {
    display: ${({ isSmall }) => (isSmall ? 'none' : 'block')};
    z-index: 1000;
  }
`;
export const UnorderList = styled.ul`
  z-index: 1000;
  /* height: 100%; */
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 40px 0 60px 0;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  @media (min-width: 768px) {
    padding: 0;
    position: static;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  @media (min-width: 1440px) {
    padding: 0;
    position: static;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    /* background-color: red; */
  }
`;

export const ListItem = styled.li`
  list-style: none;
  text-decoration: none;
  padding: 40px 0px 0 0;
  @media (min-width: 768px) {
    padding: 10px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  a {
    font-size: ${({ theme }) => theme.font.size.xs};
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
    align-self: center;
    justify-items: center;
    @media (min-width: 768px) {
      color: ${({ theme }) => theme.colors.white};
      /* color: transparent; */
      transition: text-shadow 0.2s ease;

      /* font-size: ${({ theme }) => theme.font.size.xxs}; */
      &:hover {
        text-shadow: 0 0 1px white, 0 0 1px white, 0 0 1px white;
      }
    }
  }
`;
export const Linking = styled(Link)`
  color: red;
`;
export const SocialMedia = styled.div`
  /* width: 20%; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* left: -15px; */
  a {
    padding: 5px;
  }
  @media (min-width: 768px) {
    padding: 10px;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    /* color: ${({ coloricons }) => (coloricons ? 'red' : 'blue')}; */
    /* color: red; */
    /* background-color: ${({ coloricons }) =>
      coloricons ? 'red' : 'blue'}; */

    a {
      padding: 5px;
    }
  }
`;
export const Facebook = styled(FaFacebook)`
  font-size: 2rem;
  color: black;
  @media (min-width: 768px) {
    /* color: ${({ coloricons }) => (coloricons ? 'black' : 'white')}; */
    color: ${({ coloricons }) => (coloricons ? 'rgba(0, 130, 200)' : 'white')};
    font-size: 2.2rem;
    transition: color 0.4s ease;
    :hover {
      color: silver;
    }
  }
`;
export const Instagram = styled(FaInstagram)`
  /* margin-left: 50px; */
  color: black;
  font-size: 2.1rem;
  @media (min-width: 768px) {
    color: ${({ coloricons }) => (coloricons ? 'rgba(0, 130, 200)' : 'white')};

    font-size: 2.3rem;
    transition: color 0.4s ease;
    :hover {
      color: silver;
    }
  }
`;
export const Tiktok = styled(SiTiktok)`
  color: black;
  font-size: 2rem;
  @media (min-width: 768px) {
    /* color: ${({ coloricons }) => (coloricons ? 'black' : 'white')}; */
    color: ${({ coloricons }) => (coloricons ? 'rgba(0, 130, 200)' : 'white')};

    font-size: 2.4rem;
    transition: color 0.4s ease;
    :hover {
      color: silver;
    }
  }
`;
export const Youtube = styled(FaYoutube)`
  color: black;
  font-size: 2.1rem;
  @media (min-width: 768px) {
    /* color: ${({ coloricons }) => (coloricons ? 'black' : 'white')}; */
    color: ${({ coloricons }) => (coloricons ? 'rgba(0, 130, 200)' : 'white')};

    font-size: 2.6rem;
    transition: color 0.4s ease;
    :hover {
      color: silver;
    }
  }
`;

export const Hamb = styled.div`
  z-index: 1000;
  width: 3rem;
  height: 2rem;
  position: fixed;
  right: 20px;
  @media (min-width: 768px) {
    display: none;
  }
  div {
    right: 5px;
    top: 0;
    width: 3rem;
    height: 0.1rem;
    position: absolute;
    transition: 0.4s linear;
    :first-child {
      display: inline-block;
      background-color: ${({ open }) =>
        open ? 'transparent' : 'rgba(51, 133, 217, 0.94)'};
      height: 0.2rem;
      width: 2.2rem;
      top: 9px;
    }
    :nth-child(2) {
      background-color: ${({ open }) =>
        open ? 'black' : 'rgba(51, 133, 217, 0.94)'};
      display: inline-block;
      height: 0.2rem;
      width: 2.2rem;
      transform: ${({ open }) =>
        open
          ? 'translateY(0.9rem) rotate(45deg)'
          : 'translateY(0rem) rotate(0deg)'};
    }
    :nth-child(3) {
      display: inline-block;
      top: 18px;
      background-color: ${({ open }) =>
        open ? 'black' : 'rgba(51, 133, 217, 0.94)'};
      height: 0.2rem;
      width: 2.2rem;
      transform: ${({ open }) =>
        open
          ? 'translateY(-0.9rem) rotate(-45deg)'
          : 'translateY(-0rem) rotate(0deg)'};
    }
  }
`;
