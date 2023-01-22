/** @format */

import React, { useState } from 'react';
import styled from 'styled-components';
import { CarouselaData } from '../../assets/data';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';

import Slider from 'react-slick';
import './Carousel.css';

const ContainerSlider = styled.div`
  height: 100%;
`;

const Carousel = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className='arrow next' onClick={onClick}>
        <AiOutlineArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className='arrow prev' onClick={onClick}>
        <AiOutlineArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);
  const settings = {
    adaptiveHeight: false,
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 700,
        settings: {
          adaptiveHeight: false,
          infinite: true,
          lazyLoad: true,
          speed: 300,
          slidesToShow: 1,
          centerMode: true,
          centerPadding: 0,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
          beforeChange: (current, next) => setImageIndex(next),
        },
      },
    ],
  };
  return (
    <>
      <ContainerSlider className='App'>
        <Slider {...settings}>
          {CarouselaData.map((img, idx) => (
            <div
              key={idx}
              className={idx === imageIndex ? 'slide activeSlide' : 'slide'}
            >
              <img src={img.imgs} alt={img} />
              <p>{img.p}</p>
            </div>
          ))}
        </Slider>
      </ContainerSlider>
    </>
  );
};

// const Carousel = ({ current, ...props }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     const isLastSlide = currentIndex === CarouselaData.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;

//     setCurrentIndex(newIndex);
//   };
//   const prevSlide = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? CarouselaData.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };
//   return (
//     <>
//       <AiOutlineArrowLeft onClick={prevSlide} />
//       <AiOutlineArrowRight onClick={nextSlide} />
//       <ContainerCarousel>
//         {CarouselaData.map((item, inx) => {
//           // console.log(item, inx, currentIndex);

//           {
//             if (currentIndex == inx) {
//               console.log(currentIndex, current, inx);
//               return (
//                 <ContainerImg key={inx}>
//                   <div>
//                     <Images
//                       src={item.imgs}
//                       alt={'dsds'}
//                       inx={inx}
//                       current={currentIndex}
//                     />
//                   </div>
//                 </ContainerImg>
//               );
//             }
//           }
//         })}
//       </ContainerCarousel>
//     </>
//   );
// };

export default Carousel;
