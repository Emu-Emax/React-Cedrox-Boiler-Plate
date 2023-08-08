// global.js

import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html,
  #root {
    height: 100%;
    min-height: 100vh;
    max-height: 100vh;
    width: 100%;
    scroll-behavior: smooth;
  }

  // NOTE: this disables TS prompt during development
  iframe
    {
      display: none;
    }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    display: flex;
    margin: 0;
    padding: 0;
    font-family: 'EduSABeginner', Roboto, sans-serif;
    transition: all 0.5s linear;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }`
