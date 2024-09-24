

import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;

    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};

    border-radius: 1rem;

    svg {
        width: 2rem;
        height: 1.8rem;
        margin-left: 1.2rem;

        color: ${({ theme }) => theme.COLORS.GRAY}
    }

    > input {
        width: 100%;
        height: 5.6rem;
        padding: 1.8rem 1.6rem;

        border: 0;
        background: transparent;

        color: ${({ theme }) => theme.COLORS.WHITE};

        &:placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY};
        }
    }
`;
