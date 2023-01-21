/** @format */

import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { specs } from '../../assets/data.jsx';
const Section = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  font-family: Montserrat;

  @media (min-width: 768px) {
    /* height: 100vh; */
  }
`;
const ClipUp = styled.div`
  /* z-index: -999; */
  height: 100%;
  margin: 0 auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 100%;
  background-color: rgb(0, 185, 255);
  clip-path: polygon(0 0, 100% 0, 93% 3.8%, 7.6% 3.8%);
  @media (min-width: 500px) {
    clip-path: polygon(0 0, 100% 0, 93% 4.2%, 7.6% 4.2%);
  }
  @media (min-width: 660px) {
    clip-path: polygon(0 0, 100% 0, 96% 3.9%, 4.6% 3.9%);
  }
  @media (min-width: 768px) {
    width: 80%;
    clip-path: polygon(0% 0, 100% 0, 96% 4.2%, 4% 4.2%);
  }
  @media (min-width: 1024px) {
    width: 80%;
    clip-path: polygon(0% 0, 100% 0, 96% 5.5%, 4% 5.5%);
  }
`;
const WrapperSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
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
      font-size: clamp(1.2rem, 5vw, 1.8rem);
    }
  }
  button {
    margin: 50px 0px 0px 0px;
    color: white;
    border: none;
    background-color: black;
    width: 35%;
    padding: 10px 5px;
    border: none;
    border-radius: 5px;
    letter-spacing: 2px;
    cursor: pointer;
  }
`;
const ContainerSpec = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  h3 {
    font-size: 25px;
  }
  p {
    position: relative;
    top: -20px;
    margin: 0px;
    color: black;
  }
`;
const ContainerProject = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
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
    /* width: 35%; */

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
      top: 50%;
      left: 50%;
      transform: translate(-50%, -100%);
      background-color: rgb(0, 0, 5, 0.08);
      width: 40%;
      opacity: 0;
      padding: 10px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      a {
        letter-spacing: 2px;
        text-decoration: none;
        color: white;
      }
    }
    button:hover {
      background-color: black;
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
        top: 0;
        margin: 0;
        font-size: clamp(1.2rem, 5vw, 1.8rem);
        transition: 0.4s ease-in-out;
      }
      button {
        transform: translate(-50%, 100%);
        position: absolute;
        opacity: 1;
        transition: 0.4s ease-in-out;
      }
    }
  }
  @media (min-width: 768px) {
    /* width: 45%; */
    /* height: 80%; */
  }
  @media (min-width: 1008px) {
    width: 40%;
    /* height: 350px; */
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
function About() {
  return (
    <>
      <Section>
        <a id='About'></a>
        <ClipUp />
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
                Chciałbys zdjęcia lub film z lotu ptaka?
                <br /> Dzieli nas tylko Twoja wiadomośc
              </div>
              <button type='button'>KONTAKT</button>
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
                      <button>{/* <a to={item.btn}>{item.btn}</a> */}</button>
                    </div>
                  </ContainerTxt>
                );
              })}
              {/* </ContainerTxt> */}
            </ContainerProject>
          </ContainerSpec>
        </WrapperSection>
        <ClipDown />
      </Section>
    </>
  );
}

export default About;
