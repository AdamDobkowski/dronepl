/** @format */

import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { BsFillTelephonePlusFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import emailjs from '@emailjs/browser';

const ContainerContact = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  padding: 0;
  margin: 0;
  font-family: Montserrat;
`;
const ContainerInfo = styled.div`
  div {
    position: relative;
    font-family: Montserrat;
    font-size: 18px;
    text-align: center;
    color: white;
    top: 10px;
  }
`;
const WrapContainer = styled.div`
  text-align: center;
  font-family: Montserrat;
  position: relative;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  /* margin: 0 auto; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -65%);
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }
`;
const NumberContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  div {
    display: flex;
    gap: 10px;
    align-items: center;
    font-size: 18px;
  }
`;
const FormContact = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  /* margin: 0 auto; */

  @media (min-width: 768px) {
    width: 40%;
  }
`;
const InputForm = styled.input`
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
const TextArea = styled.textarea`
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
const Button = styled.input`
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
const ClipUp = styled.div`
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

const Contact = () => {
  // eslint-disable-next-line
  const [result, showResult] = useState(false);
  const form = useRef();
  const sendEmail = e => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_tp554uu',
        'template_udx40hk',
        form.current,
        'zdKGnCVT33D5i5OOx',
        e.target,
      )
      .then(
        result => {
          // console.log(result.text);
        },
        error => {
          // console.log(error.text);
        },
      );
    e.target.reset(showResult(true));
  };

  return (
    <ContainerContact>
      <ClipUp />
      <ContainerInfo>
        <div>Kontakt</div>
      </ContainerInfo>

      <WrapContainer>
        <NumberContainer>
          <div>
            <BsFillTelephonePlusFill />
            <div>555 555 555</div>
          </div>
          <div>
            <AiOutlineMail />
            <div>mrdrone@gmail.com</div>
          </div>
        </NumberContainer>
        <FormContact as='form' ref={form} onSubmit={sendEmail}>
          <InputForm
            as='input'
            type='text'
            name='user_name'
            placeholder='name'
            maxLength='50'
            required
          />
          <InputForm
            as='input'
            type='email'
            name='user_email'
            placeholder='email'
            maxLength='50'
            required
          />
          <InputForm
            as='input'
            type='number'
            name='user_number'
            placeholder='phone'
            maxLength='50'
            required
          />
          <TextArea
            type='text'
            name='message'
            placeholder='message'
            maxLength='550'
          />
          <Button as='input' type='submit' value='Wyślij' />
        </FormContact>
      </WrapContainer>
      <ClipDown />
    </ContainerContact>
  );
};

export default Contact;

// const sendMessage = e => {
//   if (e) e.preventDefault();
//   const message = inputs.message;
//   const messageEnter = message
//     .replace(/\r\n|\r|\n/g, '%0D%0A')
//     .replace(' ', '%20');
//   const request =
//     'mailto:YOUREMAIL?subject=Email%20from%20' +
//     inputs.name +
//     '/' +
//     inputs.email +
//     '&body=' +
//     messageEnter;
//   document.location = request;
// };
