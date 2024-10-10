

import styled from "styled-components";

import backgroundImg from '../../assets/backgroundImg.png'

export const Container =styled.div`
    display: flex;
    height: 100vh;
`;

export const Form =styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 13.4rem; 

    h1 {
        font-size: 4.8rem;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    P {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.GRAY_000};
    }

    h2 {
        font-weight: 500;

        margin: 4.8rem 0;
    }

    > div:nth-child(5) {
        margin-top: 0.8rem;
    }

    > div:nth-child(6) {
        margin: 0.8rem 0 2.4rem;
    }

    button:last-child {
        text-align: center;

        background: none;
        border: none;

        margin-top: 4.2rem;

        color: ${({ theme }) => theme.COLORS.PINK};

        &:hover {
            transform: scale(1.05);
        }
    }
`;

export const Background =styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover; 
    filter: brightness(0.5);
`;