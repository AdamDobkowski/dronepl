/** @format */

import * as React from 'react';
import { useRef } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import styled from 'styled-components';
import Counter from './CounterTODO/Counter';
import Hero from './Hero/Hero';
import { specs } from '../assets/data';
import { motion } from 'framer-motion';
import pxl from '../assets/imges/prlx.jpeg';
import Carousel from './Carousel/Carousel';
import CompanyCarousel from './Carousel/CompanyCarousel';
import Contact from './Kontakt/Contact';

const Section = styled.div`
  position: relative;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  font-family: Montserrat;
  @media (min-width: 768px) {
    width: 100%;
  }
`;

const SectionThree = styled.div`
  position: relative;
  width: 100vh;
  width: 100%;
  font-family: Montserrat;
  background-color: rgba(0, 0, 0, 0.2);
`;

const ClipUpOne = styled.div`
  height: 100%;
  margin: 0 auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 100%;
  background-color: rgb(0, 185, 255);

  clip-path: polygon(0 0, 100% 0, 93% 1.9%, 7.6% 1.9%);
  @media (min-width: 768px) {
    width: 80%;
    clip-path: polygon(0 0, 100% 0, 93% 4.2%, 7.6% 4.3%);
  }
`;
const ClipUp = styled.div`
  height: 100%;
  margin: 0 auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 100%;
  background-color: rgb(0, 185, 255);
  clip-path: polygon(0 0, 100% 0, 93% 4.8%, 7.6% 4.8%);
  @media (min-width: 768px) {
    width: 80%;
    clip-path: polygon(0 0, 100% 0, 93% 6.5%, 7.6% 6.5%);
  }
`;
const ClipDownOne = styled.p`
  position: absolute;
  margin: 0 auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 100%;
  background-color: rgb(0, 185, 255);
  clip-path: polygon(7.6% 98.8%, 92.4% 98.8%, 100% 100%, 0% 100%);
  @media (min-width: 660px) {
    clip-path: polygon(4.4% 96.8%, 95.6% 96.8%, 100% 100%, 0% 100%);
  }
`;
const ClipDown = styled.p`
  position: absolute;
  margin: 0 auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 100%;
  background-color: rgb(0, 185, 255);
  clip-path: polygon(7.6% 96.8%, 92.4% 96.8%, 100% 100%, 0% 100%);
  @media (min-width: 660px) {
    clip-path: polygon(4.4% 96.8%, 95.6% 96.8%, 100% 100%, 0% 100%);
  }
`;
const ContainerInfo = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0px 0px 10px 0px;
  z-index: 999;
  width: 100%;
  div {
    /* margin: 5px; */
    z-index: 999;
    width: 100%;
    height: 40px;
    left: 50%;
    position: relative;
    top: 0%;
    transform: translate(-50%, 30%);
    text-align: center;
    font-size: clamp(1.1rem, 5vw, 1.4rem);
    @media (min-width: 768px) {
      transform: translate(-50%, 10%);
      font-size: clamp(1.2rem, 5vw, 1.6rem);
    }
  }
  button {
    margin: 20px 0px 0px 0px;
    color: white;
    border: none;
    background-color: black;
    width: 40%;
    padding: 10px 5px;
    border: none;
    border-radius: 5px;
    letter-spacing: 2px;
    cursor: pointer;
    transition: 0.4s;
    a {
      text-decoration: none;
      color: white;
    }
    :hover {
      border: none;
      background-color: rgb(0, 185, 255);
      cursor: pointer;
      a {
        color: black;
      }
    }
  }
`;
const WrapperSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ContainerSpec = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;

  h3 {
    font-size: 20px;
  }
  p {
    position: relative;
    top: 0px;
    margin: 0px;
    color: black;
  }
`;
const ContainerProject = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding: 0 0 110px 0px;
  width: 85%;
  @media (min-width: 768px) {
    width: 90%;
  }
