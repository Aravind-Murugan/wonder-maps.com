/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable-next-line */

// import libraries
import { styled, createGlobalStyle } from 'styled-components'
import theme from 'styled-theming'

export const backgroundColor = theme('theme', {
  light: '#fff',
  dark: '#2d2d2d',
});

export const textColor = theme('theme', {
  light: '#000',
  dark: '#fff',
});

export const GlobalStyle = createGlobalStyle`
  :root {
    --BackgroundColor: ${backgroundColor};
    --TextColor: ${textColor};
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    background-color: var(--BackgroundColor);
    color: var(--TextColor);
    transition: all 0.25s ease;
  }
  .App-PerLoader {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  #HomePage-Section {
    display: flex;
  }
`;