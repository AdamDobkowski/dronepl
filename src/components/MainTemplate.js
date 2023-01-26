/** @format */

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/style/GlobalStyle';
import { theme } from '../assets/style/theme';
import Navigation from './Navigation/Navigation';
import { useState } from 'react';

import Main from './Main/Main';

function MainTemplate({ children }) {
  const [open, isOpen] = useState(false);
  const handlerOpen = () => isOpen(!open);
  const [coloricons, isColorIcons] = useState(false);
  const changeIconColor = () => {
    if (window.scrollY >= 80) {
      isColorIcons(true);
    } else {
      isColorIcons(false);
    }
  };

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navigation
          open={open}
          handlerOpen={handlerOpen}
          coloricons={coloricons}
          changeIconColor={changeIconColor}
        />
        {children}
        <Main />
      </ThemeProvider>
    </>
  );
}

export default MainTemplate;
