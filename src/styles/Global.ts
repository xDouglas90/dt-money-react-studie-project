import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    /* hex */
    --white: #ffffff;
    --ghost-white: #f8f8ff;
    --red: #e52e4d;
    --dark-slate-blue: #5429cc;
    --slate-blue: #6933ff;
    --slate-gray: #708090;
    --light-steel-blue: #b0c4de;

    /* colors */
    --text-title: var(--slate-gray);
    --text-body: var(--light-steel-blue);
    --background: var(--ghost-white);
    --shape: var(--white);
    
  }
  
  *, *::after, *::before {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    -webkit-font-smothing: antialiased;
    background: var(--bg-color);
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
