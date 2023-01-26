/** @format */
import styled from 'styled-components';

export const ContainerContact = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  padding: 0;
  margin: 0;
  position: relative;
  font-family: Montserrat;
  background-color: rgba(0, 0, 0, 0.2);
`;
export const ContainerInfo = styled.div`
  div {
    position: relative;
    font-family: Montserrat;
    font-size: 18px;
    text-align: center;
    color: white;
    top: 10px;
  }
`;
export const WrapContainer = styled.div`
  text-align: center;
  /* height: 100%; */
  font-family: Montserrat;
  position: relative;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  gap: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -55%);
  @media (min-width: 768px) {
    width: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -75%);
    position: relative;
    display: flex;
    flex-direction: row;
  }
  @media (min-width: 390px) {
    width: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -70%);
    position: relative;
    display: flex;
  }
`;
export const NumberContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 250px;
  /* height: 50%; */
  justify-content: center;
  align-items: center;
  div {
    display: flex;
    gap: 10px;
    align-items: center;
    font-size: 18px;
  }
`;
export const FormContact = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 50%;
  @media (min-width: 768px) {
    position: relative;
    width: 60%;
  }
`;
export const InputForm = styled.input`
  height: 45px;
  border: 2px solid black;
  padding-left: 5px;
  margin-bottom: 10px;
  transition: 0.2s;
  :hover {
    border: 2px solid rgb(0, 185, 255);
  }
  ::placeholder {
    text-transform: uppercase;
    font-size: 12px;
  }
  :focus {
    outline: rgb(0, 185, 255) auto 1px;
  }
`;
export const TextArea = styled.textarea`
  height: 250px;
  border: 2px solid black;
  resize: none;
  padding-left: 5px;
  padding-top: 10px;
  margin-bottom: 10px;
  font-family: Montserrat;
  :hover {
    border: 2px solid rgb(0, 185, 255);
  }
  ::placeholder {
    text-transform: uppercase;
    font-family: Montserrat;
    font-size: 12px;
  }
  :focus {
    outline: rgb(0, 185, 255) auto 1px;
  }
`;
export const Button = styled.input`
  color: #fff;
  background: black;
  text-transform: uppercase;
  width: 50%;
  transition: 0.2s;
  margin: 20px 0px 0px 0px;
  border: none;
  background-color: black;
  padding: 10px 5px;
  border: none;
  border-radius: 5px;
  letter-spacing: 2px;
  cursor: pointer;
  transition: 0.4s;
  :hover {
    color: black;
    border: none;
    background-color: rgb(0, 185, 255);
    padding: 10px 5px;
    border: none;
    border-radius: 5px;
    letter-spacing: 2px;
    cursor: pointer;
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
  /* background-color: rgb(0, 185, 255); */
  background-color: black;

  width: 80%;
  clip-path: polygon(0% 0, 100% 0, 96% 4.5%, 4% 4.5%);
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
