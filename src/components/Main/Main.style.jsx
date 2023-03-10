/** @format */
import styled from 'styled-components';

export const Section = styled.div`
  position: relative;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  font-family: Montserrat;
  @media (min-width: 768px) {
    width: 100%;
  }
`;
export const SectionThree = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  font-family: Montserrat;
  background-color: rgba(0, 0, 0, 0.2);
`;
export const SectionParalax = styled.div`
  position: relative;
  height: 60vh;
  width: 100%;
  font-family: Montserrat;
  background-color: rgba(0, 0, 0, 0.2);
`;
export const SectionContact = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  font-family: Montserrat;
  background-color: transparent;
`;
export const ClipUpOne = styled.div`
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
    clip-path: polygon(0 0, 100% 0, 93% 3.2%, 7.6% 3.3%);
  }
  @media (min-width: 1440px) {
    width: 80%;
    clip-path: polygon(0 0, 100% 0, 93% 4.3%, 7.6% 4.3%);
  }
`;
export const ClipUp = styled.div`
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
    clip-path: polygon(0 0, 100% 0, 93% 4.5%, 7.6% 4.5%);
  }
`;
export const ClipDownOne = styled.p`
  position: absolute;
  margin: 0 auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 100%;
  background-color: rgb(0, 185, 255);
  clip-path: polygon(4.6% 98.1%, 95.4% 98.1%, 100% 100%, 0% 100%);
  @media (min-width: 660px) {
    clip-path: polygon(4.4% 97.8%, 95.6% 97.8%, 100% 100%, 0% 100%);
  }
`;
export const ClipDown = styled.p`
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
export const ContainerInfo = styled.div`
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
export const WrapperSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ContainerSpec = styled.div`
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
export const ContainerProject = styled.div`
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
export const ContainerTxt = styled.div`
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
export const ContainerInfoTwo = styled.div`
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
export const ClipUpTwo = styled.div`
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
