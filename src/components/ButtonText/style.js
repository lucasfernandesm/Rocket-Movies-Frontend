

import styled from 'styled-components'

export const Container = styled.button`
    display: flex;
    align-items: center;
    gap: 0.8rem;

    font-family: "Roboto Slab", serif;
    color: ${({ theme }) => theme.COLORS.PINK};

    border: none;
    background: none;

    svg {
        width: 1.6rem;
        height: 1.6rem;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;