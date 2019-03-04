import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Register = styled.section`
    grid-column: 1 / -1;
`;

export const RegisterTitle = styled.p`
    font-size: 1.6em;
    margin: 7% 0 5%;
`;

export const RegisterForm = styled.form`
`;

export const RegisterLabel = styled.label `
    display: block;
    margin: 10% 0;
    font-size: 0.9em;
`;

export const RegisterInput = styled.input`
    width: 100%;
    padding: 15px 0 5px 0;
    background-color: #434857;
    border: none;
    border-bottom: 2px solid #545766;
    color: #efeeee;
    font-size: 0.9em;

    :focus {
        outline: 0;
        caret-color: #efeeee;
        border-bottom: 2px solid #76633f;
    }
`;

export const RegisterButton = styled.button`
    box-shadow: 10px 14px 37px -12px #000;
    border: none;
    margin: 3% 0 4%;
    padding: 4% 11%;
    border-radius: 25px;
    font-size: 1.2em;
    background-color: #000;
    color: #fff;
    width: 100%;

    :focus { 
        outline: 0;
    }
`;

export const RegisterErrorContainer = styled.div`
`;

export const RegisterError = styled.div`
    padding: 5% 0;
    color: #d26377;
`;

export const RegisterRedirect = styled.p`
    margin: 5% 0;
`;

export const RegisterLink = styled(Link)`
    color: #a0bfca;
    text-decoration: none;
    cursor: pointer;
`;