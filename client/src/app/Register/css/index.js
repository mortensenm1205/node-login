import styled from 'styled-components';

export const Register = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 0 auto;
    max-width: 45%;
`;

export const RegisterTitle = styled.p`
    grid-column: 1 / -1;
    font-size: 1.6rem;
`;

export const RegisterForm = styled.form`
    grid-column: 1 / 3;
`;

export const RegisterLabel = styled.label `
    display: block;
    margin: 5% 0;
`;

export const RegisterInput = styled.input`
    width: 100%;
`;

export const RegisterErrorContainer = styled.div`
    grid-column: 1 / -1;
`;

export const RegisterError = styled.div`
    padding: 5% 0;
`;

export const RegisterRedirect = styled.p`
    grid-column: 1 / -1;
`;