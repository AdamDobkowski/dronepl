/** @format */
import React from 'react';
// import { ThemeProvider } from 'styled-components';
// import { GlobalStyle } from './assets/style/GlobalStyle';
// import { theme } from './assets/style/theme';
// import Navigation from './components/Navigation/Navigation';
import { useState } from 'react';
// import Navigation from './components/Navigation/Navigation';

import MainTemplate from './components/MainTemplate';
// import Hero from '../src/components/Hero/Hero';
// import Main from './components/Main';

function App({ children }) {
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
      <MainTemplate
        open={open}
        handlerOpen={handlerOpen}
        coloricons={coloricons}
        changeIconColor={changeIconColor}
      />
    </>
  );
}

export default App;
