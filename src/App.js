import React, { useState, useRef } from 'react'
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import './assets/styles/global.scss';
import { useOnOutsideClick } from './hooks'
import { Burger, Menu } from './cmps';
import AppHeader from './cmps/AppHeader';
import AppFooter from './cmps/AppFooter';
import MainApp from './pages/MainApp';

function App() {
  const [open, setOpen] = useState(false)
  const node = useRef()
  useOnOutsideClick(node, () => setOpen(false));

  return (
      <ThemeProvider theme={theme}>
        <AppHeader />
        <div className="mobile-menu" ref={node}>
          <Menu open={open} setOpen={setOpen} />
          <Burger open={open} setOpen={setOpen} />
        </div>
        <MainApp />
        <AppFooter />
        </ThemeProvider>
  );
}

export default App;
