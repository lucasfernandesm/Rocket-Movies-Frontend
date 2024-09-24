

import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 5.6rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 1rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BLACK};
    color: ${({ theme }) => theme.COLORS.PINK};
`;