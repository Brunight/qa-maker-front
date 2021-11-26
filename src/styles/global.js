import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background-color: rgba(50, 207, 152, 0.8);
    /* background: #312e38;
    color: #fff; */
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Roboto', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  


  // React Modal
  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.3);

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
