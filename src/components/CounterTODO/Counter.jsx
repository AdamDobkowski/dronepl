/** @format */

import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import styled from 'styled-components';
import { MdPhotoCamera } from 'react-icons/md';
import { RiMovieFill } from 'react-icons/ri';
import { RiTimeFill } from 'react-icons/ri';

import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import pxl from '../../assets/imges/prlx.jpeg';

const NumbersDo = styled.div`
  height: 50vh;
  width: 100%;
`;
const Numbers = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 15px;
  gap: 30px;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    /* align-items: flex-start; */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* height: 30%; */
    gap: 0px;
  }
`;
const NumbersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Montserrat sans-serif;
`;
const Counts = styled.div`
  font-size: ${({ theme }) => theme.font.size.s};
  font-weight: bold;
  color: white;
  font-family: Montserrat;
`;
const Info = styled.div`
  font-family: Montserrat;

  font-size: ${({ theme }) => theme.font.size.xs};
  color: white;
`;

const DeliveryDrone = styled(RiTimeFill)`
  font-size: 60px;
  color: DodgerBlue;
`;
const PhotoCamera = styled(MdPhotoCamera)`
  font-size: 60px;
  color: DodgerBlue;
`;
const VideoRecording = styled(RiMovieFill)`
  font-size: 60px;
  color: DodgerBlue;
`;

const Wrapper = styled.div`
  height: 50vh;
  position: relative;
  font-family: Montserrat;
`;

const Counter = () => {
  const [count, setCounter] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounter(true)}
      onExit={() => setCounter(false)}
    >
      <Wrapper>
        <ParallaxProvider>
          <ParallaxBanner
            layers={[
              {
                image: pxl,
                translateY: [0, 50],
                speed: -10,
                shouldAlwaysCompleteAnimation: false,
                expanded: true,
              },

              {
                children: (
                  <>
                    <NumbersDo>
                      <Numbers>
                        <NumbersContainer>
                          <DeliveryDrone />
                          <Counts>
                            {count && (
                              <CountUp start={0} end={4300} duration={1.5} />
                            )}
                          </Counts>
                          <Info>godzin w powietrzu</Info>
                        </NumbersContainer>
                        <NumbersContainer>
                          <PhotoCamera />
                          <Counts>
                            {count && (
                              <CountUp start={0} end={3322} duration={2.5} />
                            )}
                          </Counts>
                          <Info>wykonanych zdjęc</Info>
                        </NumbersContainer>
                        <NumbersContainer>
                          <VideoRecording />
                          <Counts>
                            {count && (
                              <CountUp start={0} end={100} duration={1.5} />
                            )}{' '}
                          </Counts>
                          <Info>nagranych filmów</Info>
                        </NumbersContainer>
                      </Numbers>
                    </NumbersDo>
                  </>
                ),
              },
            ]}
            style={{ aspectRatio: 'auto', height: '50vh' }}
          ></ParallaxBanner>
        </ParallaxProvider>
      </Wrapper>
    </ScrollTrigger>
  );
};
export default Counter;
