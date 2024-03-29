import styled from 'styled-components';

export const Home = styled.div`
    background-color: ${props => props.auth && "#fff;"}
    text-align: center;
    padding-top: 55.5%;    
    height: 74.5vh;

    @media(min-width: 800px) {
        grid-row: 1/-1;
        padding-top: 10%;
   }
`;

export const HomeTitle = styled.h1`
    color: #000;
    margin: 0 0 5%;
    `;

export const HomeInfo = styled.p`
    color: #000;
    font-size: 1.2em;
    margin: 0 0 3.5%;
`;

export const HomeButton = styled.button`
    box-shadow: 4px 7px 37px -12px #f8ad1c;
    border: none;
    padding: 4% 11%;
    margin-top: 50%
    border-radius: 25px;
    font-size: 1.2em;
    font-weight: 700;
    background-color: #f8ad1ce8;
    color: #fff;
    width: 90%;

    :focus { 
        outline: 0;
    }

    @media(min-width: 800px) {
        margin: 0;
        width: 15%;
        padding: 1%;
   }
`;