/** @format */

import * as React from 'react';
import { useRef } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Counter from '../CounterTODO/Counter';
import Hero from '../Hero/Hero';
import { specs } from '../../assets/data';
import { motion } from 'framer-motion';
import pxl from '../../assets/imges/prlx.jpeg';
import Carousel from '../Carousel/Carousel';
import CompanyCarousel from '../Carousel/CompanyCarousel';
import Contact from '../Kontakt/Contact';
import {
  Section,
  SectionThree,
  SectionParalax,
  SectionContact,
  ClipUpOne,
  ClipUp,
  ClipDownOne,
  ClipDown,
  ClipUpTwo,
  ContainerInfo,
  WrapperSection,
  ContainerSpec,
  ContainerProject,
  ContainerTxt,
  ContainerInfoTwo,
} from './Main.style';

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
        <SectionParalax>
          <Counter jp={pxl} />
        </SectionParalax>
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
        <SectionContact id='Kontakt'>
          <Contact />
        </SectionContact>
      </main>
    </>
  );
};

export default Main;
