import styled from 'styled-components';

export const App = styled.div`
`;

export const Form = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 0 auto;
    max-width: 85%; 
    
    @media(min-width: 800px) {
        max-width: 45%;
    }
`;