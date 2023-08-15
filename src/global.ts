import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'MD Sans', sans-serif;
        box-sizing:  border-box;
        overflow: hidden;
    }

    body {
        font-family: 'Nunito', sans-serif;
        margin: 0;
        padding: 0;
        background-color: black;
    }

    input, button, textarea, h1, h2, h3, h4, h5, h6 {
        font-family: 'MD Sans', sans-serif;
    }
`