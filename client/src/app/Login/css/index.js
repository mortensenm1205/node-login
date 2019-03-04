import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Login = styled.section`
    @media(min-width: 800px) {

    }
`;

export const LoginTitle = styled.p`
    font-size: 1.6em;
    margin: 7% 0 5%;
`;

export const LoginForm = styled.form`
`;

export const LoginInput = styled.input`
    width: 100%;
    padding: 15px 0 5px 0;
    margin: 0 0 7% 0;
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

export const LoginButton = styled.button`
    box-shadow: 10px 14px 37px -12px #000;
    border: none;
    margin: 4% 0 6%;
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

export const LoginErrorContainer = styled.div`
`;

export const LoginError = styled.div`
    padding: 5% 0;
    color: #d26377;
`;

export const LoginRedirect = styled.p`
    margin: 5% 0;
`;

export const LoginLink = styled(Link)`
    color: #a0bfca;
    text-decoration: none;
    cursor: pointer;
`;