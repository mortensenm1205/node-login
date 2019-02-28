import styled from 'styled-components';

export const Form = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 0 auto;
    max-width: 85%; 
    background-color: #434857;
    border: 2px solid red;
    
    @media(min-width: 800px) {
        max-width: 45%;
    }
`;