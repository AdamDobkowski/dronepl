/** @format */

import React, { useRef, useState } from 'react';
import {
  ContainerContact,
  ContainerInfo,
  WrapContainer,
  NumberContainer,
  FormContact,
  InputForm,
  TextArea,
  Button,
  ClipDown,
  ClipUp,
} from './Contact.style.jsx';

import { BsFillTelephonePlusFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import emailjs from '@emailjs/browser';

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
    // eslint-disable-next-line
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
