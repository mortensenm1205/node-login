import styled from 'styled-components';

export const Register = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 0 auto;
    max-width: 45%;
`;

export const RegisterTitle = styled.p`
    border: 2px solid red;
    grid-column: 1 / -1;
`;

export const RegisterForm = styled.form`
    border: 2px solid red;
`;

export const RegisterError = styled.div`
    border: 2px solid red;
`;

export const RegisterRedirect = styled.p`
    border: 2px solid red;
`;