import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    /* hex */
    --white: #ffffff;
    --ghost-white: #f8f8ff;
    --red: #e52e4d;
    --green: #33cc95;
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
    background: var(--background);
  }

  body, input, textarea, button {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  } 

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    display: flex;
    align-items: center;
    justify-content: center;    
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    inset: 0;
  }

  .react-modal-content {
    background: var(--background);
    border-radius: 0.25rem;
    padding: 3rem;
    width: 100%;
    max-width: 576px;
    position: relative;
  }

  .react-modal-close {
    background: transparent;
    border: 0;
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    transform: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
