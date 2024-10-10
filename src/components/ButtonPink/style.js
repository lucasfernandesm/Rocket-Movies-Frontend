

import styled from "styled-components"

export const Container = styled.button`
    width: 100%;
    height: 5.6rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    border: none;
    border-radius: 1rem;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.GRAY_200};

    svg {
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.GRAY_200};
    }

    &:hover {
        transform: scale(1.01);
    }
`;