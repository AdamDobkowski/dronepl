/** @format */

import React from 'react';
import Swiper from 'swiper/swiper-bundle.esm.js';
import 'swiper/swiper-bundle.css';
import { company } from '../../assets/data';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const ContainerSlider = styled.div`
  top: -15px;
  /* position: relative;
  background: transparent;*/
  /* background: transparent; */
  position: relative;
  height: 200px;
  width: 80%;
  z-index: -1;

  /* height: 30%; */
`;

// const StyledSlider = styled(Slider)`
const StyledSlider = styled.div`
  /* background: transparent;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center; */
  /* height: 100px; */
`;
const Imgi = styled.div`
  /* border: 1px solid red; */
  position: relative;
  padding: 0;
  margin: 0 auto;
  width: 90%;

  /*  */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  /*  */

  /* transform: translate(-50%, -50%); */
  img {
    /* border: 1px solid yellow; */
    position: relative;
    /* top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
    z-index: 999;
    margin: 0 auto;
    width: 35%;
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
  // eslint-disable-next-line
  let swiper = new Swiper('.swiper', {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 3,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  return (
    <ContainerSlider className='swiper'>
      <StyledSlider className='swiper-wrapper'>
        {company.map((item, idx) => (
          <Imgi className='swiper-slide' key={idx}>
            <img src={item.imgs} alt={item.id} key={idx} />
          </Imgi>
        ))}
      </StyledSlider>
    </ContainerSlider>
  );

  //   const numbers = company.length + 1;
  //   const settings = {
  //     infinite: true,
  //     slidesToShow: 5,
  //     // slidesToScroll: numbers,
  //     slidesToScroll: 5,
  //     autoplay: true,
  //     speed: 8000,
  //     cssEase: 'linear',
  //     arrows: false,
  //     centerMode: false,
  //     responsive: [
  //       {
  //         breakpoint: 900,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 2,
  //           speed: 3000,
  //           infinite: true,
  //           cssEase: 'linear',
  //           autoplay: true,
  //         },
  //       },
  //       {
  //         breakpoint: 700,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //           speed: 3000,
  //           infinite: true,
  //           cssEase: 'linear',
  //           autoplay: true,
  //         },
  //       },
  //       {
  //         breakpoint: 400,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //           speed: 3000,
  //           infinite: true,
  //           cssEase: 'linear',
  //           autoplay: true,
  //           initialSlide: 1,
  //         },
  //       },
  //     ],
  //   };
  //   return (
  //     <ContainerSlider className='App'>
  //       <StyledSlider {...settings}>
  //         {company.map((item, idx) => (
  //           <Imgi key={idx}>
  //             <img src={item.imgs} alt={item.id} key={idx} />
  //           </Imgi>
  //         ))}
  //       </StyledSlider>
  //     </ContainerSlider>
  //   );
};

export default CompanyCarousel;
//
