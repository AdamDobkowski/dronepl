/** @format */

import React from 'react';
import Slider from 'react-slick';
import { company } from '../../assets/data';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const ContainerSlider = styled.div`
  /* top: 20px; */
  position: relative;
  background: transparent;
  height: 200px;
`;

const StyledSlider = styled(Slider)`
  background: transparent;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100px; */
`;
const Imgi = styled.div`
  /* border: 1px solid red; */
  position: relative;
  padding: 0;
  margin: 0 auto;
  width: 90%;

  /* transform: translate(-50%, -50%); */
  img {
    /* border: 1px solid yellow; */
    position: relative;
    /* top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
    z-index: 999;
    margin: 0 auto;
    width: 45%;
    /* height: 100px; */
    background-size: cover;
    @media (min-width: 768px) {
      background-size: contain;
      background-repeat: no-repeat;
      /* width: auto; */
      /* height: 200px; */
    }
  }
`;

const CompanyCarousel = () => {
  const numbers = company.length + 1;
  const settings = {
    infinite: true,
    slidesToShow: 5,
    // slidesToScroll: numbers,
    slidesToScroll: 5,
    autoplay: true,
    speed: 8000,
    cssEase: 'linear',
    arrows: false,
    centerMode: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          speed: 3000,
          infinite: true,
          cssEase: 'linear',
          autoplay: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 3000,
          infinite: true,
          cssEase: 'linear',
          autoplay: true,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 3000,
          infinite: true,
          cssEase: 'linear',
          autoplay: true,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <ContainerSlider className='App'>
      <StyledSlider {...settings}>
        {company.map((item, idx) => (
          <Imgi key={idx}>
            <img src={item.imgs} alt={item.id} key={idx} />
          </Imgi>
        ))}
      </StyledSlider>
    </ContainerSlider>
  );
};

export default CompanyCarousel;
