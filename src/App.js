import React, { useState, useRef } from 'react'
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import './assets/styles/global.scss';
import useOnOutsideClick from './Hooks/useOnOutsideClick'
import Burger from './cmps/Burger'
import Menu from './cmps/Menu'
import AppHeader from './cmps/AppHeader';
import AppFooter from './cmps/AppFooter';
import MainApp from './pages/MainApp';
import Cta from './cmps/Cta';

function App() {
  const [open, setOpen] = useState(false);
  const [visibillity, setVisibillity] = useState(false)
  const [isIconChange, setIsIconChange] = useState(false)
  const node = useRef()
  useOnOutsideClick(node, () => setOpen(false));
  const toggleAbout = () => {
    setVisibillity(!visibillity)
    setIsIconChange(!isIconChange)
  }

  return (
    <ThemeProvider theme={theme}>
      <AppHeader onClick={() => toggleAbout()} visibillity={visibillity} />
      <div className="mobile-menu" ref={node}>
        <Menu open={open} setOpen={setOpen} onClick={() => toggleAbout()} visibillity={visibillity} />
        <Burger open={open} setOpen={setOpen} />
      </div>
      <MainApp />
      <Cta onClick={() => toggleAbout()} isIconChange={isIconChange} visibillity={visibillity} />
      <AppFooter />
    </ThemeProvider>
  );
}

export default App;