`;

const ContainerTxt = styled.div`
  position: relative;
  border-radius: 5px;
  box-shadow: -2px 2px 20px 10px rgba(0, 0, 0, 0.37);
  background-color: rgba(0, 0, 0, 0.89);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  h3 {
    position: relative;
    top: 100%;
    left: 0%;
    transform: translate(0%, 200%);
    transition: 0.4s ease-in-out;
  }
  h4 {
    position: relative;
    top: 100%;
    left: 0%;
    transform: translate(0%, 200%);
    transition: 0.4s ease-in-out;
  }
  div {
    position: relative;
    height: 200px;
    top: -20px;

    p {
      position: relative;
      height: 150px;
      text-align: center;
      opacity: 0;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -100%);
      width: 90%;
      font-size: clamp(1.2rem, 5vw, 1.8rem);
      transition: 0.4s ease-in-out;
    }
    button {
      position: relative;
      top: 70%;
      left: 50%;
      transform: translate(-50%, -100%);
      background-color: rgb(0, 0, 5, 0.18);
      width: 40%;
      opacity: 0;
      padding: 10px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      a {
        letter-spacing: 2px;
        text-decoration: none;
        color: black;
      }
    }
    button:hover {
      background-color: black;
      a {
        color: white;
      }
    }
    span {
      /* position: relative;
      border: 1px solid black;
      width: 40px;
      height: 40px;
      display: block;
      background-color: yellowgreen; */
    }
  }

  &::before {
    content: '';
    width: 100%;
    height: 0%;
    border-radius: 5px;
    /* background-color: DodgerBlue; */
    background: linear-gradient(
      354deg,
      rgba(6, 196, 255, 1) 17%,
      rgba(0, 185, 255, 1) 93%
    );

    position: absolute;
    opacity: 0.85;
    transition: 0.4s ease-in-out;
  }
  &:hover::before {
    height: 100%;
  }

  &:hover {
    h4,
    h3 {
      opacity: 0;
    }
    div {
      position: relative;
      opacity: 1;
      transition: 0.4s ease-in-out;
      width: 100%;

      p {
        position: relative;
        transform: translate(-50%, -50%);
        width: 90%;
        opacity: 1;
        top: -50px;
        margin: 0;
        font-size: clamp(1.2rem, 5vw, 1.8rem);
        transition: 0.4s ease-in-out;
      }
      button {
        transform: translate(-50%, 110%);

        position: absolute;
        opacity: 1;
        transition: 0.4s ease-in-out;
      }
    }
  }
  @media (min-width: 768px) {
    width: 40%;
    /* height: 50%; */
  }
  @media (min-width: 956px) {
    width: 35%;
    /* height: 50%; */
  }
  @media (min-width: 1440px) {
    width: 20%;
    /* height: 50%; */
  }
`;
// const ContainerProjectTwo = styled.div`
//   display: flex;
//   /* flex-wrap: wrap; */
//   gap: 20px;
//   justify-content: center;
//   align-items: center;
//   padding: 0 0 10px 0px;
//   width: 100%;
//   border: 1px solid black;
//   /* overflow: hidden; */
//   @media (min-width: 768px) {
//     width: 100%;
//   }
// `;

// const ContainerTxtTwo = styled.div`
//   position: relative;
//   border: 1px solid red;
//   border-radius: 5px;
//   width: 90%;
//   height: 85%;
//   display: flex;
//   flex-wrap: wrap;
//   background-color: rgb(0, 0, 0, 0.12);
//   z-index: 100;
//   align-items: center;
//   img {
//     height: 200px;
//     width: 200px;
//   }
//   button:hover {
//     background-color: black;
//   }

//   &::before {
//     content: '';
//     width: 100%;
//     height: 0%;
//     border-radius: 5px;
//     /* background-color: DodgerBlue; */
//     background: linear-gradient(
//       354deg,
//       rgba(6, 196, 255, 1) 17%,
//       rgba(0, 185, 255, 1) 93%
//     );

//     position: absolute;
//     opacity: 0.85;
//     transition: 0.4s ease-in-out;
//   }
//   &:hover::before {
//     height: 100%;
//   }

//   &:hover {
//     span,
//     h3 {
//       opacity: 0;
//     }
//     div {
//       position: relative;
//       opacity: 1;
//       transition: 0.4s ease-in-out;

//       p {
//         transform: translate(-50%, -30%);
//         opacity: 1;
//         transition: 0.4s ease-in-out;
//       }
//       button {
//         position: relative;
//         opacity: 1;
//         transition: 0.4s ease-in-out;
//       }
//     }
//   }
//   @media (min-width: 768px) {
//     /* width: 20%; */
//   }
//   @media (min-width: 1008px) {
//     /* width: 25%; */
//   }
// `;
// const HeroContainer = styled.div`
//   box-sizing: border-box;
//   padding: 0;
//   margin: 0;
//   width: 100%;
//   height: 100vh;
//   background: transparent;
// `;
// const ContainerButton = styled.div`
//   display: ${({ open }) => (open ? 'none' : 'flex')};
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   /* display: none; */
//   position: absolute;
//   /* background-color: transparent; */
//   width: 100%;
//   height: 100%;
// `;
// const HeroInfo = styled.div`
//   width: 80%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   z-index: 1;

