import styled, { createGlobalStyle } from 'styled-components';

// This is being used in index.js outside of /app
// This is replacing what was in the index.html file.
export const Base = createGlobalStyle`
    html, body {
        background-color: #434857;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 18px;
        color: #efeeee;
      }

    html, body, h1, h2, h3, section, p {
        margin: 0;
    }
`

// App is our root container, 
// setting up grid here only after 800px screen size. 
export const App = styled.div`
    margin: 0 auto;

    @media(min-width: 800px) {
        display: grid;
        grid-template-rows: repeat(2, 1fr);
    }
`;

// I'm creating this comp because 
// /register and /login share certain styles 
// due to both being form comps.
export const Form = styled.div`
    margin: 0 auto;
    width: 90%;

    @media(min-width: 800px) {
        width: 35%;
    }
`;