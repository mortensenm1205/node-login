import styled from 'styled-components';

export const RegisterTitle = styled.p`
    grid-column: 1 / -1;
    font-size: 1.6rem;
`;

export const RegisterForm = styled.form`
    grid-column: 1 / -1;
`;

export const RegisterLabel = styled.label `
    display: block;
    margin: 5% 0;
`;

export const RegisterInput = styled.input`
    width: 100%;
    background-color: #434857;
    border: none;
    border-bottom: 2px solid #545766;
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