//   h1 {
//     text-align: center;
//     width: 100%;
//     font-size: clamp(1.5rem, 5vw, 3rem);
//     z-index: 1;
//     margin: 0;

//     text-shadow: 4px 4px 30px rgba(255, 255, 255, 1);

//     color: ${({ theme }) => theme.colors.white};
//     letter-spacing: 3px;
//   }
//   h2 {
//     text-align: center;
//     width: 100%;
//     font-size: clamp(1.2rem, 5vw, 3rem);
//     z-index: 1;
//     margin: 0 0 25px 0;
//     text-shadow: 4px 4px 30px rgba(255, 255, 255, 1);
//     color: ${({ theme }) => theme.colors.white};
//     letter-spacing: 3px;
//   }
// `;
// const ContainerLinks = styled.div`
//   display: flex;
//   flex-direction: row;
//   button {
//     border-radius: 2px;
//     border: none;
//     z-index: 1;
//     padding: 10px 20px;
//     margin: 5px;
//     font-weight: bold;
//     font-size: ${({ theme }) => theme.font.size.xxs};
//     color: ${({ theme }) => theme.colors.white};
//     background-color: rgba(238, 238, 238, 0.12);
//     a {
//       text-decoration: none;
//       color: ${({ theme }) => theme.colors.white};
//       font-weight: bold;
//       font-size: ${({ theme }) => theme.font.size.xxs};
//     }
//   }
// `;

// const ContainerView = styled.div`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   video {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     visibility: visible;
//   }
//   img {
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     display: ${({ changeHero }) => (changeHero ? 'none' : 'block')};
//   }
// `;

const ContainerInfoTwo = styled.div`
  position: relative;
  top: 0px;
  padding: 5px;
  width: 100vw;
  height: 40px;
  div {
    margin: 0 auto;
    text-align: center;
  }
`;
const ClipUpTwo = styled.div`
  position: absolute;
  z-index: -999;
  height: 100%;
  margin: 0 auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  background-color: rgb(0, 185, 255);
  clip-path: polygon(0% 0, 100% 0, 96% 95.5%, 4% 95.5%);
`;

const Main = ({ open, current }) => {
  const scrollRef = useRef(null);

  return (
    <>
      <main>
        <Hero open={open} />
        <Section id='About'>
          <ClipUpOne />
          <WrapperSection>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              // animate={{ opacity: 1, scale: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ContainerInfo>
                <div>
                  Zdjęcia lub film z lotu ptaka?
                  <br /> Dzieli nas tylko Twoja wiadomośc
                </div>
                <button type='button'>
                  <AnchorLink offset={80} href='#Kontakt'>
                    KONTAKT
                  </AnchorLink>
                </button>
              </ContainerInfo>
            </motion.div>

            <ContainerSpec
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              // animate={{ opacity: 1, scale: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3>Realizujemy zlecenia</h3>
              <ContainerProject>
                {/* <ContainerTxt> */}
                {specs.map((item, i) => {
                  return (
                    <ContainerTxt
                      key={i}
                      as={motion.div}
                      initial={{ opacity: 0, y: 20 }}
                      // animate={{ opacity: 1, scale: 1 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* <img src={item.icon} alt='' /> */}
                      <h4>{item.icon}</h4>
                      <h3>{item.title}</h3>
                      <div>
                        <p>{item.desc}</p>
                        <button>
                          <AnchorLink offset={80} href='#Kontakt'>
                            {item.btn}
                          </AnchorLink>
                        </button>
                      </div>
                    </ContainerTxt>
                  );
                })}
                {/* </ContainerTxt> */}
              </ContainerProject>
            </ContainerSpec>
          </WrapperSection>
          <ClipDownOne />
        </Section>
        <Counter jp={pxl} />
        <SectionThree id='Works'>
          <ClipUp />
          <WrapperSection ref={scrollRef}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ContainerInfo>
                <div>To tylko niewielka częśc naszych realizacji</div>
              </ContainerInfo>
            </motion.div>
            {/* </WrapperSection> */}
            <Carousel current={current} />
            {/* <ClipUp /> */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ContainerInfoTwo>
                <ClipUpTwo />
                <div>Zaufali nam</div>
              </ContainerInfoTwo>
            </motion.div>
            <ContainerSpec
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            ></ContainerSpec>
          </WrapperSection>
          {/* </SectionTwo> */}
          <CompanyCarousel />
          <ClipDown />
        </SectionThree>
        <Section>
          <AnchorLink id='Kontakt' />
          <Contact />
        </Section>
      </main>
    </>
  );
};

export default Main;
