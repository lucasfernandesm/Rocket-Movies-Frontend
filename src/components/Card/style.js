

import styled from 'styled-components'

export const Container = styled.button`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    width: 100%;

    padding: 3.2rem;

    border: none;
    border-radius: 1.6rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_CARD};
    color: ${({ theme }) => theme.COLORS.WHITE};

    P {
        font-family: "Roboto", serif;
        text-align: justify;
        color: ${({ theme }) => theme.COLORS.GRAY_100};

        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2; /* Limita a 2 linhas */
        overflow: hidden;
        text-overflow: ellipsis; /* Adiciona reticências (...) no final do texto */
        white-space: normal; /* Permite que o texto quebre em várias linhas */
    };

    footer {
        display: flex;
        gap: 0.8rem;
    }
`;