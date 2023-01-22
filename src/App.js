/** @format */
import React from 'react';
import { useState } from 'react';
import MainTemplate from './components/MainTemplate';

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
