import { ThemeProvider } from "styled-components";
import GlobalStyles from './styles/global';
import ReactDOM from 'react-dom/client';
import { MyContext } from "./myContext";
import theme from './styles/theme';
import { Routes } from './routes';
import React from "react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme = {theme}>
      <GlobalStyles/>
      <MyContext.Provider value={{ name: 'samuel', email: 'samuelabrao@gmail.com' }}>
        <Routes />
      </MyContext.Provider>
    </ThemeProvider>
  </React.StrictMode>
)
