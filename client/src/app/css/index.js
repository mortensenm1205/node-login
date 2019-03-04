import styled from 'styled-components';

export const App = styled.div`
`;

export const Form = styled.div`
    margin: 0 auto;
    max-width: 85%; 

    @media(min-width: 800px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        max-width: 45%;
    }
`;